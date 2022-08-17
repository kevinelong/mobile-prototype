import mysql.connector


class ApiDatabase:
    def __init__(self, database_name='vita', host="localhost",
                 user="postgres", password="beer"):
        self.models = {}
        # self.connection = psycopg2.connect(host=host, database=database_name, user=user, password=password)
        # self.cursor = self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        # self.connection.autocommit = True
        self.connection = mysql.connector.connect(user='scott', password='password',
                        host='127.0.0.1',
                        database='employees')

    def addModel(self, model_name, fields):
        self.models[model_name] = ApiModel(self, model_name, fields)
        return self.models[model_name]


class ApiModel:
    def __init__(self, database, model_name, fields, id_field="id"):
        self.database = database
        self.name = model_name
        self.fields = fields
        self.id_field = id_field

        self.routes = {
            "GET": lambda data: self.read(),
            "POST": lambda data: self.create(data),
            "PUT": lambda data: self.update(data[self.id_field], data),
            "DELETE": lambda data: self.delete(data[self.id_field]),
        }

    def route(self, method, data={}):
        return self.routes[method](data)

    def create_table(self):
        self.execute(f"DROP TABLE IF EXISTS {self.name};")
        field_list = ', '.join([f"{f} {self.sql_datatype(f)}" for f in self.fields])
        sql = f"CREATE TABLE {self.name} ( {field_list} );"
        print(sql)
        self.execute(sql)

    def create(self, data):
        values = ','.join([f"'{p[1]}'" for p in dict(data).items()])
        query = f"INSERT INTO {self.name} ({','.join(self.non_id_fields())}) VALUES ({values});"
        return self.execute(query)

    def update(self, id, data):
        pairs = [f"{p[0]}='{p[1]}'" for p in dict(data).items()]
        query = f"UPDATE {self.name} {pairs} WHERE {self.id_field} = {id};"
        return self.execute(query)

    def delete(self, id):
        return self.execute(f"DELETE FROM {self.name} WHERE {self.id_field} = {id};")

    def read(self):
        self.execute(f"SELECT {self.return_fields()} FROM {self.name};")
        return self.database.cursor.fetchall()

    @staticmethod
    def sql_datatype(field_name):
        f = field_name.lower()
        if f.startswith("is_") or f.startswith("has_"):
            return "boolean"
        if f.endswith("_date") or f.endswith("_time") or f.endswith("_datetime"):
            return "timestamp"  # date, time, or both
        if f.endswith("_size") or f.endswith("_weight"):
            return "real"  # floating point decimal
        if f == "id":
            return "serial"
        if f.startswith("fk_") or f.endswith("_id"):
            return "integer"
        return "text"  # Default

    def read_one(self, id, field=None):
        field = field if field else self.id_field
        self.execute(f"SELECT {self.return_fields()} FROM {self.name} WHERE {field}='{id}';")
        return self.database.cursor.fetchone()

    def execute(self, query):
        print(query)
        return self.database.cursor.execute(query)

    def name(self):
        return f'{self.database.connection.info.dbname}."{self.name}"'

    def non_id_fields(self):
        return [f for f in self.fields if f != self.id_field]

    def query_fields(self):
        return ','.join(self.fields)

    def return_fields(self):
        return ','.join([self.id_field] + self.fields)

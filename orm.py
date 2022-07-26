import psycopg2
import psycopg2.extras


class ApiDatabase:
    def __init__(self, database_name='vita', host="localhost", user="postgres", password="beer"):
        self.connection = psycopg2.connect(host=host, database=database_name, user=user, password=password)
        self.cursor = self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        self.connection.autocommit = True


class ApiModel:
    def __init__(self, database, table, fields, id_field="id"):
        self.database = database
        self.table = table
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

    def create(self, data):
        values = ','.join(map(lambda p: f"'{p[1]}'", dict(data).items()))
        query = f"INSERT INTO {self.name()} ({self.query_fields()}) VALUES ({values});"
        return self.execute(query)

    def update(self, id, data):
        pairs = map(lambda p: f"{p[0]}='{p[1]}'", dict(data).items())
        query = f"UPDATE {self.name()} {pairs} WHERE id = {id};"
        return self.execute(query)

    def delete(self, id):
        return self.execute(f"DELETE FROM {self.name()} WHERE {self.id_field} = {id};")

    def read(self):
        self.execute(f"SELECT {self.return_fields()} FROM {self.name()};")
        return self.database.cursor.fetchall()

    def read_one(self, id, field=None):
        field = field if field else self.id_field
        self.execute(f"SELECT {self.return_fields()} FROM {self.name()} WHERE {field}='{id}';")
        return self.database.cursor.fetchone()

    def execute(self, query):
        print(query)
        return self.database.cursor.execute(query)

    def name(self):
        return f'{self.database.connection.info.dbname}."{self.table}"'

    def query_fields(self):
        return ','.join(self.fields)

    def return_fields(self):
        return ','.join([self.id_field] + self.fields)

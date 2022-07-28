import psycopg2
import psycopg2.extras
from dom import *


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
        query = f"UPDATE {self.name()} {pairs} WHERE {self.id_field} = {id};"
        return self.execute(query)

    def delete(self, id):
        return self.execute(f"DELETE FROM {self.name()} WHERE {self.id_field} = {id};")

    def read(self):
        self.execute(f"SELECT {self.return_fields()} FROM {self.name()};")
        return self.database.cursor.fetchall()

    def create_table(self):
        self.execute(f"DROP TABLE IF EXISTS {self.table};")
        field_list = ', '.join(map(lambda f: f"{f} {self.sql_datatype(f)}", self.fields))
        sql = f"CREATE TABLE {self.table} ( {field_list} );"
        print(sql)
        self.execute(sql)

    @staticmethod
    def sql_datatype(field_name):
        f = field_name.lower()
        if f.startswith("is_") or f.startswith("has_"):
            return "boolean"
        if f.endswith("_date") or f.endswith("_time") or f.endswith("_datetime"):
            return "timestamp"  # date, time, or both
        if f.endswith("_size") or f.endswith("_weight"):
            return "real"  # floating point decimal
        if f == "id" or f.startswith("fk_") or f.endswith("_id"):
            return "integer"
        return "character"  # Default

    @staticmethod
    def dom_datatype(field_name):
        f = field_name.lower()
        if f.startswith("is_") or f.startswith("has_"):
            return "boolean"
        if f.endswith("_date") or f.endswith("_time"):
            return "date"  # date, time, or both
        if f.endswith("_time"):
            return "time"  # date, time, or both
        if f.endswith("_size") or f.endswith("_weight"):
            return "number"  # floating point decimal
        if f == "id" or f.startswith("fk_") or f.endswith("_id"):
            return "number"
        return "input"  # Default

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

    def form(self):
        return self.table + Br() + Form("".join([
            "".join(map(lambda f: Input(f, "", self.dom_datatype(f), f'placeholder="{f}"'), self.fields)),
            Submit()]))

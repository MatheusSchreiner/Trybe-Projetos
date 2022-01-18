from .importer import Importer
import json


class JsonImporter(Importer):
    @staticmethod
    def import_data(data):
        if not data.endswith(".json"):
            raise ValueError("Arquivo Inválido")
        with open(data) as file:
            return json.load(file)

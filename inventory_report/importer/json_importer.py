import json

from inventory_report.importer.importer import Importer


class JsonImporter(Importer):
    @staticmethod
    def import_data(data):
        if not data.endswith(".json"):
            raise ValueError("Arquivo inválido")
        with open(data) as file:
            return json.load(file)

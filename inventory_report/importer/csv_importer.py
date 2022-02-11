import csv

from inventory_report.importer.importer import Importer


class CsvImporter(Importer):
    @staticmethod
    def import_data(data):
        if not data.endswith(".csv"):
            raise ValueError("Arquivo inválido")
        with open(data) as file:
            return list(csv.DictReader(file))

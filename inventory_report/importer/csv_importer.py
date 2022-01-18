from .importer import Importer
import csv


class CsvImporter(Importer):
    @staticmethod
    def import_data(data):
        if not data.endswith(".csv"):
            raise ValueError("Arquivo Inválido")
        with open(data) as file:
            return list(csv.DictReader(file))

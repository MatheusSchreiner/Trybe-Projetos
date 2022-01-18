import sys

from inventory_report.importer.csv_importer import CsvImporter
from inventory_report.importer.json_importer import JsonImporter
from inventory_report.importer.xml_importer import XmlImporter
from inventory_report.inventory.inventory_refactor import InventoryRefactor


def main():
    if len(sys.argv) < 3:
        return sys.stderr.write("Verifique os argumentos\n")

    _, path, report = sys.argv

    if path.endswith(".csv"):
        importer = CsvImporter
    if path.endswith(".json"):
        importer = JsonImporter
    if path.endswith(".xml"):
        importer = XmlImporter

    output = InventoryRefactor(importer).import_data(path, report)

    print(output, end="")

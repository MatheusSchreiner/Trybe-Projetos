import xml.etree.ElementTree as ET

from inventory_report.importer.importer import Importer


class XmlImporter(Importer):
    @staticmethod
    def import_data(data):
        if not data.endswith(".xml"):
            raise ValueError("Arquivo inválido")
        with open(data) as file:
            tree = ET.parse(file)
            root = tree.getroot()
            return [{el.tag: el.text for el in branch} for branch in root]

from .importer import Importer
import xml.etree.ElementTree as xml


class XmlImporter(Importer):
    @staticmethod
    def import_data(data):
        if not data.endswith(".xml"):
            raise ValueError("Arquivo Inválido")
        with open(data) as file:
            tree = xml.parse(file)
            root = tree.getroot()
            return [{el.tag: el.text for el in branch} for branch in root]

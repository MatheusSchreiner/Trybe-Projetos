import csv
import json
import xml.etree.ElementTree as xml
from reports.simple_report import SimpleReport
from reports.complete_report import CompleteReport


class Inventory():
    @staticmethod
    def read(path):
        with open(path, mode="r") as file:
            if path.endswith(".csv"):
                return list(csv.DictReader(file))
            elif path.endswith(".json"):
                return json.load(file)
            elif path.endswith(".xml"):
                tree = xml.parse(file)
                root = tree.getroot()
                return [{el.tag: el.text for el in branch} for branch in root]

    @classmethod
    def import_data(cls, path, type):
        list = cls.read(path)
        if type == "simples":
            return SimpleReport.generate(list)
        if type == "completo":
            return CompleteReport.generate(list)

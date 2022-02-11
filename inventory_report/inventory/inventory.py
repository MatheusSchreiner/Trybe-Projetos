import csv
import json
import xml.etree.ElementTree as ET

from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @staticmethod
    def read(path):
        with open(path, mode="r") as file:
            if path.endswith(".csv"):
                return list(csv.DictReader(file))
            if path.endswith(".json"):
                return json.load(file)
            if path.endswith(".xml"):
                tree = ET.parse(file)
                root = tree.getroot()
                return [{el.tag: el.text for el in branch} for branch in root]

    @classmethod
    def import_data(cls, path, report):
        list = cls.read(path)
        if report == "simples":
            return SimpleReport.generate(list)
        if report == "completo":
            return CompleteReport.generate(list)

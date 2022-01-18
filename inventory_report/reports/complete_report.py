from .simple_report import SimpleReport
from collections import Counter


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, list):
        simple = SimpleReport.generate(list)

        count_comp = Counter([item["nome_da_empresa"] for item in list])

        result = ""
        for key, value in count_comp.items():
            result += f"- {key}: {value}"

        return(
            f"{simple}\n"
            "Produtos estocados por empresa:"
            f"{result}"
        )

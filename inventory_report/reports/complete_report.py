from collections import Counter

from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, list):
        simple_report = super().generate(list)

        companies_counter = Counter(item["nome_da_empresa"] for item in list)

        report = "".join(
            f"- {company}: {companies_counter[company]}\n"
            for company in companies_counter
          )

        return (
            f"{simple_report}\n"
            "Produtos estocados por empresa: \n"
            f"{report}"
        )

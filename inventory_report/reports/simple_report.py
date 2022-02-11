from datetime import datetime
from statistics import mode


class SimpleReport:
    @staticmethod
    def generate(list):
        today = datetime.strftime(datetime.now(), "%Y-%m-%d")

        fab_dates = [item["data_de_fabricacao"] for item in list]

        val_dates = [item["data_de_validade"] for item in list
                     if item["data_de_validade"] > today]

        companies = [item["nome_da_empresa"] for item in list]

        return (
            f"Data de fabricação mais antiga: {min(fab_dates)}\n"
            f"Data de validade mais próxima: {min(val_dates)}\n"
            "Empresa com maior quantidade de produtos estocados: "
            f"{mode(companies)}\n"
        )

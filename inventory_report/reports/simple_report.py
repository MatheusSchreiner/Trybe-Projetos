from datetime import datetime
from statistics import mode


class SimpleReport:
    @staticmethod
    def generate(list):
        today = datetime.strftime(datetime.now(), "%Y-%m-%d")

        date_fab = [item["data_de_fabricacao"] for item in list]

        date_val = [item["data_de_validade"] for item in list
                    if item["data_de_validade"] > today]

        name_comp = [item["nome_da_emrpesa"] for item in list]

        return (
            f"Data de fabricação mais antiga: {min(date_fab)}\n"
            f"Data de validade mais próxima: {min(date_val)}\n"
            "Empresa com maior quantidade de produtos estocados: "
            f"{mode(name_comp)}"
        )

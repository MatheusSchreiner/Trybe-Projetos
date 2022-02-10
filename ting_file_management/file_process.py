import sys
from .file_management import txt_importer


def process(path_file, instance):
    data = txt_importer(path_file)
    
    obj = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(data),
        "linhas_do_arquivo": data,
    }

    if any(i["nome_do_arquivo"] == path_file for i in instance._data):
        return None

    instance.enqueue(obj)
    sys.stdout.write(str(obj))


def remove(instance):
    """Aqui irá sua implementação"""


def file_metadata(instance, position):
    """Aqui irá sua implementação"""

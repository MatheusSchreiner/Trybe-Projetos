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
    try:
        file = instance.dequeue()
        sys.stdout.write(
            f'Arquivo {file["nome_do_arquivo"]} removido com sucesso\n'
        )
    except TypeError:
        sys.stdout.write("Não há elementos\n")


def file_metadata(instance, position):
    try:
        file = instance.search(position)
        sys.stdout.write(str(file))
    except IndexError:
        sys.stderr.write("Posição inválida")

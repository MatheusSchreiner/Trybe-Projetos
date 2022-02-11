# https://stackoverflow.com/questions/522563/accessing-the-index-in-for-loops
def exists_word(word, instance):
    file = instance.search(0)
    instance.dequeue()

    return [{
                "palavra": word,
                "arquivo": file["nome_do_arquivo"],
                "ocorrencias": [{"linha": index + 1}],
            }
            for index, line in enumerate(file["linhas_do_arquivo"])
            if word.lower() in line.lower()
            ]


def search_by_word(word, instance):
    file = instance.search(0)
    instance.dequeue()

    return [{
                "palavra": word,
                "arquivo": file["nome_do_arquivo"],
                "ocorrencias": [{"linha": index + 1, "conteudo": line}],
            }
            for index, line in enumerate(file["linhas_do_arquivo"])
            if word.lower() in line.lower()
            ]

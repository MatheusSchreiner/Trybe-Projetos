def ordenation_string(string):
    lista = list(string)

    # Código do conteúdo da trybe sobre bubble_sort
    # https://app.betrybe.com/course/computer-science/algoritmos/algoritmos-de-ordenacao-e-busca/29521083-44ea-488d-a74d-216b1ac79b04/conteudos/60672880-f607-40d3-92fc-e551b740a91f/algoritmos-de-ordenacao/fd503999-673b-443d-afb1-ffcc5d1718f4?use_case=side_bar
    has_swapped = True

    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for i in range(len(lista) - num_of_iterations - 1):
            if lista[i] > lista[i + 1]:
                lista[i], lista[i + 1] = lista[i + 1], lista[i]
                has_swapped = True
        num_of_iterations += 1

    return lista

def is_anagram(first_string, second_string):
    if len(first_string) != len(second_string):
        return False

    return ordenation_string(first_string) == ordenation_string(second_string)

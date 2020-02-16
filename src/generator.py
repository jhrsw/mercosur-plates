import processing
import os

associations = {'A': '4', 'B': '8', 'E': '3', 'G': '6',
                'I': '1', 'O': '0', 'Q': '9', 'S': '5', 'T': '7', 'Z': '2'}


path = os.path.join(os.path.dirname(os.getcwd()), 'data')

dic = 'pt-BR.dic'

lang = dic.split('.')[0]

with open(os.path.join(path, 'dic', dic), 'r', encoding='utf8') as f:
    data = f.read().splitlines()

clean = dict((w, i) for i, w in enumerate(map(processing.clean_and_normalize_word, data))
             if processing.has_seven_alphabet_chars(w) and processing.is_match(w, associations))

final = [processing.convert_to_leet(i, associations) for i in clean.keys()]

originals = [processing.clean_word(data[i]).upper() for i in clean.values()]

with open(os.path.join(path, 'plates', lang + '-plates.txt'), 'w', encoding='utf8') as f:
    for word in final:
        f.write(word + '\n')

with open(os.path.join(path, 'plates', lang + '-words.txt'), 'w', encoding='utf8') as f:
    for word in originals:
        f.write(word + '\n')

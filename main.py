from fun import *

dictionary = r"data\pt-BR.dic"

data = open(dictionary, encoding="utf8").readlines()

for i in range(len(data)):
    data[i] = clean_extra_characters(data[i])

for i in range(len(data)):
    data[i] = normalize_words(data[i])

guardar = find_leet_possibilities(find_seven_letter_words(data))

leet = find_leet_possibilities(find_seven_letter_words(data))

for i in range(len(leet)):
    leet[i] = convert_to_leet(leet[i])

save = open("placas.txt", "w")

for word in leet:
    save.write(word+'\n')

originais = open("originais.txt", "w", encoding="utf-8")

for word in guardar:
    originais.write(word+'\n')

for word in leet:
    print(word)
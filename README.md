# Mercosur Plates
Interactive visualization of Brazilian Portuguese words which fit in Mercosur's registration plates. The words generator code is written in Python 3 and for the visualization I utilized p5.js.

## Model
The plates have a model which mixes four letters and three numbers. It is the official implemented system as of January 31, 2020.
Their format is '@@@#@##', where @ stands for A-Z characters and # for 0-9 digits.
Regex equivalent: /[A-Z]{3}\d[A-Z]\d{2}/

## Equivalences
0 = O

1 = I

2 = Z

3 = E

4 = A

5 = S

6 = G

7 = T

8 = B

9 = Q

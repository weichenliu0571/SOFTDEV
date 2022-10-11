# GODA (Julia Lee, Aaron Gershkovich, Weichen Liu)

### OUTLINE
1. First we generated a dictionary from reading occupations.csv .
2. Then we used the dictionary to gather the total probability of the occupations.
3. Then we utilize flask to access a local host.
4. Then we return a string that would serve as the html source code for the webpage.
5. Within the return statement, we called a function that would return a occupation based on its probability from the static dictionary.

### Note
- We are only reading the csv file once

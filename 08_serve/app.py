import random
from flask import Flask
total = 0.0
def readfile(f):
    with open(f,"r") as a:
        return a.read()

def split_by_last_comma(occupation):
    comma_index = occupation.rindex(",")
    splits = [occupation[:comma_index],float(occupation[comma_index+1:])]
    if splits[0][0] == "\"":
        splits[0]=splits[0][1:-1]
    return splits

def generate_occupation_dict(txt):
    occupations = txt.split("\n")[1:-1]
    occ_dict = {}
    for occupation in occupations:
        occ_list = split_by_last_comma(occupation)
        occ_dict[occ_list[0]] = occ_list[1]
    return occ_dict

def pick_random_occupation(occ_dict):
    num = random.random()*total
    for occ in occ_dict:
        num -= occ_dict[occ]
        if num < 0:
            return occ

def allJobs(dict):
    result = ""
    for key in list(dict.keys()):
        result += key + "; "
    return result

occ_dict = generate_occupation_dict(readfile("occupations.csv"))
total = occ_dict["Total"]
occ_dict.pop("Total")

app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return pick_random_occupation(occ_dict) + "<br> Jobs: <br>" + allJobs(occ_dict)
if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

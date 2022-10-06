'''
Goda (Aaron Gershkovich,Julia Lee, Weichen Liu)
SoftDev
K08
2022-10-04
Time Spent:

DISCO:
- No print statement in v1, therefore we don't print the _name_ in the terminal. 
- _name_ is supposed to be a variable in flask.
- _main_ is name if not otherwise defined
'''
from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()


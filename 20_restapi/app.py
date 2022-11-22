# Balls (Weichen + Jeffrey)
# SoftDev
# K20: API STUFF
# 2022-11-21
# time spent: .5 hrs

from flask import Flask, escape, request, render_template
import urllib3
import json

app = Flask(__name__)
@app.route('/')
def hello():
    with open('key_nasa.txt') as f:
        apikey = f.read() # retrieves API key

    http = urllib3.PoolManager()
    link = 'https://api.nasa.gov/planetary/apod?api_key=' + apikey

    response = http.request('GET', link)
    _data = response.data

    print(_data)

    image = json.loads(_data)["url"]
    explanation = json.loads(_data)["explanation"]

    return render_template("main.html", image = image, explanation = explanation)

if __name__ == '__main__':
    app.debug = True
    app.run()

from flask import Flask, redirect, url_for, render_template, request, session

app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

users = {'m':'donky'} # hardcode users

@app.route("/")
def disp_loginpage():
    if 'username' in session:
        return render_template('response.html',
        user = session["username"])
    return render_template('login.html')

@app.route("/auth")
def authenticate():
    if request.method == 'POST':
        user = request.form.get['username']
        password = request.form.get['password']
        if user not in users.keys():
            error = "USER DNE"
            return render_template('login.html', error = error)
        if password != users(user):
            error = "Wrong Password"
            return render_template('login.html', error = error)
        
        session["username"] = user
        return redirect(url_for('index'))

@app.route("/logout")
def logout():
    return render_template( 'login.html' ) #brings back to homepage

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
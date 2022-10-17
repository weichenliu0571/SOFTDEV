# Goda (Aaron Gershkovich,Julia Lee, Weichen Liu)

## DISCO
### PREDICTIONS:
- render_template('login.html') will display the login.html file.
- Under the text will be a space for us to enter an input.
- After we give an input, the authentication page will be displayed.
- print(request), print(request.args), and print(request.headers) may be printed in the terminal

### OUTCOME:
- Box was open to input where username could be entered
- authenticate file was returned after entering in the username
- Aspects of Flask and data inputted were displayed, need closer inspection to see more
- app.route("<route>") doesn't need to be "\\auth" as long as it matches what's in the form action.
- The route is displayed in the url after you submit the input. Essentially, after you submit the input, the python file will utilize the code under app.route("\\auth") instead of app.rout("\\").
- request.args holds a dictionary of input types and their name. In this case, the name is modified according to what username you input in the webpage.

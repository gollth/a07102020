Task:

Issue: tsx 'register' function is not setting username using the 'usernameRegister' value

Task: Get the register component to set the loged in username based on the register username field.

Background: I'm converting a .js file to jsx file

Deliverable: Fix setting username from 'usernameRegistered' with as few changes as possible.  Ignore other issues.  Document (a line or two) if you add a new hook as to why.

See lines:


Register.tsx lines 22  - This is where I am trying to set it

My attempt (commented out):

user/UserBar.tsx line 29
App.js lines 24,46 
userBar.tsx line 29
Register.tsx lines 12,22

Original (plain js) version is user/Register_old.js

note that login.jsx is similar, I converted it from js to tsx and works ok
The main difference in Register is that I want to set the logged in username frm the usernameRegister field instead of just from the username field that is used in Login.


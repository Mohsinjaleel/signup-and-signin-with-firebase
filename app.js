var database = firebase.database().ref("/")
// var auth = database.auth()
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var cellnumber = document.getElementById("cellnumber");
var gender = document.getElementById("gender");
var age = document.getElementById("age");
var pass = document.getElementById("pass");


  submit = () => {
    var user = {
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        cellnumber : cellnumber.value,
        gender : gender.value,
        age : age.value,  
        pass : pass.value
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
    .then( (res) => {
        console.log(res);
        database.child('user/' + res.uid).set(user).then( () => {
        location = "login/login.html"
        })
    })
    
    .catch( (error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});


}
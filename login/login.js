var database = firebase.database().ref("/")
var email = document.getElementById("email");
var pass = document.getElementById("pass");


document.getElementById('stop').addEventListener("submit",
     submit = (event)  => {
        event.preventDefault()
        var user = {
            email : email.value,
            password : pass.value
            }
           firebase.auth().signInWithEmailAndPassword(user.email, user.password)
.then(function(success){
    console.log ('yahoo')
    database.child('user/' + success.uid).once('value', (snapshot) => {
        var convert = JSON.stringify(snapshot.val())
        localStorage.setItem('user',convert)
        // location = '../home/home.html'
        // console.log(convert)
    })

})

.catch( (error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
})
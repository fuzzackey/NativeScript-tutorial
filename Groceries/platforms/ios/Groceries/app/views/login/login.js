var page;
var email;
var frameModule = require("ui/frame");

exports.loaded = function(args) {
    page = args.object;
};

exports.signIn = function() {
    email = page.getViewById("email");
    console.log(email.text);
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
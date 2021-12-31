var numbergot = "         +91 00 000 () 000";
var number = numbergot.replaceAll(" ", "");
var add = number.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
console.log(add);

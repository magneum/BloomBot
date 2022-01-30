var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
const File = " silver";
if (File.match(format)) {
  console.log("True");
} else {
  console.log("False");
}

$(document).ready(function () {
  $("#generate-button").on("click", function () {
    let length = $("#password-length").val();
    let password = generatePassword(length);
    $("#password-display").val(password);
  });
});

function generatePassword(length) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index);
  }
  return password;
}

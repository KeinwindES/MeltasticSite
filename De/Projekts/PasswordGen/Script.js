document
  .querySelector("#generateButton")
  .addEventListener("click", function () {
    let length = parseInt(document.getElementById("length").value);
    length = Math.min(Math.max(length, 4), 20); // Ensure length is within range
    document.getElementById("password").value = generatePassword(length);
  });

function generatePassword(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return password;
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const cookieBtn = document.getElementById("cookieBtn");
const restoreCookie = document.getElementById("restoreCookie");

submitBtn.addEventListener("click", () => {
  if (cookieBtn.checked) {
    setCookie("username", username.value, 3650000000000);
    setCookie("password", password.value, 365000000000000);
  } else {
    return;
  }
});

restoreCookie.addEventListener("click", () => {
  username.value = getCookie("firstName");
  password.value = getCookie("lastName");
});

function setCookie(name, value, ExpirationDate) {
  const date = new Date();
  date.setTime(date.getTime() + ExpirationDate * 24 * 60 * 60 * 1000);
  let expiration = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expiration}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cookieDecoded = decodeURIComponent(document.cookie);
  const cookieArray = cookieDecoded.split("; ");
  console.log(cookieArray);
  let result = null;

  cookieArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

console.log(document.cookie);

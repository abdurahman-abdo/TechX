const navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.display = "block";
  navLinks.style.right = "0px";
}

function hideMenu() {
  navLinks.style.display = "none";
  navLinks.style.right = "-200px";
}

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hideElements = document.querySelectorAll(".hide");
hideElements.forEach((element) => observe.observe(element));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

const detector = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

const consealedElements = document.querySelectorAll(".consealed");
consealedElements.forEach((element) => detector.observe(element));

const observer0 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show0");
    } else {
      entry.target.classList.remove("show0");
    }
  });
});

const hidden0Elements = document.querySelectorAll(".hidden0");
hidden0Elements.forEach((element) => observer0.observe(element));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show1");
    } else {
      entry.target.classList.remove("show1");
    }
  });
});

const hidden1Elements = document.querySelectorAll(".hidden1");
hidden1Elements.forEach((element) => observer1.observe(element));

const iframe = document.getElementById("signin-iframe");
const button = document.getElementById("button");
const overlay = document.getElementById("overlay");

button.addEventListener("click", () => {
  overlay.style.display = "block";
});

window.addEventListener("message", (event) => {
  if (event.data === "closeOverlay") {
    overlay.style.display = "none";
  }
});

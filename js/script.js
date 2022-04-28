var html = document.documentElement;

var loginLink = document.querySelector(".login");

var map = document.querySelector(".map-point");

var popup = document.querySelector(".modal-content");

var contentMap = document.querySelector(".modal-content-map");

var overlay = document.querySelector(".modal-overlay");

var closePopup = popup.querySelector(".modal-content-close");

var closeMap = contentMap.querySelector(".modal-content-close");

var focusLogin = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var form = popup.querySelector(".login-form");

var storage = localStorage.getItem("focusLogin");

var overlayClose = document.querySelector(".modal-overlay");

var buttonSubmit = form.querySelector("[type=submit]");




loginLink.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  focusLogin.focus();

  if (storage) {
    focusLogin.value = storage;
    password.focus();
  } else {
    focusLogin.focus();
  }
});


buttonSubmit.addEventListener("mousedown", function(event) {
  event.preventDefault();
   if (popup.classList.contains("modal-error")) {
     popup.classList.remove("modal-error");
     popup.classList.remove("modal-content-animation");
   }
});



form.addEventListener("submit", function(event) {
  if (!focusLogin.value || !password.value) {
    event.preventDefault();
       popup.classList.add("modal-error");
  } else {
    localStorage.setItem("focusLogin", focusLogin.value);
  }
});

loginLink.addEventListener("mousedown", function() {
    popup.classList.add("modal-content-animation");
});


map.addEventListener("click", function(event) {
  event.preventDefault();
  contentMap.classList.add("content-map-show");
  overlay.classList.add("modal-overlay-show");
});

closePopup.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  contentMap.classList.remove("content-map-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show") || overlay.classList.contains("modal-overlay-show") || contentMap.classList.contains("content-map-show")) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
    contentMap.classList.remove("content-map-show");
    popup.classList.remove("modal-error");
    }
  }
});


overlayClose.addEventListener("click", function(event) {
  if (popup.classList.contains("modal-content-show") || overlay.classList.contains("modal-overlay-show") || contentMap.classList.contains("content-map-show")) {
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  contentMap.classList.remove("content-map-show");
  popup.classList.remove("modal-error");
  }
});


var gallery = document.querySelector(".gallery");
gallery.classList.add("gallery-live");


var buttons = '<button class="btn gallery-prev" type="button">Назад</button>' + '<button class="btn gallery-next" type="button">Вперёд</button>';
gallery.innerHTML = gallery.innerHTML + buttons;


var prev = document.querySelector(".gallery-prev");
prev.setAttribute('disabled', 'disabled');





html.className = html.className.replace("no-js", "js");

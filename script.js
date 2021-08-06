console.log("page loading...");

function loading() {
  alert("Loading weather report...");
}

var cookieSpan = document.querySelector(".btn");

function accept() {
  cookieSpan.remove();
}

var endedIt = document.querySelector(".sub_container");

function hide() {
  endedIt.remove();
}

function convert(element) {
  console.log(element.value);
}

function over(element) {
  element.style.backgroundColor = "lime";
}

function out(element) {
  element.style.backgroundColor = "#efefef";
}

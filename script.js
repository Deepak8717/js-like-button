var fa = document.getElementsByClassName("fa");
var span = document.getElementsByTagName("span")[0];
var counter = 0;
fa[0].addEventListener("click", function () {
  counter++;
  span.innerHTML = counter;
});

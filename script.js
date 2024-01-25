var options = document.getElementById("options");
var optionBtns = options.getElementsByTagName("div");
var wrapper = document.getElementsByClassName("wrapper")[0];

for (var i = 0; i < optionBtns.length; i++) {
  optionBtns[i].addEventListener("click", function () {
    var selected = document.getElementsByClassName("active");
    if (selected.length > 0) {
      selected[0].className = selected[0].className.replace("active", "");
    }
    this.className += "active";
  });
}

function submitRating() {
  wrapper.classList.toggle("switched");
  var rating = document.querySelector(".active").innerHTML;
  document.getElementById("rating").innerHTML = "&nbsp" + rating + "&nbsp";
}
document.getElementById('Button1').addEventListener('click', submitRating);


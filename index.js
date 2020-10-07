console.log("hello");

var deleteBtn = document.getElementsByClassName("deleteBtn");
var btnminus = document.getElementsByClassName("btnminus");
var val = document.getElementsByClassName("val");
var btnplus = document.getElementsByClassName("btnplus");
var PT = document.getElementById("PT");
var like = document.querySelectorAll(".fa-heart");
Array.from(deleteBtn).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.parentElement.remove();
  });
});
Array.from(btnminus).map((el) => {
  el.addEventListener("click", () => {
    if (el.parentElement.nextElementSibling.firstElementChild.innerHTML >= 1) {
      el.parentElement.nextElementSibling.firstElementChild.innerHTML =
        parseFloat(
          el.parentElement.nextElementSibling.firstElementChild.innerHTML
        ) - 1;
      PT.innerHTML =
        parseFloat(PT.innerHTML.replace("€", "")) -
        parseFloat(
          el.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML.replace(
            "€",
            ""
          )
        ) +
        "€";
    }
  });
});

Array.from(btnplus).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.previousElementSibling.firstElementChild.innerHTML =
      parseFloat(
        el.parentElement.previousElementSibling.firstElementChild.innerHTML
      ) + 1;
    PT.innerHTML =
      parseFloat(PT.innerHTML.replace("€", "")) +
      parseFloat(
        el.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML.replace(
          "€",
          ""
        )
      ) +
      "€";

    console.log(PT);
  });
});

Array.from(like).map((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("red");
  });
});

const navbars = document.querySelectorAll(".fa fa-bars");
navbars.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("fa fa-bars");
  })
);
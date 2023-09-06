document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".periodic-table li");
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        elements.forEach((el) => el.classList.remove("enlarged"));
        element.classList.add("enlarged");
      });
    });
  });
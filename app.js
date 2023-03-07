/* Created by Tivotal */

const items = document.querySelectorAll("nav li");

//looping through items
items.forEach((item) => {
  item.addEventListener("click", toggle);
});

function toggle() {
  //looping through items
  items.forEach(() => {
    //again loop through items
    items.forEach((item) => {
      //removing class active from all items
      item.classList.remove("active");
    });

    //toggling active class to clicked item
    this.classList.toggle("active");
  });
}

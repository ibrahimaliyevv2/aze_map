let paths = [...document.getElementsByTagName("path")];
let anchors = [...document.getElementsByTagName("a")];
let tab = document.querySelector(".tab");

window.onload = function () {
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "title",
      paths[i].getAttribute("name")
    );
    anchors[i].id = paths[i].getAttribute("name");
  }

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", click);
  });
};

function click(e) {
  e.preventDefault();
  tab.style.display = "block";
  [...tab.children][0].innerHTML = e.currentTarget.id;
}

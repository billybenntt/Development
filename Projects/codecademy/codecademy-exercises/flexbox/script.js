document.body.style.backgroundImage =
  "url(https://www.transparenttextures.com/patterns/3px-tile.png)";

const replTxt = document.getElementById("replace-text");
replTxt.innerHTML = "I can do <em>whatever</em> I want with JavaScript";
replTxt.style.color = "#777";
replTxt.style.fontSize = "2rem";

const chgblue = document.getElementsByClassName("blue");
for (let i = 0; i < chgblue.length; i++) {
  chgblue[i].style.color = "blue";
}

const modal = document.getElementById("modal");
const openmodal = document.getElementById("open-modal");
const closemodal = document.getElementById("close-modal");
openmodal.addEventListener("click", () => (modal.style.display = "block"));
closemodal.addEventListener("click", () => (modal.style.display = "none"));

document
  .getElementById("texture-selector")
  .addEventListener("change", (event) => {
    //console.log(e.target.value);
    document.getElementById(
      "texture-background"
    ).style.backgroundImage = `url(${event.target.value})`;
  });

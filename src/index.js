import buildHomeContent from "./page_scripts/home"

const contentHolder = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");


function buildUI(builder) {
    contentHolder.replaceChildren();
    contentHolder.append(...builder());
}

buildUI(buildHomeContent);

homeButton.addEventListener("click", () => buildUI(buildHomeContent));

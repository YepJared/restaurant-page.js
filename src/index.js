import buildHomeContent from "./page_scripts/home"

const contentHolder = document.querySelector("#content");

function buildUI(builder) {
    contentHolder.replaceChildren();
    contentHolder.append(...builder());
}

buildUI(buildHomeContent);
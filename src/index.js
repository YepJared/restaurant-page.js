console.log("It works now!");

function buildUI() {
    const contentHolder = document.querySelector("#content");

    // Build company info
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");

    const infoHeader = document.createElement("h1");
    infoHeader.textContent = "Placeholder";
    infoHeader.classList.add("name");

    const infoDescription = document.createElement("p");
    infoDescription.textContent = "This is going to be a blurb about the restaurant.";

    infoContainer.append(
        infoHeader,
        infoDescription
    );

    // Build restaurant hours
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours");

    const hourHeader = document.createElement("h2");
    hourHeader.textContent = "Hours";

    const hourList = document.createElement("ol");
    hourList.classList.add("schedule");

    for (let i = 1; i <= 7; i++) {
        const day = document.createElement("li");
        day.classList.add("day");
        day.textContent = i;
        hourList.appendChild(day);
    }

    hoursContainer.append(
        hourHeader,
        hourList
    );

    // Build restaurant location
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location");

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Address";

    const locationText = document.createElement("p");
    locationText.textContent = "address";

    locationContainer.append(
        locationHeader,
        locationText
    );

    // Add to container
    contentHolder.append(
        infoContainer,
        hoursContainer,
        locationContainer
    );
}

buildUI();
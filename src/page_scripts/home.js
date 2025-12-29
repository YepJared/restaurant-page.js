export default function buildHomeContent() {
    return [
        buildCompanyInfo(), 
        buildRestaurantHours(), 
        buildRestaurantLocation()
    ];
}

function buildCompanyInfo() {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");

    const infoHeader = document.createElement("h1");
    infoHeader.textContent = "The Itchy Willow Tavern";
    infoHeader.classList.add("name");

    const infoDescription = document.createElement("p");
    infoDescription.textContent = "A place for any weary adventurer to rest their swords and grab a pint of ale for an evening of relaxation and merriment. Don't touch the tree.";

    infoContainer.append(
        infoHeader,
        infoDescription
    );

    return infoContainer;
}

function buildRestaurantHours() {
    const hoursArray = [
        "Monday: Sunrise to Sunset",
        "Tuesday: Sunrise to Sunset",
        "Wednesday: Closed for pruning",
        "Thursday: Closed for recovery from pruning",
        "Friday: Sunrise to Sunset",
        "Saturday: Sunrise to Sunset",
        "Sunday: Sunrise to Sunset"
    ]
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours");

    const hourHeader = document.createElement("h2");
    hourHeader.textContent = "Hours";

    const hourList = document.createElement("ol");
    hourList.classList.add("schedule");

    for (let i = 0; i < hoursArray.length; i++) {
        const day = document.createElement("li");
        day.classList.add("day");
        day.textContent = hoursArray[i];
        hourList.appendChild(day);
    }

    hoursContainer.append(
        hourHeader,
        hourList
    );

    return hoursContainer;
}

function buildRestaurantLocation() {
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location");

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Address";

    const locationText = document.createElement("p");
    locationText.textContent = "2468 Stickless Way";

    locationContainer.append(
        locationHeader,
        locationText
    );

    return locationContainer;
}
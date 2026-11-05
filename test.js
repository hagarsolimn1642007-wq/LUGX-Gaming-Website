// SEARCH FUNCTION

alert("Welcome to the Game Store! You can search for your favorite games using the search bar.");
const searchInput = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", function () {
    const searchValue = searchInput.value.trim().toLowerCase();

    const games = document.querySelectorAll(".trendingCard .card");

    if (searchValue === "") {
        alert("Please enter a game name!");
        return;
    }

    let found = false;

    games.forEach(function (game) {
        const gameName = game.querySelector("h3").textContent.toLowerCase();

        if (gameName.includes(searchValue)) {
            game.style.display = "block";
            found = true;
        } else {
            game.style.display = "none";
        }
    });

    if (!found) {
        alert("Game not found!");
    }
});


// SIGN IN FUNCTION
const signInBtn = document.querySelector(".headerLinks .btn");

signInBtn.addEventListener("click", function () {
    const username = prompt("Enter your username:");

    if (username !== null && username.trim() !== "") {
        alert("Welcome " + username + "!");
    }
});


// VIEW ALL BUTTONS
const viewAllButtons = document.querySelectorAll(
    ".trendingHeader .btn, .mostHeader .btn"
);

viewAllButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("You are viewing all available games!");
    });
});


// EXPLORE BUTTONS
const exploreButtons = document.querySelectorAll(".mostCards .btn");

exploreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        const gameName = card.querySelector("h3").textContent;

        alert("You selected: " + gameName);
    });
});


// CONTACT FORM VALIDATION
const contactForm = document.querySelector(".formContainer form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        const question = contactForm.querySelector("textarea").value.trim();

        if (name === "" || email === "" || question === "") {
            alert("Please fill in all fields!");
            return;
        }

        alert("Thank you " + name + "! Your message has been received.");

        contactForm.reset();
    });
}
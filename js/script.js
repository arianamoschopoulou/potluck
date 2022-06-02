// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const inviteText = document.querySelector(".invite-text");
const assignButton = document.querySelector(".assign");

addGuestButton.addEventListener("click", function () {
  let guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  let listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
    inviteText.classList.add("hide");
  }
};

let assignedItems = document.querySelector(".assigned-items");
let assignItems = function () {
  let potLuckFood = [
    "spring rolls",
    "hummus and carrots",
    "tabbouleh",
    "greek salad",
    "pizza",
    "burgers",
    "halloumi",
    "crisps",
    "fries",
    "samosas",
    "cake",
    "tequila"
  ];
  let allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potLuckFood.length);
    //console.log(randomPotluckIndex);
    let randomPotluckItem = potLuckFood[randomPotluckIndex];
    //  console.log(randomPotluckItem);
    //console.log(potLuckFood);
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potLuckFood.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});

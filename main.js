let inputMessage = document.querySelector(".send-message");
let sendMessage = document.querySelector(".next");
let cardScreen = document.querySelector(".main");
let alertMessage = document.querySelector(".alert");
let avatarContainer = document.querySelector(".user__avatar");
let next = document.querySelector(".arrow");
let userInedx = 0;
let avatars = [
  {
    img: "./images/av-2.webp",
  },
  {
    img: "./images/av-3.webp",
  },
  {
    img: "./images/av-4.webp",
  },
  {
    img: "./images/av-5.webp",
  },
];

sendMessage.addEventListener("click", () => {
  let message = inputMessage.value;
  if (inputMessage.value === "") {
    alertMessage.innerHTML = " message is empty ";
  } else {
    cardScreen.innerHTML += `<div class="user">
    <p class="user__description">
      ${message}
    </p>
  </div>`;
    inputMessage.value = null;
    alertMessage.innerHTML = "";
  }
});

next.addEventListener("click", () => {
  userInedx++;
  let currentAvatart = avatars[userInedx].img;
  avatarContainer.innerHTML = `<img src=".${currentAvatart}" alt="" />`;
  if (currentAvatart > avatars.length - 1) {
    userIndex = 0;
  }
});

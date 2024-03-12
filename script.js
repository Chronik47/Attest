const password = document.querySelector(".password1");
const repeatPassword = document.querySelector(".password2");
const btnEl = document.querySelector(".form-btn");

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value === repeatPassword.value) {
    password.style.borderColor = "green";
    repeatPassword.style.borderColor = "green";
  } else {
    password.style.borderColor = "red";
    repeatPassword.style.borderColor = "red";
  }
});

const mediaQuery = window.matchMedia("(max-width:768px)");
const mainMenuBtn = document.querySelector(".main-menu__btn");
const contentImg = document.querySelector(".header-content__block");

function handleTabletChange(e) {
  if (e.matches) {
    console.log("Media Query Matched!");
    mainMenuBtn.insertAdjacentHTML(
      "beforeend",
      `<svg class="mobail-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="3" width="24" height="3" fill="#8794BA" />
      <rect y="11" width="24" height="3" fill="#8794BA" />
      <rect y="19" width="24" height="3" fill="#8794BA" />
    </svg>`
    );
    contentImg.insertAdjacentHTML(
      "afterbegin",
      `<img class="delete-img" src="./img/header-content.png" alt="">`
    );
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

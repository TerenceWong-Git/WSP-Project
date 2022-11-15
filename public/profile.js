console.log("hi");
window.onload = () => {
  userName();
  logout();
  profile();
};

async function userName() {
  const userInfo = await fetch("/login");
  const userInfoObj = await userInfo.json();
  const username = userInfoObj.username;
  const usernameDiv = document.querySelector(".username");
  usernameDiv.innerText = username;
}

function logout() {
  const logoutButton = document.querySelector(".logoutbutton");
  logoutButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const resp = await fetch("/logout", { method: "GET" });
    if (resp.status === 200) {
      alert("You signed out!!");
      window.location = "/";
    }
  });
}

async function profile() {
  const resp = await fetch("/profile");
  const data = await resp.json();
  const user = data[0];
  console.log(user);
  console.log(user.username, user.email, user.mobile, user.birthday, user.subscription);
  for (const key in user) {
    const containerForAll = document.querySelector(".profile-content-container");
    const listNodeContainer = document.querySelector(".listnode-container");
    const contentContainer = document.querySelector(".content-container");
    const listNode = document.createElement("div");
    listNode.className = `${key}-listnode`;
    listNode.innerText = `${key[0].toUpperCase() + key.slice(1)}: `;
    const content = document.createElement("div");
    content.classList.add(`${key}-content`);
    if (key === "birthday") {
      const birthday = user[key].split("T");
      const newDate = birthday[0];
      const lastDigit = parseInt(newDate[newDate.length - 1]) + 1;
      content.innerText = newDate.slice(0, -1) + lastDigit;
      console.log("hihihi");
    } else {
      content.innerText = user[key];
    }
    if (key !== "email") {
      content.setAttribute("contenteditable", "true");
      content.classList.add("input-content");
    }
    if (key === "subscription") {
      user[key] ? (content.innerText = "Yes") : (content.innerText = "No");
    }
    listNodeContainer.appendChild(listNode);
    contentContainer.appendChild(content);
    const listnodeContentContainer = document.querySelector(".listnode-content-container");
    const leftContainer = document.querySelector(".left-container");
    // listnodeContentContainer.className = "listnode-content-container";
    listnodeContentContainer.appendChild(listNodeContainer);
    listnodeContentContainer.appendChild(contentContainer);
    leftContainer.appendChild(listnodeContentContainer);
    containerForAll.appendChild(leftContainer);
  }
}

function editProfile() {
  const usernameDiv = document.querySelector(".username-content");
  const mobileDiv = document.querySelector(".mobile-content");
  const birthdayDiv = document.querySelector(".birthday-content");
  const subscription = document.querySelector(".subscription-content");
}

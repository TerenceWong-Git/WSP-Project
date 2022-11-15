window.onload = () => {
  loadProducts();
  userName();
  logout();
  profile();
};

async function loadProducts() {
  const resp = await fetch("/index");
  const products = await resp.json();
  console.log(products);

  // Version 1
  let drinkStr = ``;
  let snackStr = ``;
  let noodleStr = ``;
  let drinkCount = 1;
  let snackCount = 1;
  let noodleCount = 1;

  for (const product of products) {
    console.log(product.category_id);
    if (product.category_id === 1) {
      drinkStr += `
    <div class="topSalesProducts${drinkCount}">
      <a href="/product/${product.id}"><img class="productsImage" src="${product.image}" alt="..."/></a>
      <div class="productsName">${product.name}</div>
      <div class="productsPrice">$${product.price}</div>
      </div>
      `;
      drinkCount++;
    }

    if (product.category_id === 2) {
      snackStr += `
    <div class="topSalesProducts${snackCount}">
      <a href="/product/${product.id}"><img class="productsImage" src="${product.image}" alt="..."/></a>
      <div class="productsName">${product.name}</div>
      <div class="productsPrice">$${product.price}</div>
      </div>
      `;
      snackCount++;
    }

    if (product.category_id === 3) {
      noodleStr += `
    <div class="topSalesProducts${noodleCount}">
      <a href="/product/${product.id}"><img class="productsImage" src="${product.image}" alt="..."/></a>
      <div class="productsName">${product.name}</div>
      <div class="productsPrice">$${product.price}</div>
      </div>
      `;
      noodleCount++;
    }
  }
  document.querySelector(".topSalesDrinksGroup").innerHTML = drinkStr;
  document.querySelector(".topSalesSnacksGroup").innerHTML = snackStr;
  document.querySelector(".topSalesNoodlesGroup").innerHTML = noodleStr;
}

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
function profile() {
  const profileButton = document.querySelector(".profilebutton");
  profileButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("hihi");
    const resp = await fetch("/profile", { method: "GET" });
    if (resp.status === 200) {
      alert("hi");
      window.location = "/profile.html";
    }
  });
}

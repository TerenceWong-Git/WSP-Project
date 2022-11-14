window.onload = () => {
  logout();
  loadProducts();
  userName();
};

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
    if (product.category_id ===1) {
      drinkStr += `
    <div class="topSalesProducts${drinkCount}">
      <img class="productsImage" src="${product.image}" alt="..."/>
      <div class="productsName">${product.name}</div>
      <div class="productsPrice">$${product.price}</div>
    </div>
    `;
      drinkCount++;
    }

    if (product.category_id === 2) {
      snackStr += `
    <div class="topSalesProducts${snackCount}">
      <img class="productsImage" src="${product.image}" alt="..."/>
      <div class="productsName">${product.name}</div>
      <div class="productsPrice">$${product.price}</div>
    </div>
    `;
      snackCount++;
    }

    if (product.category_id === 3) {
      noodleStr += `
    <div class="topSalesProducts${noodleCount}">
      <img class="productsImage" src="${product.image}" alt="..."/>
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

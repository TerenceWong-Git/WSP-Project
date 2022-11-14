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
    if (product.product_category === "drinks") {
      drinkStr += `
    <div class="topSalesProducts${drinkCount}">
      <img class="productsImage" src="./${product.image}" alt="..."/>
      <div class="productsName">${product.product_name}</div>
      <div class="productsPrice">$${product.product_price}</div>
    </div>
    `;
      drinkCount++;
    }

    if (product.product_category === "snacks") {
      snackStr += `
    <div class="topSalesProducts${snackCount}">
      <img class="productsImage" src="./${product.image}" alt="..."/>
      <div class="productsName">${product.product_name}</div>
      <div class="productsPrice">$${product.product_price}</div>
    </div>
    `;
      snackCount++;
    }

    if (product.product_category === "cupNoodles") {
      noodleStr += `
    <div class="topSalesProducts${noodleCount}">
      <img class="productsImage" src="./${product.image}" alt="..."/>
      <div class="productsName">${product.product_name}</div>
      <div class="productsPrice">$${product.product_price}</div>
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

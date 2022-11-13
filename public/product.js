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
  let htmlStr = ``;
  let count = 1;
  for (const product of products) {
    console.log(product);
    htmlStr += `
      <div class="topSalesDrinks${count}">
        <img class="drinksImage" src="./${product.image}" alt="..."/>
        <div class="productsName">${product.product_name}</div>
        <div class="productsPrice">${product.product_category}</div>
      </div>
      `;
    count++;
  }
  document.querySelector(".topSalesProductsGroup").innerHTML = htmlStr;
}

async function userName() {
  const userInfo = await fetch("/login");
  const userInfoObj = await userInfo.json();
  const username = userInfoObj.username;
  const usernameDiv = document.querySelector(".username");
  usernameDiv.innerText = username;
}

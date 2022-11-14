//Initially display all products
window.onload = () => {
  logout();
  loadAllCategory();
  filterProduct("all");
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

async function userName() {
  const userInfo = await fetch("/login");
  const userInfoObj = await userInfo.json();
  const username = userInfoObj.username;
  const usernameDiv = document.querySelector(".username");
  usernameDiv.innerText = username;
}

async function loadAllCategory() {
  const resp = await fetch("/allCategory");
  const products = await resp.json();
  console.log(products);

  for (const product of products) {
    // Create Product Card
    const productCard = document.createElement("div");
    productCard.classList.add("productCard", product.product_category, "hide");

    // Create Image div
    const imageArea = document.createElement("div");
    imageArea.classList.add("imageArea");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    imageArea.appendChild(productImage);
    productCard.appendChild(imageArea);

    // Create Product info. div
    let productInfoArea = document.createElement("div");
    productInfoArea.classList.add("productInfoArea");

    // Create Product name div
    let productName = document.createElement("div");
    productName.classList.add("productName");
    productName.innerText = product.product_name.toUpperCase();
    productInfoArea.appendChild(productName);

    // Create Product price div
    let productPrice = document.createElement("div");
    productPrice.innerText = "$" + product.product_price;
    productInfoArea.appendChild(productPrice);
    productCard.appendChild(productInfoArea);

    document.getElementById("products").appendChild(productCard);
  }
}

// Put category value into button
function filterProduct(category) {
  let categoryButton = document.querySelectorAll(".button-category");
  categoryButton.forEach((button) => {
    //check if value equals innerText
    if (category.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Show products by hidden control
  let showCards = document.querySelectorAll(".productCard");
  showCards.forEach((element) => {
    if (category === "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(category)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

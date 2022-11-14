//Initially display all products
window.onload = () => {
  logout();
  loadAllCategory();
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
    console.log(product.product_category);
    // Create Product Card
    const productCard = document.createElement("div");
    productCard.classList.add("productCard", product.product_category);

    // Create Image div
    const imageArea = document.createElement("div");
    imageArea.classList.add("imageArea");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    imageArea.appendChild(productImage);
    productCard.appendChild(imageArea);

    // Create Product info. div
    const productInfoArea = document.createElement("div");
    productInfoArea.classList.add("productInfoArea");

    // Create Product name div
    const productName = document.createElement("div");
    productName.classList.add("productName");
    productName.innerText = product.product_name.toUpperCase();
    productInfoArea.appendChild(productName);

    // Create Product price div
    const productPrice = document.createElement("div");
    productPrice.innerText = "$" + product.product_price;
    productInfoArea.appendChild(productPrice);
    productCard.appendChild(productInfoArea);

    document.getElementById("products").appendChild(productCard);
  }
}

// Put category value into button
async function filterProduct(e, category) {
  let categoryButton = document.querySelectorAll(".button-category");
  let showCards = document.querySelectorAll(".productCard");

  // Change color when button is hitted
  console.log(category, e.target.classList.add("active"));

  // Clear other button color
  categoryButton.forEach((element) => {
    if (element !== e.target) {
      element.classList.remove("active");
    }
  });

  // Show products by hidden control
  const resp = await fetch("/allCategory");
  const products = await resp.json();

  for (const product of products) {
    if (product.stock) {
      showCards.forEach((element) => {
        console.log(element);
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
  }
}

document.querySelector("#all").addEventListener("click", (e) => {
  filterProduct(e, "all");
});

document.querySelector("#drinks").addEventListener("click", (e) => {
  filterProduct(e, "drinks");
});

document.querySelector("#snacks").addEventListener("click", (e) => {
  filterProduct(e, "snacks");
});

document.querySelector("#noodles").addEventListener("click", (e) => {
  filterProduct(e, "noodles");
});

document.querySelector("#stock").addEventListener("click", (e) => {
  filterProduct(e, "stock");
});

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
    console.log(product.category_id);
    const productId = product.category_id;
    // Create Product Card
    const productCard = document.createElement("div");
    productCard.classList.add("productCard", `category-${productId}`);

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
    productName.innerText = product.name.toUpperCase();
    productInfoArea.appendChild(productName);

    // Create Product price div
    const productPrice = document.createElement("div");
    productPrice.innerText = "$" + product.price;
    productInfoArea.appendChild(productPrice);
    productCard.appendChild(productInfoArea);

    document.getElementById("products").appendChild(productCard);
  }
}

// Put category value into button
async function filterProduct(e, category) {
  let categoryButton = document.querySelectorAll(".button-category");
  let secondButton = document.querySelectorAll(".secondButton-category");
  let showCards = document.querySelectorAll(".productCard");

  // Change color when button is hitted
  category, e.target.classList.add("active");

  // Clear other button color
  categoryButton.forEach((element) => {
    if (element !== e.target) {
      element.classList.remove("active");
    }
  });
  secondButton.forEach((element) => {
    if (element !== e.target) {
      element.classList.remove("active");
    }
  });

  // Show product by hidden control
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

// async function checkStock (e) {
//   const resp = await fetch("/allCategory");
//   const products = await resp.json();

//   let showCards = document.querySelectorAll(".productCard");
//   for (const product of products) {
//     showCards.forEach(element) => {
//       if (product.stock) {
//         element.classList.remove("hide");
//       }
//     } else {

//     }

//   }

document.querySelector("#all").addEventListener("click", (e) => {
  filterProduct(e, "all");
});

document.querySelector("#drinks").addEventListener("click", (e) => {
  filterProduct(e, "category-1");
});

document.querySelector("#snacks").addEventListener("click", (e) => {
  filterProduct(e, "category-2");
});

document.querySelector("#noodles").addEventListener("click", (e) => {
  filterProduct(e, "category-3");
});

document.querySelector("#stock").addEventListener("click", (e) => {
  filterProduct(e, "stock");
});

window.onload = async () => {
  //   loadPayment();
  let cartItem = await loadPayment();
  //   if (cartItem) {}
};
async function loadPayment() {
  const resp = await fetch("/checkout");
  const products = await resp.json();
  //   console.log(products);
  let item = [];
  //   let cartItemObj = {productID, productName, productPrice, productQuantity }

  for (const product of products) {
    console.log("--------");
    console.log(product);
    console.log("--------");

    let productID = product.product_id;
    let productName = product.name;
    let productPrice = product.total_price_per_product / product.quantity;
    let productQuantity = product.quantity;
    item.push({ productID, productName, productPrice, productQuantity });
  }

  // if(cartItem){
  //     const button = document.querySelector(".payButton");
  //     button.addEventListener("click", () => {
  //     //   loadPayment();
  //       console.log("Hi");

  //       fetch("/create-checkout-session", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(item),
  //       })
  //         .then(async (res) => {
  //           if (res.ok) return res.json();
  //           const json = await res.json();
  //             return await Promise.reject(json);
  //         })
  //         .then(({ url }) => {
  //           window.location = url;
  //         })
  //         .catch((e) => {
  //           console.error(e.error);
  //         });
  //     }
  //     );}
  return item;
}

const button = document.querySelector("#checkout-button");
button.addEventListener("click", goStripePay());
async function goStripePay(item) {
  const resp = await fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const result = await resp.json();
  if (result.status == 200) {
    console.log(result.url);
    console.log(result.item);
  }
  console.log(result.error);
  console.log(result.item);
}

window.onload = async () => {
     loadCartItem();
  //  let cartItem = await loadPayment();
  //  if (cartItem) {}
};


async function loadCartItem() {
  const resp = await fetch("/checkout");
  const cartItemList = await resp.json();
  console.log(cartItemList)
  let itemList = cartItemList;
  if(cartItemList){
    document.querySelector("#checkout-button").addEventListener("click", async() => {
      await fetch("/post-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemList),
      });    }
    
    )
    // const result = await postCheckOut.json()
    // console.log(postCheckOut)

  }
  // array
  // return cartItem;
}

// async function loadPayment() {
//   const resp = await fetch("/checkout");
//   const products = await resp.json();
//   let item = [];

//   for (const product of products) {
//     console.log("--------");
//     console.log(product);
//     console.log("--------");

//     let productID = product.product_id;
//     let productName = product.name;
//     let productPrice = product.total_price_per_product / product.quantity;
//     let productQuantity = product.quantity;
//     item.push({ productID, productName, productPrice, productQuantity });
//   }
  
//   let cartItem = item;
//   console.log("/////////////");
//   console.log(cartItem);
//   console.log("/////////////");
//   return cartItem;
// }

// document.querySelector("#checkout-button").addEventListener("click", (e) => {
//   goStripePay(cartItem);
// });

// async function goStripePay(cartItem) {
//   const resp = await fetch("/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(cartItem),
//   });

//   const result = await resp.json();
//   if (result.status == 200) {
//     console.log(result.url);
//     console.log(result.cartItem);
//   }
//   console.log(result.error);
//   console.log(result.cartItem);
// }

window.onload = async () => {
  loadCartItem();
};

async function loadCartItem() {
  // const result = await fetch("/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({test:1})})
  // const url = await result.json()
  // console.log("check url", url)
  // window.location = url
  const resp = await fetch("/checkout");
  const cartItemList = await resp.json();
  // let itemList = cartItemList;
  if (cartItemList) {
    document
      .querySelector("#checkout-button")
      .addEventListener("click", async (e) => {
        e.preventDefault()
        const result = await fetch("/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });

        const url = await result.json();
        console.log("check url", url);
        window.location = url;
      });
  }
}

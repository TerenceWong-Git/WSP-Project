window.onload = async () => {
  loadCartItem();
};

async function loadCartItem() {
  // const result = await fetch("/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({test:1})})
  // const url = await result.json()
  // console.log("check url", url)
  // window.location = url
    document
      .querySelector(".checkout-button")
      .addEventListener("click", async (e) => {
        e.preventDefault()
        console.log("Hi")
        const result = await fetch("/create-checkout-session", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({test:1})});

        const url = await result.json();
        console.log("check url", url);
        window.location = url;
      });
  // }
}

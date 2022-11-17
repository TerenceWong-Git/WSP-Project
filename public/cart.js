window.onload = async () => {
  displayShoppingCart();
  getID();
}





///////////////////  to load the data of product to render the shopping cart page first //////////////////

async function displayShoppingCart() {

  const resp = await fetch("/getDataToShoppingCart", {
    method: "GET",
  });

  const data = await resp.json();

  if (resp.status !== 201) {
    alert("something goes wrong on retrieving the product data!")
  }
  else {
    console.log(data)

    let containerTemplate = " ";

    for (let datum of data) {


      containerTemplate +=

        `
 <div class="container2_1" id="a${datum.product_id}" >
       <div class="leftBox">
         <div class="checkBox"><input type="checkbox" class="smallcheckbox" name="checkbox" value="checkbox"></div>
         <div class="productImage"><img class="image1" src=".${datum.image}"></div>
       </div>
 
       <div class="rightBox">
         <div class="upper">${datum.description}</div>
         <div class="lower">
           <div class="left">
             <div class="currencySign">HKD</div>
             <div class="unitPrice">${(datum.price) * (datum.quantity)}</div>
           </div>
           <div class="right">
             <div class="minus"><button class="minusButton" " min="1" id="e${datum.product_id}">-</button></div>
             <div class ="unit" id="c${datum.product_id}">${datum.quantity}</div>
             <div class="plus"><button class="plusButton" id="f${datum.product_id}" " max="10">+</i></button></div>
           </div>
         </div>
       </div>  
     </div>
 
 `
      document.querySelector(".container2").innerHTML = containerTemplate
    }
  }
}

///////////////////////  quantity control  /////////////////////////////////////////////////

// let idValue=document.querySelector(".container2").addEventListener("click",(e)=>{
//   console.log(e.target)
// console.log(e.target.id)
// let idValue= e.target.id;
// let idValueNumber=idValue[1];
// console.log(idValueNumber);


// if (idValue[0]=="e"){
// let number= document.querySelector(`#c${idValueNumber}`).innerHTML;
// console.log(number);    
// if (number > 1) {
//       number = number - 1;
//       console.log(number, "from cart.js");

//       return (document.querySelector(`#c${idValueNumber}`).innerHTML = number.toString());
// }}


// if(idValue[0]=="f"){
//   let number= parseInt(document.querySelector(`#c${idValueNumber}`).innerHTML);

//       number = number + 1;
//       console.log(number, "from cart.js");

//       return (document.querySelector(`#c${idValueNumber}`).innerHTML = number.toString());
// }





// })







//////////////// testing area ///////////////////////////////

let idValue = document.querySelector(".container2").addEventListener("click", async (e) => {
  console.log(e.target)
  console.log(e.target.id)
  let idValue = e.target.id;
  let idValueNumber = idValue[1];
  console.log(idValueNumber);


  if (idValue[0] == "e") {
    let number = document.querySelector(`#c${idValueNumber}`).innerHTML;
    // console.log(number);
    if (number > 1) {
      number = number - 1;
      // console.log(number, "from cart.js");

      formBody = {
        quantity1: number,
        productId: idValueNumber
      };

      // console.log(formBody)
      const resp = await fetch("/minusQuantity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formBody),
      });

      const data = await resp.json();
      console.log(data.message)


      return (document.querySelector(`#c${idValueNumber}`).innerHTML = number.toString());
    }
  }







  if (idValue[0] == "f") {
    let number = parseInt(document.querySelector(`#c${idValueNumber}`).innerHTML);

    number = number + 1;
    // console.log(number, "from cart.js");
    formBody = {
      quantity1: number,
      productId: idValueNumber
    };

    // console.log(formBody)
    const resp = await fetch("/addQuantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBody),
    });

    const data = await resp.json();
    console.log(data.message)

    return (document.querySelector(`#c${idValueNumber}`).innerHTML = number.toString());
  }





})

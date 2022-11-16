window.onload= ()=>{
  displayShoppingCart()
}


///////////////////////  quantity control  /////////////////////////////////////////////////

let number = parseInt(document.querySelector(".unit").innerHTML);
document.querySelector(".minusButton").addEventListener("click", (e) => {
  console.log(e.currentTarget);
  if (number > 1) {
    number = number - 1;
    console.log(number, "from cart.js");
    return (document.querySelector(".unit").innerHTML = number.toString());
  }
});

document.querySelector(".plusButton").addEventListener("click", (e) => {
  console.log(e.currentTarget);
  number = number + 1;
  console.log(number, "from cart.js");
  return (document.querySelector(".unit").innerHTML = number.toString());
});


///////////////////  to load the data of product to render the shopping cart page first //////////////////

async function displayShoppingCart(){

 const resp = await fetch("/getDataToShoppingCart", {
    method: "GET",
  });

  const data = await resp.json();

  if (resp.status!==201){
    alert("something goes wrong on retrieving the product data!")
  }
else{
  console.log(data)
  for (let datum of data){

let containerTemplate="";
containerTemplate+=

`
<div class="container2_1" id="${datum.id}" >
      <div class="leftBox">
        <div class="checkBox"><input type="checkbox" class="smallcheckbox" name="checkbox" value="checkbox"></div>
        <div class="productImage"><img class="image1" src=".${datum.image}"></div>
      </div>

      <div class="rightBox">
        <div class="upper">${datum.description}</div>
        <div class="lower">
          <div class="left">
            <div class="currencySign">HKD</div>
            <div class="unitPrice">${price}</div>
          </div>
          <div class="right">
            <div class="minus"><button class="minusButton" min="1"><i class="bi bi-dash-lg bye"></i></button></div>
            <div class ="unit">1</div>
            <div class="plus"><button class="plusButton" max="10"><i class="bi bi-plus-lg bye"></i></button></div>
          </div>
        </div>
      </div>  
    </div>

`
document.querySelector(".conatiner2").innerHTML=containerTemplate











  }
}




}
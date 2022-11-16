// window.onload= ()=>{

// }


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
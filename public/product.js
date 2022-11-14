// import { json } from "stream/consumers";

// import { URLSearchParams } from "url";

window.onload = () => {
  logout();
  userName();
  submitComment();
  getImage();
  productSession();
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

///////////////////////  show certain product on the display box  /////////////////////////


async function getImage() {

  let url=window.location.search;
  console.log(url);
  let queries= new URLSearchParams(url);
  
  let idOfProduct=queries.get("id");
  let categoryOfProduct=queries.get("category");
  
  console.log(idOfProduct,"is product id");
  console.log(categoryOfProduct, "is product category");
  
  // const formBody={};
  let formBody={id:idOfProduct,
                category:categoryOfProduct}
  // formBody["category"]=categoryOfProduct;
  console.log(formBody)

  const resp = await fetch("/id1", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formBody)
  });

  const data = await resp.json();
  console.log(data);

  let productName = data[0].name;
  let imageLocation = data[0].image;
  let imageName = data[0].name;
  let pricePerUnit = data[0].price;
  let stockNumber = data[0].stock;
  let salesQuantity = data[0].sales_quantity;
  let d = data[0].description;

  console.log(imageLocation);
  let img1 = `<img src="${imageLocation}" alt="${imageName}" id="displayImage">`;
  // console.log(img1);
  let price1 = `${pricePerUnit}`;
  let pname = `${productName}`;
  let stNumber = `${stockNumber}`;
  let salesQ = `${salesQuantity}`;
  let descrip = `${d}`;

  document.querySelector("#productName").innerHTML = pname;
  document.querySelector("#productImage").innerHTML = img1;
  document.querySelector("#pricePerGoods").innerHTML = price1;
  document.querySelector("#stockNumber").innerHTML = stNumber;
  document.querySelector("#salesNumber").innerHTML = salesQ;
  document.querySelector("#details").innerHTML = descrip;
}
///////////////////// help save the req.session of the single product on the product page  ////////////////////////////////////////////////////

async function productSession() {

  let url=window.location.search;
  console.log(url);
  let queries= new URLSearchParams(url);}
  let idOfProduct=queries.get("id");
  console.log(idOfProduct);

  // const formBody={};
  let formBody={id:idOfProduct,
    category:categoryOfProduct}
// formBody["category"]=categoryOfProduct;
console.log(formBody)

const resp = await fetch("/productsesseion", {
method: "POST",
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formBody)
});

















///////////////////////  quantity control  /////////////////////////////////////////////////

let number = parseInt(document.querySelector("#number").innerHTML);
document.querySelector("#minusButton").addEventListener("click", (e) => {
  console.log(e.currentTarget);
  if (number > 1) {
    number = number - 1;
    console.log(number);
    return (document.querySelector("#number").innerHTML = number.toString());
  }
});

document.querySelector("#plusButton").addEventListener("click", (e) => {
  console.log(e.currentTarget);
  number = number + 1;
  console.log(number);
  return (document.querySelector("#number").innerHTML = number.toString());
});

//////////////////////// Buy now  ///////////////////////////////////////////////////////
document.querySelector(".buyNow").addEventListener("click", async()=>{
{console.log("buy")}
const resp= await fetch ("/buyNow", {
  method: "GET"
})

const data=await resp.json();

if (resp.status!==201){alert(data.message);
window.location="/login.html"};
if (resp.status===201){
  alert(data.message);
  window.location="/payment.html"
}

})


//////////////////////  Add to car  ////////////////////////////////////
document.querySelector(".addToCar").addEventListener("click", async()=>
// {console.log("add to car")
{
const resp= await fetch ("/addToCar", {
  method: "GET"
})

const data=await resp.json();

if (resp.status!==201){alert(data.message);
window.location="/login.html"};
if (resp.status===201){
  alert(data.message);
}
})






///////////////////// subtmit comment  ////////////////////
function submitComment() {
  document.querySelector("#contact-form3").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(e.target);
    const formBody = {};
    const customerComment = form.comment.value;
    // console.log(customerComment);
    formBody["comment"] = customerComment;
    // console.log(formBody)

    const reps = await fetch("/submitComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBody),
    });
  });
}

/////////////////////////  show user name  //////////////////////
async function userName() {
  const userInfo = await fetch("/login");
  const userInfoObj = await userInfo.json();
  const username = userInfoObj.username;
  const usernameDiv = document.querySelector(".username");
  usernameDiv.innerText = username;
}

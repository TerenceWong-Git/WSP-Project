window.onload = () => {
  logout();
  loadProducts();
  userName();
  submitComment();
 
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


///////////////////////  quantity control  /////////////////////////////////////////////////

let number=parseInt(document.querySelector("#number").innerHTML);
document.querySelector("#minusButton").addEventListener("click", (e)=>{
  console.log(e.currentTarget);
if (number>0){
  number=number-1;
  console.log(number);
return document.querySelector("#number").innerHTML=number.toString();
}
})



document.querySelector("#plusButton").addEventListener("click", (e)=>{
  console.log(e.currentTarget);
  number=number+1;
  console.log(number);
return document.querySelector("#number").innerHTML=number.toString();
}
)


//////////////////////// Buy now  ///////////////////////////////////////////////////////
document.querySelector(".buyNow").addEventListener("click", ()=>
{console.log("buy")})


//////////////////////  Add to car  ////////////////////////////////////
document.querySelector(".addToCar").addEventListener("click", ()=>
{console.log("add to car")})





///////////////////// subtmit comment  ////////////////////
function submitComment(){
document.querySelector("#contact-form3").addEventListener("submit", async(e)=>{
e.preventDefault();
const form=e.target;
// console.log(e.target);
const formBody={};
const customerComment=form.comment.value;
// console.log(customerComment);
formBody["comment"]=customerComment;
// console.log(formBody)

const reps= await fetch ("/submitComment", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formBody),

})

})
}







/////////////////////////  show user name  //////////////////////
async function userName() {
  const userInfo = await fetch("/login");
  const userInfoObj = await userInfo.json();
  const username = userInfoObj.username;
  const usernameDiv = document.querySelector(".username");
  usernameDiv.innerText = username;
}

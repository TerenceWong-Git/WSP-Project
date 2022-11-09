document.querySelector("#registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formBody = {};
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const date = form.date.value;
    formBody["username"] = username;
    formBody["email"] = email;
    formBody["password"] = password;
    formBody["phone"] = phone;
    formBody["date"] = date;
    const resp = await fetch("/userData", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formBody)  })
const data=await resp.json()
if (resp.status!==201){alert(data.message)
}else {
    alert("successful submission")
                console.log("finished uploading post")}

})



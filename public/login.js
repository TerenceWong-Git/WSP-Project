console.log("hi");
window.onload = () => {
  login();
};

function login() {
  const signInForm = document.querySelector("#signinform");
  console.log(signInForm);
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formBody = {
      email: form.email.value,
      password: form.password.value,
    };
    console.log(formBody);
    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formBody),
    });
    if (resp.status === 200) {
      const newNavBar = document.querySelector(".dropdown-container");
      newNavBar.removeAttribute("hidden");
      window.location = "/";
    } else {
      const data = await resp.json();
      alert(data.message);
    }
  });
}

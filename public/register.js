for (let i=1890; i<=2022; i++){    //choice of birth year
document.querySelector("#year").innerHTML+=`
<option value="" class="yearValue">${i}</option>
`}

for (let i=1; i<=12; i++){     //choice of birth month
    document.querySelector("#month").innerHTML+=`
    <option value="" class="monthValue">${i}</option>
`}

for (let i=1; i<=31; i++){     //choice of birth month
    document.querySelector("#date").innerHTML+=`
    <option value="" class="dateValue">${i}</option>
`}
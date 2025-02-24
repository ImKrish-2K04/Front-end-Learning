let baseUrl =
  "https://v6.exchangerate-api.com/v6/d661537287857f4df4a3bf49/latest/";
let countrySelect = document.querySelectorAll("select");
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn");

countrySelect.forEach((select) => {
  for (let currCode in countryList) {
    let opt = document.createElement("option");
    opt.textContent = currCode;
    opt.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      opt.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      opt.selected = "selected";
    }
    select.appendChild(opt);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
    // console.log(e.target.value);
  });
});

const updateFlag = (elem) => {
  let currCode = countryList[elem.value];
  let flag = elem.parentElement.querySelector("img");
  flag.src = `https://flagsapi.com/${currCode}/flat/64.png`;
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let cntry1 = countrySelect[0].value;
  let cntry2 = countrySelect[1].value;
  let inputAmt = document.querySelector("#in_amt");
  let amtVal = Number.parseInt(inputAmt.value);
  if (inputAmt.value === "" || amtVal < 1) {
    amtVal = 1;
    inputAmt.value = "1";
  }
  let cExchngUrl = `${baseUrl}${cntry1}`;

  let response = await fetch(cExchngUrl);
  let data = await response.json();
  let cntry2CurrencyAmt = data["conversion_rates"][cntry2];
  console.log(cntry2CurrencyAmt);

  let totalAmt = Number.parseInt(amtVal * cntry2CurrencyAmt);

  msg.textContent = `${amtVal} ${cntry1} = ${totalAmt} ${cntry2}`;
});

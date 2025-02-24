const container = document.querySelector(".box");
const btn = document.querySelector(".loadData");

btn.addEventListener("click", (e) => {
  async function getData() {
    let data;
    try {
      const userData = await fetch("./user.json");
      data = await userData.json();
    } catch (err) {
      console.log(`Error: something went wrong`, err);
    }

    let output = "";
    data.users.forEach((val) => {
      output += `<p>${val.userName} - ${val.age} years old and is ${val.gender}</p>`;
    });
    return output;
  }

  getData()
    .then((content) => {
      container.innerHTML = content;
    })
    .catch((err) => {
      {
        console.log("Error: something went wrong", err);
      }
    });
});

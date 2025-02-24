async function getData() {
  try {
    const data = await fetch("./student.json");
    let obj = await data.json();

    obj["subjects"].push("computer science");
    obj["marks"].physics = 95;

    return obj;
  } catch (e) {
    console.log("ERROR: something went wrong!");
  }
}

getData().then((updatedData) => console.log("updated data: ", updatedData));

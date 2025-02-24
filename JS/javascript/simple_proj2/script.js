let submitBtn = document.querySelector("#calculateBMI");
// console.log(submitBtn);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let uName = document.querySelector("#user_name").value;
  let uHeight = parseFloat(document.querySelector("#user_height").value);
  let uWeight = document.querySelector("#user_weight").value;
  let BMI = uWeight / uHeight ** 2;

  window.alert(
    `Hey ${uName}, nice to meet you! 👋
  
  📏 Your Height: ${uHeight.toFixed(2)} m
  ⚖️ Your Weight: ${uWeight} kg
  📊 Your BMI: ${BMI.toFixed(2)}
  
  🔎 BMI Categories:
  - Underweight: < 18.5
  - Normal weight: 18.5 - 24.9
  - Overweight: 25 - 29.9
  - Obese: 30+
  
  🩺 Stay fit, stay healthy! 💪`
  );
});

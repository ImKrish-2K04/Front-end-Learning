let container = document.querySelector(".container");
let list = document.querySelector("ul");

const addLanguage = (lang, choice) => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(lang));

  if (choice === 1) {
    // Normal Append
    list.appendChild(li);
  } else if (choice === 2) {
    // Insert at Specific Position
    let len = list.children.length;
    let pos = Number(window.prompt("Enter position"));

    if (pos < 1 || pos > len) {
      alert("Invalid position entered!");
    } else {
      let referenceNode = list.children[pos - 1];
      list.insertBefore(li, referenceNode);
    }
  } else if (choice === 3) {
    // Replace at Specific Position
    let len = list.children.length;
    let pos = Number(window.prompt("Enter position"));

    if (pos < 1 || pos > len) {
      alert("Invalid position entered!");
    } else {
      let targetNode = list.children[pos - 1];
      if (targetNode) {
        targetNode.replaceWith(li);
      } else {
        alert("Position does not exist!"); // Edge case fix
      }
    }
  }
};

let choice = "y";

while (choice === "y") {
  let lang = window.prompt("Enter language name:");
  let ch = Number(
    window.prompt(
      "Enter choice:\n1. Normal appending\n2. Position specific appending\n3. Replace node at specific position"
    )
  );

  // Better input validation
  if (!lang.trim() || isNaN(ch)) {
    window.alert("Unexpected phenomena happened!");
  } else {
    addLanguage(lang, ch);
  }

  if (!window.confirm("Want to enter more languages?")) {
    break;
  }
}

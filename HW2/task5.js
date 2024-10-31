function checkID() {
  try {
    const id = prompt("Please enter your ID:");

    if (id === "") {
      throw new Error("The field is empty! Please enter your ID.");
    }

    if (isNaN(id)) {
      throw new Error("Invalid input! Please enter a numeric ID.");
    }

    const numericID = Number(id);

    if (numericID < 1 || numericID > 1000) {
      throw new Error("ID out of range! Please enter an ID between 1 and 1000.");
    }
    alert("ID is valid! Thank you.");

  } catch (error) {
    alert(`Error: ${error.name}\nDescription: ${error.message}`);
  }
}

checkID();

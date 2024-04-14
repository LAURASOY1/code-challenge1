// Function to determine grade based on marks of a student
function determineGrade(marks) {
  if (marks > 79 && marks <= 100) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else if (marks >= 0 && marks < 40) {
    return "E";
  } else {
    return "Invalid input. Marks should be between 0 and 100.";
  }
}

// Function to prompt for input and display grade
function promptForGrade() {
  rl.question("Enter student marks (between 0 and 100): ", (input) => {
    let marks = parseFloat(input);
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      let grade = determineGrade(marks);
      console.log(`The grade for ${marks} marks is ${grade}.`);
    } else {
      console.log(
        "Invalid input. Please enter a valid number between 0 and 100."
      );
    }
    rl.close();
  });
}

// Call function to prompt for grade
promptForGrade();

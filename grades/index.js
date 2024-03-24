// Function to determine grade based on marks of a student
function determineGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks < 40 && marks >= 0) {
        return 'E';
    } else {
        return 'Invalid input. Marks should be between 0 and 100.';
    }
}

// Function to require for input and display grade
function promptForGrade() {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    if (!isNaN(marks)) {
        let grade = determineGrade(marks);
        alert(`The grade for ${marks} marks is ${grade}.`);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

//call function to display grade
promptForGrade();



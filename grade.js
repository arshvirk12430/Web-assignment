// Function to convert marks into grades
function MarkToGrade() {

    let markInput =
        document.getElementById("mark-input-box").value;

    let validation =
        document.getElementById("validation-message");

    let result =
        document.getElementById("result");

    validation.innerHTML = "";
    result.innerHTML = "";

    let mark = parseInt(markInput);

    // Validation
    if (markInput === "") {
        validation.innerHTML =
            "Please enter a mark.";
        return;
    }
    if (isNaN(mark)) {
        validation.innerHTML =
            "Marks must be numerical.";
        return;
    }
    if (mark < 0) {
        validation.innerHTML =
            "Marks cannot be negative.";
        return;
    }
    if (mark > 100) {
        validation.innerHTML =
            "Marks cannot be greater than 100.";
        return;
    }
    // Grade conversion

    let grade = "";
    if (mark >= 90) {
        grade = "Excellant! Your Grade is : A";
    }
    else if (mark >= 80) {
        grade = "Superab! Your Grade is : B";
    }
    else if (mark >= 70) {
        grade = " Great! Your Grade is : C";
    }
    else if (mark >= 60) {
        grade = "Good! Your Grade is :D";
    }
    else if (mark >= 50) {
        grade = "Satisfied! Your Grade is :E";
    }
    else {
        grade = " Soory, You are failed .You need Improvement. Your Grade is : F";
    }
    result.innerHTML =
        "Grade: " + grade;
}


// Footer

let footer = document.getElementById("footer");
footer.innerHTML =
    "© 2026 Arshvir Kaur | " + new Date().toDateString();
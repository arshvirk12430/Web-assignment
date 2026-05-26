// Function to display image after 10 seconds
setTimeout(function () {

    let image = document.createElement("img");
    image.src = "myphoto.png";
    image.style.width = "100%";
    image.style.height = "auto";
    document.getElementById("imageContainer").appendChild(image);

}, 1000);

// Footer current date and copyright

let footer = document.getElementById("footer");

let currentDate = new Date();

footer.innerHTML =
    "© 2026 Arshvir Kaur | " + new Date().toDateString();

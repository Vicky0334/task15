
document.getElementById("greetButton").addEventListener("click", function () {
    const userName = document.getElementById("userName").value;
    const greetingText = document.getElementById("greeting");

    if (userName.trim() !== "") {
        greetingText.innerHTML = `Hello, ${userName}`;
    } else {
        greetingText.innerHTML = "Hello";
    }
});

// Change the color of the box when clicked
document.getElementById("red-box").addEventListener("click", function () {
    document.getElementById("red-box").style.backgroundColor ="red"
 
});

document.getElementById("blue-box").addEventListener("click", function () {
    document.getElementById("blue-box").style.backgroundColor ="blue"
});

document.getElementById("green-box").addEventListener("click", function () {
  document.getElementById("green-box").style.backgroundColor ="green"
});

document.getElementById("yellow-box").addEventListener("click", function () {
   document.getElementById("yellow-box").style.backgroundColor ="yellow"
});

// document.getElementById("box1").style.backgroundColor = "Green";
// document.getElementById("box1").style.color="Yellow";
// document.getElementById("box1").style.width = "300px";

// document.getElementsByName("radio-1").style

// let elements = document.getElementsByClassName("box");


// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = "This is my new text";
// }



// let elements = document.getElementsByTagName("p");
// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = "This is my new text";
// }

// let newDiv = document.createElement("div");
// document.body.appendChild(newDiv);

// newDiv.innerHTML= "Hello I am appended to the body"


let myDiv = document.getElementById("myDiv");
myDiv.outerHTML = "<div><div><p>This is my new text</p></div></div>";


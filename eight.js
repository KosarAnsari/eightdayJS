//DOM Part -2
// Attributes
//1.) getAttribute(attribute_name); | it is used to get the value for attributes given in html file.
let div = document.getElementById("box");
console.dir(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.dir(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//2.)setAttribute(attribute_name , value_of_attribute); | it is used to set the attribute and its value or set the new value for an existing attribute.
/*console.log(div.setAttribute("id","box_one")); // it will not be printed over console screen but rather it will be changed into elements screen.

console.log(para.setAttribute("name","parah1"));*/ //it will not be printed over console screen but rather it will be visible onto elements screen.


//3.) node.style:- it is used to access the style of an html element in JS , also we can change the existing style of an existing html element.//
div.style.backgroundColor = "green";
div.style.fontWeight="bold";
div.style.color="white";
div.style.borderColor = "red";
div.style.height = "250px";

//Inserting/Deleting the elements:- first we have to create the element then we  can  insert it using methods.
//1.)node.append(el_name):- it will insert the element at the end of node.(inside)
let new_btn = document.createElement("button");
console.dir(new_btn); // button is created but not visible over html screen.

//div.append(new_btn);
new_btn.innerText = "Click here!";

//2.)node.prepend(el_name):- it will insert the element in the beginning of node.(inside)
div.prepend(new_btn);

//3.)node.before(el_name):-it will create the element before the node.(outside)
div.before(new_btn);

//4.)node.after(el_name):- it will create the element after ending of node(outside).
div.after(new_btn);

let new_heading = document.createElement("h1");
new_heading.innerHTML="<i>Hi! I am new</i>"

document.querySelector("body").prepend(new_heading);

//5.)node.remove():- it removes the node.
para.remove();
new_heading.remove();

//practice
let new_button = document.createElement("button");
new_button.innerText = "click me";
new_button.style.backgroundColor ="red";
new_button.style.color = "white";
document.querySelector("body").prepend(new_button);

let parah2=document.querySelector(".content");
parah2.classList.add("newclass");//classList lets you add multiple classes to one element.

console.log(document);
console.log(document.getElementsByTagName('h1')[0]);
// const heading = document.getElementsByTagName('h1')[0];
// console.log(heading.innerText);
// const para = document.getElementsByTagName('p')[0];
// console.log(para.innerText);
// const para = document.getElementsByClassName('para')[0].innerText;
// console.log(para);
const heading = document.querySelectorAll("h1")[0];
heading.setAttribute("class","red");
const input = document.querySelectorAll("input")[0];
input.setAttribute("placeholder","enter your name");
const subheading = document.createElement("h2");
console.log(subheading);
subheading.innerText = "Ruchika";
console.log(subheading);
document.body.append(subheading);
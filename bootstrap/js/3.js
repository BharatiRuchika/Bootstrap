const contain = document.createElement("div");
contain.setAttribute("class","container");
// contain.innerText="qwy";
const info = document.createElement("div");
info.setAttribute("class","info");
info.innerHTML = ` <img class="flag" height="100px" width="200px" src="img/flag.png"><h3>Germany</h3>
<p><span class="side-heading">Population:</span>14526355</p>
<p><span class="side-heading">Region:</span>Europe</p>
<p><span class="side-heading">Capital:</span>Berlin</p>`;
// const image = document.createElement('img');
// image.setAttribute("class","flag");
// image.setAttribute("src","img/flag.png");
// image.setAttribute("height","100px");
// image.setAttribute("width","100px");

// const heading = document.createElement("h3");
// heading.innerText = "Germany";

// const p1 = document.createElement('p1');
// p1.innerText = "Population:88,9000";

// const p2 = document.createElement('p1');
// p2.innerText = "Region:Europe";

// const p3 = document.createElement('p1');
// p3.innerText = "Capital:Berlin";
// info.append(image,heading,p1,p2,p3);
contain.append(info);
document.body.append(contain);

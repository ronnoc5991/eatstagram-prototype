!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=e=>{const t=document.createElement("div");t.className="display-card";const n=document.createElement("div");n.className="display-card-inner",t.appendChild(n);const a=document.createElement("div");a.className="display-card-front",n.appendChild(a);const o=document.createElement("IMG");o.src=""+e.imageLink,1==e.rotate&&(o.className+="rotateNinety"),a.appendChild(o);const r=document.createElement("div");r.className="front-text",r.innerHTML=`<h1>${e.name}</h1>`,a.appendChild(r);const i=document.createElement("div");return i.className="display-card-back",i.innerHTML=`<h1>${e.name}</h1> <p>Ingredients</p> <p>${e.ingredients}</p>`,n.appendChild(i),t};var o=(e,t,n,a=0)=>({name:e,ingredients:t,imageLink:n,rotate:a});const r=document.getElementById("cardDisplayContainer"),i=document.getElementById("formContainer");document.getElementById("newCard").addEventListener("click",(function(){"hidden"==i.className?(r.style.opacity="0.5",i.className="active"):"active"==i.className&&(r.style.opacity="1",i.className="hidden")}));var d=o("Pizza","Pizza ingredients dude","../photos/pizza.JPG",1);r.appendChild(a(d));d=o("Falafel Wraps","Falafel, Tzatziki, Tomaten, Cous-Cous, Wraps","../photos/falafel.JPG",1);r.appendChild(a(d));d=o("Rijst Papiers","Rijst papier, komkommer, wortel, rijst noodles, mango, munt, avocado","../photos/rijstpapier3.JPG",1);r.appendChild(a(d));d=o("Spaghetti","Spaghetti, sauce, meatballs, Homemade Garlic Bread","../photos/spaghetti.JPG",1);r.appendChild(a(d));d=o("Quiche","Lots of Groente, Liefde","../photos/quiche.JPG",1);r.appendChild(a(d));d=o("Cookout","Meat, Turksbrood, salade","../photos/cookout.JPG",1);r.appendChild(a(d));d=o("Lemon Pasta","Pasta, Lemon, Butter, Pepper, Oil","../photos/lemon-pasta.JPG",1);r.appendChild(a(d))}]);
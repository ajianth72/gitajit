
//var secondItem = document.querySelector("#items li:nth-child(2)");
//secondItem.style.backgroundColor = "green";


//var thirdItem = document.querySelector("#items li:nth-child(3)");
//thirdItem.style.visibility = "hidden";


document.querySelector("#items li:nth-child(2)").style.color = "green";


const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
for (let i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = "green";
}

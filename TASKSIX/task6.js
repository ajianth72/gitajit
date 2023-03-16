// Select the 2nd list item and change its background color
//var secondItem = document.querySelector("#items li:nth-child(2)");
//secondItem.style.backgroundColor = "green";

// Select the 3rd list item and make it invisible
//var thirdItem = document.querySelector("#items li:nth-child(3)");
//thirdItem.style.visibility = "hidden";

// Change font color to green for the 2nd item
document.querySelector("#items li:nth-child(2)").style.color = "green";

// Change background color to green for all odd items
const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
for (let i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = "green";
}

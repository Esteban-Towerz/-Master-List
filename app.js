let myHeading = document.querySelector('h1');

myHeading.textContent = "Master List!"

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const listUl = listDiv.querySelector('ul');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');

const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');

const removeItemButton = document.querySelector('button.removeItemButton');
const lis = listUl.children;

const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'mintcream';
lastListItem.style.backgroundColor = 'seashell';

// ///////////////////// LAST FUNCTION CHALLANGE /////////////////////

// function checkForChange(){
//   let firstListItem = listUl.firstElementChild;
//   let lastListItem = listUl.lastElementChild;
//   for (let i = 0; i < lis.length; i++) {
//     if (firstListItem == lis[i]) {
//       let upButton = firstListItem.querySelector("button.up");
//       if (upButton !== null) {
//         firstListItem.removeChild(upButton);
//       } if (lis[i].querySelector("button.down") === null) {
//         let down = document.createElement("button");
//         down.className = "down";
//         down.textContent = "Down";
//         let removeButton = lis[i].querySelector("button.remove");
//         lis[i].insertBefore(down, removeButton);
//       }
//     } else if (lastListItem == lis[i] ) {
//       let downButton = lastListItem.querySelector("button.down");
//       if (downButton !== null) {
//         lastListItem.removeChild(downButton);
//       }if (lis[i].querySelector("button.up") === null) {
//         let up = document.createElement("button");
//         up.className = "up";
//         up.textContent = "Up";
//       let removeButton = lis[i].querySelector("button.remove");
//         lis[i].insertBefore(up, removeButton);
//       }
//     } else {
//       if (lis[i].querySelector("button.up") === null) {
//         let up = document.createElement("button");
//         up.className = "up";
//         up.textContent = "Up";
//         let downButton = lis[i].querySelector("button.down");
//         lis[i].insertBefore(up, downButton);
//       }

//       if (lis[i].querySelector("button.down") === null) {
//         let down = document.createElement("button");
//         down.className = "down";
//         down.textContent = "Down";
//         let removeButton = lis[i].querySelector("button.remove");
//         lis[i].insertBefore(down, removeButton);
//       }
//     }
//   }
// }


// - const listItems = document.getElementsByTagName('li'); // [0] to selecitng only the first one
// Now we don't use the 'listItems' const instead we using the 'event.target'
// for (let i = 0; i < listItems.length; i += 1 ) {

///////////////////// Capitalizing a list item on mouse over /////////////////////

// listDiv.addEventListener('mouseover', (event) => {
// 	if (event.target.tagName == 'LI') {
// 		event.target.textContent = event.target.textContent.toUpperCase();
// 	}
// });

// listDiv.addEventListener('mouseout', (event) => {
// 	if (event.target.tagName == 'LI') {
// 		event.target.textContent = event.target.textContent.toLowerCase();
// 	}
// });
/////////////////////////////////////////////////////////////////////////////////

//////////////// Delete a list item on mouse over ////////////////

function attachListItemButtons(li) {
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Up';
	li.appendChild(up);

	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Down';
	li.appendChild(down);

	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';
	li.appendChild(remove);
};

for (let i = 0; i < lis.length; i += 1) {
	attachListItemButtons(lis[i]);
};


listUl.addEventListener('click', (event) => { //'event' is for get a reference to the target element in the event
	if (event.target.tagName == 'BUTTON') {
		if (event.target.className == 'remove') {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		if (event.target.className == 'up') {
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;
			if (prevLi) {
				ul.insertBefore(li, prevLi);
			}
		}
		if (event.target.className == 'down') {
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			if (nextLi) {
				ul.insertBefore(nextLi, li); // Another solution: ul.insertBefore(li, nextLi.nextSibling);
			}
		}
	}
});

/////////////////////////////////////////////////////////////////////////////////

toggleList.addEventListener('click', () => {
	if (listDiv.style.display == 'none') {
		toggleList.textContent = 'Hide';
		listDiv.style.display = 'block';
		toggleList.style.background = 'white';
		toggleList.style.color = 'rgb(77, 144, 254)';
	} else {
		toggleList.textContent = 'Show';
		listDiv.style.display = 'none';
		toggleList.style.background = '#FF2C73';
		toggleList.style.color = 'white';
	}
});

descriptionButton.addEventListener('click', () => {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
	descriptionInput.focus();
});

descriptionP.title = "paragraph"; //is not a good practice, better set in the HTML.
// input.type = "radio";

var get = toggleList.getAttribute("name");
console.log(get);

//add a new item depending on the input content
addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li'); //nothing happens cause we haven't added it to the DOM
	//with that We're just creating free floating elements that exist only in memory somewhere.

	li.textContent = addItemInput.value;
	attachListItemButtons(li);
	ul.appendChild(li);
	// Add removeButton next to the each li item

	//auto clear the input and focus it when a new list item is added:
	addItemInput.value = '';
	addItemInput.focus();
});

  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.



//Remove a the last item added
removeItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	// we'll need to select the last item in t he list
		//1. we could select all the 'li' elements with getElementsByTagName,
		//   then find the length of the collection and use that to access the last element.
		//2. Using querySelector and CSS pseudo class 'last-child'
	let li = document.querySelector('li:last-child');
	ul.removeChild(li);
});



///////////////////// PRACTICE /////////////////////

// let newButton = document.createElement('button');
// newButton.className = 'new';
// newButton.appendChild(ul);

// console.log(ul);

///////////////////// EXCERCISE /////////////////////

// In the listener that has been added to the section element,
// ensure that the text input elements are the only children
// that trigger the background-changing behavior:
//
// R/

// let section = document.getElementsByTagName('section')[0];

// section.addEventListener('click', (e) => {
//   if (e.target.tagName == 'INPUT') {
//     e.target.style.backgroundColor = 'rgb(255, 255, 0)';
//   }
// });

////////////////////////////////////////////////////
///////////////////// HELPERS //////////////////////
////////////////////////////////////////////////////

// - const removeMe = document.querySelector('.remove_me');
//		 let parent = removeMe.parentNode;
//
//	 parent.removeChild(removeMe);


// - let paragraph = document.getElementById('myParagraph');
//   let parent = paragraph.parentNode
//	 parent.removeChild(paragraph);

// - 	document.addEventListener('click', (event) => {
// 			console.log(event.target);
// 		});


// - Nodes belongs to the DOM while Elements is plain HTML

// - What property can you use to change an element's class name with JavaScript?
// R/ className
// Set the class of panel to the newParagraph:
// const contentDiv = document.getElementById("content");
// let newParagraph = document.createElement("p");
// newParagraph.className = "panel";
// // Append the newParagraph element to the content DIV element:
// contentDiv.appendChild(newParagraph);


// - toggleList.setAttribute("disabled","disabled");

// - ul.innerHTML = "<li class='new'>New One</li>";
// console.log(ul);

////// textContent ////// = the same output of innerHTML
////// innerHTML //////   = but this can do more than just handlling text,
						//  it can also read and alter the element,
						//  can replace all several list content with whatever you wnat.

// the styles objects properties are generally used as setters and not getter

// - in a real project if you've decided to use 'querySelector' you should keep use it through the project

/////////////////////////////////////////////////////
////////////////////// GLOSARY //////////////////////
/////////////////////////////////////////////////////

// - .firstElementChild !NOT use firstChild
// - .lastElementChild  !NOT use lastChild

// - .addEventListener
// - .addEventListener('click', (event) => {
// -  event.target.tagName
// -  event.target.parentNode

// - .parentNode
// - .tagName

// - textContent = the same output of innerHTML
// - innerHTML   = but this can do more than just handlling text,
			   //  it can also read and alter the element,
			   //  can replace all several list content with whatever you wnat.

// - .style.display = 'block';

// - .value
// - .focus();
// - .title

// - .getAttribute("name");
// - .getElementsByTagName('ul')[0];
// - let li = listUl.querySelectorAll('li')[1];
// - .querySelector

// - .createElement
// - .appendChild()
// - .removeChild()
// - .createTextNode

// - .toUpperCase()
// - .toLowerCase()

// Example

// INSTRUCTION:
// When any one of the buttons is clicked, a class of highlight
// should be added to the paragraph element immediately preceding
// that button inside the parent list item element. Add the code
// to create this behavior on line 5.

// const list = document.getElementsByTagName('ul')[0];

// list.addEventListener('click', function(e) {
//   if (e.target.tagName == 'BUTTON') {
//     if(e.target.textContent.toLowerCase() === 'highlight') {
//       let p = e.target.previousElementSibling;
//       if (p.tagName === 'P') { // Just to be safe that we are highlighting a paragraph tag
//         p.classList.add('highlight');
//       }
//     }
//   }
// });

// the following two lines of code are functionally equivalent:
//
//  - ul.removeElement(ul.firstElementChild);
//
// and
//
// - ul.removeElement(ul.children[0]);

//////////////////////////////////////////////////////////

// CHALLANGE

// const section = document.querySelector('section');
// let paragraphs = section.children;
// for (let i = 0; i < paragraphs.length; i += 1) {
//    paragraphs[i].style.color = 'blue';
// };

//////////////////////////////////////////////////////////
///////////////// "THIS" CONTEXT KEYWORD ///////////////// //////////////////////////////////////////////////////////

// 4 ways that "this" takes a value:

// 1. in normal function calls
function helloWord() {
	console.log('hello Word');
	console.log(this); // "this" is going to be the global context in a browser
	// is the window object But if we were in a Node app, things would be quite a bit different.
};

helloWord();

// 2. within methods on objects
var Portland = {
	bridges: 12,
	airport: 1,
	soccerTeams: 1,
	logNumberOfBridges: function() {
		console.log("there are " + this.bridges + " bridges in Portland!");
	}
};
//if a get out the object, so "this" returns me undefined, because is not already reference.
function logTeams() {
	console.log(this.soccerTeams);
}

Portland.foo = logTeams;

Portland.logNumberOfBridges(); // this calls the logNumberOfBridges method.
Portland.foo(); // this calls the logTeams method.
logTeams(); // returns undefined.

// 3. when a constructor is used to create a new instance of a prototype
var City = function(name, state) {
	this.name = name || "Portland"; // will either be the name parameter that was passed OR it'll default to Portland, if name wasn't defined.
	this.state = state || "Oregon"; // same to state
	this.printMyCityAndState = function() {
		console.log("My city is " + this.name + ", and my state is: " + this.state);
	};
};

portland = new City();
seattle = new City('Seattle', 'Washington');
florida = new City('Miami');

console.log(portland);
console.log(seattle);

portland.printMyCityAndState();
seattle.printMyCityAndState();
florida.printMyCityAndState();
//in this case "this" correspond to the instance object itself
// 4. a function invoked with .call, .apply or bind.

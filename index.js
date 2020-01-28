function getFirstSelector(selector){
  var test = document.querySelector(selector);
  //console.log(test);
  return document.querySelector(selector);
}

//getFirstSelector('.ranked-list');

// Define a function nestedTarget() that pulls a .target out of #nested
// (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ).
// (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
// REF: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors
function nestedTarget() {
  return document.querySelector('#nested .target');
}

//console.log(nestedTarget());

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function increaseRankBy(n) {
  var elements = document.querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + parseInt(n);
  }
}

//increaseRankBy(3);

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
// This is challenging to implement correctly, but not beyond your ability!)
//
// HINT 1: Your solution for deepestChild() does not need to be totally
// generic; we don't expect it to work in every case. For example, we know that
// div#grand-node has only one node at each level — for this lab, you can solve
// for that case, and not worry about a case where there are sibling nodes.
//
// HINT: Remember learning about breadth-first search? A similar technique
// might come in handy here.
function deepestChild() {
  var parent = document.getElementById('grand-node');
  // Using only children[0] works.
  // children returns the HTMLCollect object
  // Using childNodes does not return children correctly.
  var child = "";
  //parent.childNodes;

  if (parent.hasChildNodes()) {
    child = parent.childNodes;
    parent = child;
  }
  
  return parent;
}

var test = deepestChild();
console.log(test[1].innerHTML);
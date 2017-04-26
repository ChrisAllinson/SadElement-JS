/*
* sad-element.js
* Sad Element
* Chris Allinson
* v1.1.1
*/


function sadElement(divId) {
  document.getElementById(divId).classList.add('sad-element-1');
  setTimeout(function () {
    document.getElementById(divId).classList.remove('sad-element-1');
    document.getElementById(divId).classList.add('sad-element-2');
    setTimeout(function () {
      document.getElementById(divId).classList.remove('sad-element-2');
      document.getElementById(divId).classList.add('sad-element-3');
      setTimeout(function () {
        document.getElementById(divId).classList.remove('sad-element-3');
        document.getElementById(divId).classList.add('sad-element-4');
        setTimeout(function () {
          document.getElementById(divId).classList.remove('sad-element-4');
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}

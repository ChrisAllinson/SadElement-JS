/*
* sad-element.js
* Sad Element
* Chris Allinson
* v1.2.0
*/


function sadElement(divId, duration) {
  // guard
  if (!divId) {
    return;
  }

  var legDuration = 100;
  // override
  if (duration) {
    legDuration = duration / 4;
  }

  var el = document.getElementById(divId);

  el.classList.add('sad-element-1');
  setTimeout(function () {
    el.classList.remove('sad-element-1');
    el.classList.add('sad-element-2');
    setTimeout(function () {
      el.classList.remove('sad-element-2');
      el.classList.add('sad-element-3');
      setTimeout(function () {
        el.classList.remove('sad-element-3');
        el.classList.add('sad-element-4');
        setTimeout(function () {
          el.classList.remove('sad-element-4');
        }, legDuration);
      }, legDuration);
    }, legDuration);
  }, legDuration);
}

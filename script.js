(function() {
  'use strict';
  for (var i = 0; i < 81; i++) {
    var newD = document.createElement('div');
    var beachBod = document.getElementsByTagName('body')[0];

    newD.style.width = '11.1%';
    newD.style.paddingBottom = '11.1%';
    newD.style.float = 'left';
    if (i % 2 === 0) {
      newD.style.backgroundColor = 'red';
    }
    else {
      newD.style.backgroundColor = 'black';
    }
    beachBod.appendChild(newD);
  }
})();

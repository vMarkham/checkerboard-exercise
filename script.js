//This is incomplete.


(function() {
  'use strict';

  for (var i = 0; i < 81; i++) {
    var newD = document.createElement('div');
    var beachBod = document.getElementsByTagName('body')[0];
    // var randCol = 'rgb(' + Math.floor(Math.random() * 256) +
    //   ', ' + Math.floor(Math.random() * 256) + ', ' +
    //   Math.floor(Math.random() * 256) + ')';
    var thisColor = 'rgb(' + (25 + i * 2) + ', ' + (150 - i) + ', ' + (0 + i * 2) + ')';

    newD.style.width = '11.1%';
    newD.style.paddingBottom = '11.1%';
    newD.style.float = 'left';

    newD.style.backgroundColor = thisColor;
    beachBod.appendChild(newD);
  }
})();

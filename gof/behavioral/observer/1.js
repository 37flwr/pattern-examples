// https://github.com/trello/chromello/blob/master/js/onload.js

window.onload = function () {
  var e = new TrelloChrome();
  e.bind(window);

  if (location.search != "?focusHack") location.search = "?focusHack";
};

/*
  ____________________________DESCRIPTION_______________________________
  Basically, all of the listeners, such as eventListeners in WebApi are observers by their nature

  The code above is a simple listener for window dom element being loaded
  Once it happens observer reacts to the element state change and binds an object to it
*/

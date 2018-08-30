// groups logs in a collapsable display
console.group('Hello');
  console.log('hey 1');
  console.log('hey 2');
  console.log('hey 3');
console.groupEnd('Hello');

// tells how long it took for the code between to load
console.time('loop')
  for(let i = 0; i < 1000; i++) {
    console.log(i);
  }
console.timeEnd('loop')

// https://www.w3schools.com/jsref/dom_obj_document.asp

// local storage stay in browser until manually cleared (by js or client)
localStorage.setItem('name', 'John');
console.log(localStorage.getItem('name'));
localStorage.clear('name');

// session storage goes away when session ends or browser closed
sessionStorage.setItem('car', 'BMW');

// set cookies
document.cookie = "username=John Doe"

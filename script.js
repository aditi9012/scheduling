function myMove() {
  let elem = document.getElementById("animate");   
  let pos = 0;
  let a=Date.now();
  let id = setInterval(frame, 1000/60);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
      elem.innerHTML=`finished at ${(Date.now()-a)/1000}`;
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
    
    }

  }
}

function myMove1() {
  let elem = document.getElementById("animate1");   
  let pos = 0;
  let a=Date.now();
  requestAnimationFrame(frame);
  function frame() {
    if (pos == 350) {
     
      elem.innerHTML=`finished at ${(Date.now()-a)/1000}`;
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
     
      requestAnimationFrame(frame);
    }
  }
}

function myMove2() {
  let elem = document.getElementById("animate2");   
  let pos = 0;
  let a=Date.now();
  setTimeout(frame, 1000/60);
  function frame() {
    if (pos == 350) {
      clearTimeout(frame);
      elem.innerHTML=`finished at ${(Date.now()-a)/1000}`;
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      setTimeout(frame, 1000/60);
    }
  }
}

function myMove3() {
  let elem = document.getElementById("animate3");   
  let pos = 0;
  let a=Date.now();
  Promise.resolve().then(frame);
  function frame() {
    if (pos == 350) {
     
      elem.innerHTML=`finished at ${(Date.now()-a)/1000}`;
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      Promise.resolve().then(frame);
    }
  }
}

function myMove4() {
  let elem = document.getElementById("animate4");   
  let pos = 0;
  let a=Date.now();
  queueMicrotask(frame);
  function frame() {
    if (pos == 350) {
    
      elem.innerHTML=`finished at ${(Date.now()-a)/1000}`;
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      queueMicrotask(frame);
    }
  }
}
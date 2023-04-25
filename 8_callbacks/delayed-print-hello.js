const executeAfterDelay = (delayInSeconds, callback) =>
{ const delayInMilliseconds = delayInSeconds * 1000;
    setTimeout(callback, delayInMilliseconds)
};

// function executeAfterDelay that takes on 2 arguments = delayInSeconds & callback
// within the function block we use the argument delayInSeconds to create
// a new variable 'delayinMillisends' by *1000
// then we use callback argument alongside the newly created variable to call upon setTimeout

const printHello = () => {
    console.log('Hello!');
  }

  executeAfterDelay(5, printHello);

  // After about 5 seconds, you should see the message being logged

const readline = require('readline');
answers=[];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  // TODO: Log the answer in a database
  answers.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    // TODO: Log the answer in a database
    answers.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      // TODO: Log the answer in a database
      answers.push(answer);
      
rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
  // TODO: Log the answer in a database
  answers.push(answer);
  console.log(`My name is ${answers[0]}, I love to do ${answers[1]}, my favourite music to listen to is ${answers[2]} and my favourite meal is ${answers[3]}`)

  rl.close();
});

    });
  });
});




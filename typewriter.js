//Animate the sentence, revealing one character at a time. This will make it look as though it is being typed in by someone.

const sentence = "hello there from lighthouse labs";

//Loop through each character of the string and output to the console.
const typewriter = function() {
  for (const char in sentence) {
    setTimeout(() => {
      process.stdout.write(sentence[char]);//print characters
    }, char * 50);
  }
  setTimeout(() => {
    console.log('\n');
  }, (sentence.length + 1) * 50);
};

typewriter();
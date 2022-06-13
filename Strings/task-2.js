function reverseCase(sentence) {
    if (typeof sentence !== "string") {
      throw new Error("Error: parameter type is not a String");
    }
    let sentence2 = "";
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === sentence[i].toUpperCase()) {
        sentence2 += sentence[i].toLowerCase();
      } else if (sentence[i] === sentence[i].toLowerCase()) {
        sentence2 += sentence[i].toUpperCase();
      }
    }
    return sentence2;
  }
  
  try {
    console.log(reverseCase("Hello theRe"));
    reverseCase("BIG LETTERS");
    reverseCase("");
  } catch (err) {
    console.log(err.message);
  }
  
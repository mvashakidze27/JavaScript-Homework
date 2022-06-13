function reverseCase(sentence) {
    if (typeof sentence !== "string") {
      throw new Error("Error: parameter type is not a String");
    }
    for (let i = 0; i < sentence.length; i++) {
      if (sentence == sentence.toUpperCase()) {
        sentence.toUpperCase(sentence.toLowerCase());
      } else if (sentence == sentence.toLowerCase()) {
        sentence.toLowerCase(sentence.toUpperCase());
      }
    }
    return sentence;
  }
  
  try {
    console.log(reverseCase("Hello theRe"));
    reverseCase("BIG LETTERS");
    reverseCase("");
  } catch (err) {
    console.log(err.message);
  }
  
function searchWord(sentence, word) {
    if (typeof sentence !== "string") {
      throw new Error("Error: sentence parameter type should be a String");
    }
    if (typeof word !== "string") {
      throw new Error("Error: word parameter type should be a String");
    }
    var x = 0,
      y = 0;
  
    for (i = 0; i < sentence.length; i++) {
      if (sentence[i] === word[0]) {
        for (j = i; j < i + word.length; j++) {
          if (sentence[j] === word[j - i]) {
            y++;
          }
          if (y === word.length) {
            x++;
          }
        }
        y = 0;
      }
    }
    return "'" + word + "' was found " + x + " times.";
  }
  
  try {
    console.log(searchWord("The quick brown fox", "fox"));
    // console.log(searchWord("aa, bb, cc, dd, aa", "aa"));
    // console.log(searchWord("sunshine", "sun"));
    // console.log(searchWord("253", 253));
    // console.log(searchWord(253, "253"));
  } catch (err) {
    console.log(err.message);
  }
  
var Books = [
    {
      author: "Bill",
      title: "The Road Ahead",
      haveRead: true,
      dateOfRead: new Date(2020, 10, 10),
    },
    {
      author: "Steve",
      title: "Walter Isaacson",
      haveRead: true,
      dateOfRead: new Date(2020, 10, 5),
    },
    {
      author: "Jhon",
      title: "The Hunger Games",
      haveRead: false,
      dateOfRead: NaN,
    },
  ];
  
  for (var i = 0; i < Books.length; i++) {
    var author = Books[i].author;
    var title = Books[i].title;
    if (Books[i].haveRead) {
      console.log(author + " have read " + title + " book");
    } else {
      console.log(author + " haven't read " + title + " book yet");
    }
  }
  
//   'Bill have read The Road Ahead book'
//   'Steve have read Walter Isaacson book'
//   'Jhon haven't read The Hunger Games book yet'
  
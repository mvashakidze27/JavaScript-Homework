var Books = [
    {
      author: "Bill",
      title: "The Road Ahead",
      haveRead: true,
      dateOfRead: new Date(2020, 10, 10),
      get daysAgo() {
        let today = new Date("06/14/2022");
        return (today.getTime() - this.dateOfRead.getTime()) / (1000 * 3600 * 24);
      },
    },
    {
      author: "Steve",
      title: "Walter Isaacson",
      haveRead: true,
      dateOfRead: new Date(2020, 10, 5),
      get daysAgo() {
        let today = new Date("06/14/2022");
        return (today.getTime() - this.dateOfRead.getTime()) / (1000 * 3600 * 24);
      },
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
    var days = Books[i].daysAgo;
    if (Books[i].haveRead) {
      console.log(author + " have read " + title + " book " + days + " days ago");
    } else {
      console.log(author + " haven't read " + title + " book yet");
    }
  }
  
  // 'Bill have read The Road Ahead book {x} days ago'
  // 'Steve have read Walter Isaacson book {x} days ago'
  // 'Jhon haven't read The Hunger Games book yet'
  
const books = [
  {
    title: "The Power of Habit",
    author: "by Charles Duhigg",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnRsb2gVMor2rDnUCone2BoRjiVzNyjgBZkoBAqdU0Cvav4_E",
    read: true
  },
  {
    title: "The code of the extraordinary mind",
    author: "by Vishen Lakhiani",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1x5lavKDwW4F-L3DSNIPvzx6YYYSwUuv6hBemSa8UOlFRlxpWg",
    read: false
  },
  {
    title: "Mindset: The New Psychology of Success",
    author: "by Carol S. Dweck",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbIc_jPDUQbbNYNoV6ZmX4xcKQV1OIjAdhUZCGkAoCYrBVaveFQ",
    read: false
  }
];

const ul = document.createElement("ul");
document.body.appendChild(ul);

books.forEach(book => {
  const list = document.createElement("li");
  list.innerText = book.title + " " + book.author;
    if(book.read === true){
        list.classList.add("read")
    };

  const img = document.createElement("img");
  img.setAttribute('src', book.url);
  list.appendChild(document.createElement('br'));
  list.append(img);
  ul.append(list);
});


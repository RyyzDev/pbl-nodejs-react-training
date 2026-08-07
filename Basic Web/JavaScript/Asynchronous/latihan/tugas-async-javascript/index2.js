const readBooksPromise = require("./promise.js")

const books = [
    {name : 'LOTR', timeSpent: 3000},
    {name : 'Fidas', timeSpent: 2000},
    {name : 'Kalkulus', timeSpent: 4000},
]

// SOAL 2: PROMISE
books.forEach(item => {
    readBooksPromise(10000, item)
    .then((sisaWaktu)=>{
        readBooksPromise(sisaWaktu, item)
    }).catch((sisaWaktu)=>{
        readBooksPromise(sisaWaktu, item)
    })
});

const readBooks = require("./callback.js")

const books = [
    {name : 'LOTR', timeSpent: 3000},
    {name : 'Fidas', timeSpent: 2000},
    {name : 'Kalkulus', timeSpent: 4000},
    {name : 'Komik', timeSpent: 1000},
]

// SOAL 1 : CALLBACK
function callback(waktu){
    return waktu;
}
books.forEach((item) => {
    readBooks(10000, item, callback)
});

// SOAL 2: PROMISE

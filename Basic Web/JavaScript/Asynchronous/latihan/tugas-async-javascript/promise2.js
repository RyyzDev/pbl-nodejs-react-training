function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
        var books=[
            {name: "shinchan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 50, isColorful: true},
            {name: "algoritma", totalPage: 250, isColorful: false},
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage && x.isColorful == colorful))
        } else {
            const reason = new Error("Maaf buku di bawah 40 halaman tidak terseida")
            reject(reason)
        }
    })
}

module.exports = filterBooksPromise
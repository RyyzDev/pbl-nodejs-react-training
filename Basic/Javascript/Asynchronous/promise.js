// promise adalah objek yang mewakli dari operasi asinkron
// "saya akan mengembalikan hasilnya nanti, tunggu saja"
// Promise mempunyai 3 status. yaitu, Pending, Fulfilled, dan Rejected

/*
    Contoh Dasar
*/
function panggilPasien(nomor){
    return new Promise( (resolve, reject) => {
        setTimeout(() =>{
            if (nomor <= 10) {
                resolve(`Pasien nomor ${nomor}, silahkan masuk`)
            }else {
                reject(`Pasien nomor ${nomor}, dilarang masuk`)
            }
        }, 1000)
    })
}

panggilPasien(11)
    .then((pesan) => {
        console.log("SUCCESS", pesan)
    })
    .catch((error) => {
        console.log("Error", error)
    })
        

/*
    Contoh Lain
*/
let isMomHappy = false;

const willIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        const phone = {
            brand: 'Samsung',
            color: 'Black'
        }
        resolve(phone);
    }else {
        reject('Mom is not happy')
    }
})

const askMom = () => {
    willIGetNewPhone
        .then((phone) => {
            console.log(phone)
        })
        .catch((error)=>{
            console.log(error)
        })
}

askMom();
// import package express
const express = require('express')

// init expres
const app = express();
const port = 3000;

//middleware parse json
app.use(express.json());

/*
  SOAL 1 - lingkaran tabung
  cth: /lingkaran-tabung?r=7&t=10
*/
app.get('/lingkaran-tabung', (req, res) =>{
  const pi = 3.14
  const t = parseInt(req.query.t)
  const r = parseInt(req.query.r)
  let luasAlasTabung = pi * (r * r) * t
  let kelilingAlasTabung = pi * (2 * r)
  let volumeTabung = luasAlasTabung * t

  res.status(200).json({
    jariJari: r,
    tinggi: t,
    volumeTabung: volumeTabung,
    luasAlasTabung: luasAlasTabung,
    kelilingAlasTabung: kelilingAlasTabung
  })
})

/*
  SOAL 2 - Data orang
  cth: /data-orang?umur=21&gender=L
*/
app.get('/data-orang', (req, res) => {
  let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
  ]

  if(req.query.umur && req.query.gender){
    const data = dataOrang.filter(m => m.jenisKelamin === req.query.gender && m.umur >= Number(req.query.umur))
    res.status(200).json(data)
  }
  if (req.query.umur){
    const data = dataOrang.filter(m => m.umur >= req.query.umur)
    res.status(200).json(data)
  }

})


/*
  SOAL 3 - data orang
  cth: /data-orang/1
*/
app.get('/data-orang/:id', (req, res) => {
    let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
  ];

  const data = dataOrang.find(m => m.id === parseInt(req.params.id))
  
  if(!data){
    res.status(404).json({
      message: 'Maaf data tidak ditemukan'
    })
  }

  const hasil = `Pak ${data.name} adalah seorang ${data.pekerjaan} yang berusia ${data.umur}`
  res.status(200).json({
    message: hasil
  })
})

app.listen(port, () =>{
  console.log(`Server berjalan pada localhost:${port}`)
})
// import package express
const express = require('express');

// init package
const app = express();
// deklarasi port
const port = 3000;

// bentuk  umum deklarasi endpoint
// app.get('/', (req, res) => {
//   res.json('hello world');
// })

// contoh static file express js
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
// dicoba menggunakan {{url}}/nama_file_yang_ada_di_folder_public


/*
  REQUEST
  req.method, http method yang digunakan (GET, POST, PUT, PATCH, DELETE)
  req.url, URL lengkap yang dihit user
  req.params, nilai dari bagian path dinamis (cth: /users/:id)
  req.query, data query string setelah '?', (cth: /users?nama=contoh)
  req.headers, header http yang dikirim user
  req.body, data payload method POST/PUT/PATCH (umumnya bentuk json), butuh middleware parser seperti express.json() atau express.urlencoded()
  req.ip, ip yang digunakan user
*/

/*
  RESPONSE
  res.send(data), kirim teks, html, atau objek
  res.json(obj), kirim json
  res.status(code), set http code (1xx, 2xx, 3xx, 4xx, 5xx)
  res.redirect(url), redirect ke url lain
  res.render(view, data), render view dan data (jika menggunakan templating engine)
  res.set(header, value), set header http response
  res.end(), akhiri response tanpa data apapun
*/


/*
  ROUTING MODULAR
*/
// import router movies
const moviesRouter = require('./src/routes/movies.js')
// mounting router
app.use(express.json())
//pilih path dan import package
app.use('/api/movies', moviesRouter);



// init server
app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`)
})
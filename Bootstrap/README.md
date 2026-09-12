# 📘 Bootstrap 5

> Kumpulan referensi cepat Bootstrap 5 untuk keperluan development sehari-hari.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📑 Daftar Isi

- [Setup Awal](#-setup-awal)
- [Grid System](#-grid-system)
- [Warna & Background](#-warna--background)
- [Spacing](#-spacing-margin--padding)
- [Typography](#-typography)
- [Buttons](#-buttons)
- [Cards](#-cards)
- [Navbar](#-navbar)
- [Forms](#-forms)
- [Alerts](#️-alerts)
- [Badges](#️-badges)
- [Table](#-table)
- [Utilities](#️-utilities-popoluler)
- [Modal](#-modal)
- [Carousel](#-carousel)
- [Accordion](#-accordion)
- [Tips Cepat](#-tips-cepat)

---

## 🚀 Setup Awal

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5</title>
  < !-- CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  
  <!-- JS Bundle (Popper + Bootstrap) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 📐 Grid System

Bootstrap menggunakan **12 kolom** dalam satu baris.

```html
<div class="container">
  <div class="row">
    <div class="col">Kolom otomatis</div>
    <div class="col">Kolom otomatis</div>
  </div>

  <div class="row">
    <div class="col-4">4/12</div>
    <div class="col-8">8/12</div>
  </div>
</div>
```

### Breakpoints

|   Class   |     Device  |  Lebar  |
|-----------|-------------|---------|
| `col-`    | Extra small | < 576px |
| `col-sm-` | Small       | ≥ 576px |
| `col-md-` | Medium      | ≥ 768px |
| `col-lg-` | Large       | ≥ 992px |
| `col-xl-` | Extra large | ≥ 1200px|
| `col-xxl-`| XXL         | ≥ 1400px|

```html
<div class="col-12 col-md-6 col-lg-4">Responsive</div>
```

### Container

```html
<div class="container">      <!-- Fixed width -->
<div class="container-fluid"> <!-- Full width -->
<div class="container-md">   <!-- Full width sampai md -->
```

---

## 🎨 Warna & Background

```html
<!-- Text Color -->
<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-light">Light</p>
<p class="text-dark">Dark</p>
<p class="text-muted">Muted</p>
<p class="text-white">White</p>

<!-- Background -->
<div class="bg-primary text-white">...</div>
<div class="bg-success">...</div>
<div class="bg-opacity-50 bg-primary">Opacity 50%</div>
```

---

## 📏 Spacing (Margin & Padding)

Format: `{property}{sisi}-{size}`

- **Property:** `m` (margin), `p` (padding)
- **Sisi:** `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (horizontal), `y` (vertical), kosong (semua)
- **Size:** `0`–`5`, `auto`

```html
<div class="m-3">Margin semua 1rem</div>
<div class="mt-4">Margin top 1.5rem</div>
<div class="px-5">Padding horizontal 3rem</div>
<div class="py-2">Padding vertical 0.5rem</div>
<div class="mx-auto">Margin auto (center)</div>
```

---

## 🔤 Typography

```html
<h1>Heading 1</h1>
<p class="h1">Teks sebesar H1</p>
<p class="display-1">Display 1 (besar banget)</p>
<p class="lead">Paragraf lead</p>

<p class="fw-bold">Bold</p>
<p class="fw-semibold">Semibold</p>
<p class="fw-light">Light</p>
<p class="fst-italic">Italic</p>
<p class="text-decoration-underline">Underline</p>
<p class="text-decoration-line-through">Strike</p>
<p class="text-uppercase">uppercase</p>
<p class="text-lowercase">LOWERCASE</p>
<p class="text-capitalize">kapital tiap kata</p>

<p class="text-start">Kiri</p>
<p class="text-center">Tengah</p>
<p class="text-end">Kanan</p>

<blockquote class="blockquote">
  <p>Kutipan keren</p>
</blockquote>
```

---

## 🔘 Buttons

```html
<!-- Warna -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Outline -->
<button class="btn btn-outline-primary">Outline</button>

<!-- Ukuran -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Full width -->
<button class="btn btn-primary w-100">Full</button>

<!-- Disabled -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Group -->
<div class="btn-group">
  <button class="btn btn-primary">Kiri</button>
  <button class="btn btn-primary">Tengah</button>
  <button class="btn btn-primary">Kanan</button>
</div>
```

---

## 🃏 Cards

```html
<div class="card" style="width: 18rem;">
  <img src="img.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Judul Card</h5>
    <p class="card-text">Deskripsi singkat card ini.</p>
    <a href="#" class="btn btn-primary">Klik</a>
  </div>
</div>
```

---

## 🧭 Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

## 📝 Forms

```html
<div class="mb-3">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="email@example.com">
</div>

<!-- Input Group -->
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<!-- Select -->
<select class="form-select">
  <option>Pilihan 1</option>
  <option>Pilihan 2</option>
</select>

<!-- Checkbox / Radio -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="c1">
  <label class="form-check-label" for="c1">Check me</label>
</div>

<!-- Switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="sw">
  <label class="form-check-label" for="sw">Switch</label>
</div>

<!-- Range -->
<input type="range" class="form-range">
```

---

## ⚠️ Alerts

```html
<div class="alert alert-success">Berhasil!</div>
<div class="alert alert-danger">Error!</div>
<div class="alert alert-warning">Peringatan!</div>
<div class="alert alert-info">Info</div>

<!-- Dismissible -->
<div class="alert alert-warning alert-dismissible fade show">
  Bisa ditutup!
  <button class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

---

## 🏷️ Badges

```html
<span class="badge bg-primary">New</span>
<span class="badge bg-danger rounded-pill">99+</span>
```

---

## 📊 Table

```html
<table class="table table-striped table-hover table-bordered">
  <thead class="table-dark">
    <tr><th>#</th><th>Nama</th><th>Umur</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Budi</td><td>25</td></tr>
  </tbody>
</table>
```

**Variasi:** `table-striped`, `table-hover`, `table-bordered`, `table-dark`, `table-responsive`

---

## 🛠️ Utilities Populer

```html
<!-- Display -->
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flexbox</div>
<div class="d-none d-md-block">Hidden di mobile</div>

<!-- Flexbox -->
<div class="d-flex justify-content-center align-items-center">
  <div>Center</div>
</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex flex-column">...</div>
<div class="d-flex gap-3">...</div>

<!-- Sizing -->
<div class="w-25">Width 25%</div>
<div class="w-50">Width 50%</div>
<div class="w-100">Width 100%</div>
<div class="h-100">Height 100%</div>

<!-- Border -->
<div class="border">Border</div>
<div class="border-top">Border top</div>
<div class="border rounded">Rounded</div>
<div class="border rounded-circle">Lingkaran</div>
<div class="border rounded-pill">Pill</div>
<div class="border shadow">Shadow</div>
<div class="shadow-lg">Shadow besar</div>

<!-- Position -->
<div class="position-relative">
  <span class="position-absolute top-0 end-0">Pojok kanan atas</span>
</div>
<div class="position-fixed bottom-0 end-0">Fixed</div>
<div class="position-sticky top-0">Sticky</div>

<!-- Overflow -->
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>

<!-- Visibility -->
<div class="visible">Visible</div>
<div class="invisible">Invisible</div>
```

---

## 🎭 Modal

```html
<!-- Trigger -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Buka Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Judul</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Isi modal...</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
        <button class="btn btn-primary">Simpan</button>
      </div>
    </div>
  </div>
</div>
```

---

## 🎠 Carousel

```html
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="1.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="2.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

---

## 🪗 Accordion

```html
<div class="accordion" id="acc">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#item1">
        Item 1
      </button>
    </h2>
    <div id="item1" class="accordion-collapse collapse show" data-bs-parent="#acc">
      <div class="accordion-body">Isi konten...</div>
    </div>
  </div>
</div>
```

---

## 💡 Tips Cepat

- 🔸 Gunakan `container` dulu sebelum `row`
- 🔸 `row` harus berisi `col-*`
- 🔸 Kombinasikan class untuk responsive: `col-12 col-md-6`
- 🔸 Baca dokumentasi resmi: [getbootstrap.com](https://getbootstrap.com/docs/5.3/)
- 🔸 Bisa pakai Bootstrap Icons:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
<i class="bi bi-heart"></i>
```

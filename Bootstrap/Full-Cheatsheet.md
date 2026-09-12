# 📚 Bootstrap 5 Cheatsheet Lengkap (Lanjutan)

> Kumpulan cheatsheet Bootstrap 5 untuk berbagai kebutuhan development.

---

## 📑 Daftar Isi

1. [Form & Validation](#1--form--validation)
2. [Typography & Text Utilities](#2--typography--text-utilities)
3. [Color & Background](#3--color--background)
4. [Grid & Container](#4--grid--container)
5. [Navigation & Menu](#5--navigation--menu)
6. [Interactive Components](#6--interactive-components)
7. [Utility Lengkap](#7--utility-lengkap)
8. [Helper Classes](#8--helper-classes)
9. [Responsive & Breakpoint](#9--responsive--breakpoint)
10. [Dark Mode & Theming](#10--dark-mode--theming)
11. [JavaScript API](#11--javascript-api)
12. [Bootstrap Icons](#12--bootstrap-icons)
13. [Accessibility (A11y)](#13--accessibility-a11y)
14. [CDN & Setup](#14--cdn--setup)
15. [Layout Pattern / Resep](#15--layout-pattern--resep)

---

## 1. 📝 Form & Validation

### Input Dasar

```html
<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" id="email" placeholder="email@example.com">
  <div class="form-text">Kami tidak akan share email kamu.</div>
</div>
```

### Sizing

```html
<input class="form-control form-control-sm" type="text" placeholder="Small">
<input class="form-control" type="text" placeholder="Default">
<input class="form-control form-control-lg" type="text" placeholder="Large">
```

### Select

```html
<select class="form-select" aria-label="Default select">
  <option selected>Pilih opsi</option>
  <option value="1">Satu</option>
  <option value="2">Dua</option>
</select>

<!-- Multiple -->
<select class="form-select" multiple aria-label="Multiple select">
  <option value="1">Satu</option>
  <option value="2">Dua</option>
</select>

<!-- Sizing -->
<select class="form-select form-select-sm">...</select>
<select class="form-select form-select-lg">...</select>
```

### Checkbox & Radio

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1" checked>
  <label class="form-check-label" for="check1">Checkbox</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="radio1" id="radio1" checked>
  <label class="form-check-label" for="radio1">Radio</label>
</div>

<!-- Inline -->
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inline1">
  <label class="form-check-label" for="inline1">Inline 1</label>
</div>

<!-- Switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switch1">
  <label class="form-check-label" for="switch1">Switch</label>
</div>
```

### Range

```html
<label for="range1" class="form-label">Volume</label>
<input type="range" class="form-range" id="range1" min="0" max="100">
```

### Floating Labels

```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com">
  <label for="floatEmail">Email address</label>
</div>

<div class="form-floating">
  <select class="form-select" id="floatSelect">
    <option selected>Pilih opsi</option>
    <option value="1">Satu</option>
  </select>
  <label for="floatSelect">Select</label>
</div>
```

### Input Group

```html
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control">
  <span class="input-group-text">.00</span>
</div>

<!-- Dengan button -->
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Cari...">
  <button class="btn btn-primary" type="button">Cari</button>
</div>

<!-- Sizing -->
<div class="input-group input-group-sm">...</div>
<div class="input-group input-group-lg">...</div>
```

### Disabled & Readonly

```html
<input class="form-control" type="text" placeholder="Disabled" disabled>
<input class="form-control" type="text" value="Readonly" readonly>
<input class="form-control-plaintext" type="text" value="Plain text" readonly>
```

### Validasi

```html
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validInput" class="form-label">Valid input</label>
    <input type="text" class="form-control is-valid" id="validInput" value="Benar" required>
    <div class="valid-feedback">Mantap!</div>
  </div>
  <div class="col-md-6">
    <label for="invalidInput" class="form-label">Invalid input</label>
    <input type="text" class="form-control is-invalid" id="invalidInput" required>
    <div class="invalid-feedback">Wajib diisi.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

### Form Layout Grid

```html
<form class="row g-3">
  <div class="col-md-6">
    <label class="form-label">Nama Depan</label>
    <input type="text" class="form-control">
  </div>
  <div class="col-md-6">
    <label class="form-label">Nama Belakang</label>
    <input type="text" class="form-control">
  </div>
  <div class="col-12">
    <button class="btn btn-primary">Simpan</button>
  </div>
</form>
```

### Horizontal Form

```html
<form>
  <div class="row mb-3">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPass" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPass">
    </div>
  </div>
</form>
```

---

## 2. 🔤 Typography & Text Utilities

### Heading & Display

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<p class="h1">Teks sebesar H1</p>
<p class="h2">Teks sebesar H2</p>

<p class="display-1">Display 1</p>
<p class="display-2">Display 2</p>
<p class="display-3">Display 3</p>
<p class="display-4">Display 4</p>
<p class="display-5">Display 5</p>
<p class="display-6">Display 6</p>
```

### Lead & Paragraph

```html
<p class="lead">Paragraf lead (lebih besar & tipis)</p>
<p>Paragraf biasa.</p>
<small>Small text</small>
```

### Font Weight

```html
<p class="fw-bold">Bold</p>
<p class="fw-bolder">Bolder</p>
<p class="fw-semibold">Semibold</p>
<p class="fw-medium">Medium</p>
<p class="fw-normal">Normal</p>
<p class="fw-light">Light</p>
<p class="fw-lighter">Lighter</p>
<p class="fst-italic">Italic</p>
<p class="fst-normal">Normal</p>
```

### Text Transform & Decoration

```html
<p class="text-lowercase">HURUF KECIL</p>
<p class="text-uppercase">huruf besar</p>
<p class="text-capitalize">setiap kata kapital</p>

<a href="#" class="text-decoration-none">Tanpa underline</a>
<p class="text-decoration-underline">Underline</p>
<p class="text-decoration-line-through">Strike</p>
```

### Font Monospace & Size

```html
<p class="font-monospace">Kode: 1234</p>
<p class="fs-1">Font size 1</p>
<p class="fs-2">Font size 2</p>
<p class="fs-3">Font size 3</p>
<p class="fs-4">Font size 4</p>
<p class="fs-5">Font size 5</p>
<p class="fs-6">Font size 6</p>
```

### Text Color

```html
<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-light bg-dark">Light</p>
<p class="text-dark">Dark</p>
<p class="text-body">Body</p>
<p class="text-muted">Muted</p>
<p class="text-white bg-dark">White</p>
<p class="text-black-50">Black 50%</p>
<p class="text-white-50 bg-dark">White 50%</p>

<!-- Subtle -->
<p class="text-primary-emphasis">Primary emphasis</p>

<!-- Opacity -->
<p class="text-primary text-opacity-75">Primary 75%</p>
```

### Text Alignment

```html
<p class="text-start">Kiri</p>
<p class="text-center">Tengah</p>
<p class="text-end">Kanan</p>
<p class="text-sm-end">Kanan di sm+</p>
```

### Text Wrapping

```html
<p class="text-wrap">Wrap teks normal</p>
<p class="text-nowrap">Tidak wrap</p>
<p class="text-break">Pecah kata panjang</p>
<div class="text-truncate" style="max-width: 150px;">
  Teks panjang yang akan dipotong dengan ellipsis.
</div>
```

### Lists

```html
<ul class="list-unstyled">
  <li>Tanpa bullet</li>
  <li>Tanpa bullet</li>
</ul>

<ul class="list-inline">
  <li class="list-inline-item">Item 1</li>
  <li class="list-inline-item">Item 2</li>
</ul>
```

### Blockquote & Figure

```html
<figure>
  <blockquote class="blockquote">
    <p>Kutipan yang menginspirasi.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Seseorang di <cite title="Source">Sumber</cite>
  </figcaption>
</figure>
```

### Link Utilities

```html
<a href="#" class="link-primary">Link primary</a>
<a href="#" class="link-success">Link success</a>
<a href="#" class="link-danger">Link danger</a>
<a href="#" class="link-warning">Link warning</a>
<a href="#" class="link-info">Link info</a>
<a href="#" class="link-light bg-dark">Link light</a>
<a href="#" class="link-dark">Link dark</a>

<a href="#" class="link-offset-2 link-underline link-underline-opacity-0">
  Link dengan efek hover
</a>

<a href="#" class="link-opacity-50">Link 50% opacity</a>
```

---

## 3. 🎨 Color & Background

### Tema Warna

```html
<!-- Text -->
<p class="text-primary">Primary</p>
<p class="text-primary-emphasis">Primary emphasis</p>
<p class="text-primary-subtle">Primary subtle</p>

<!-- Background -->
<div class="bg-primary">Primary</div>
<div class="bg-primary-subtle">Primary subtle</div>
<div class="bg-body">Body</div>
<div class="bg-body-secondary">Body secondary</div>
<div class="bg-body-tertiary">Body tertiary</div>
<div class="bg-black">Black</div>
<div class="bg-white">White</div>
<div class="bg-transparent">Transparent</div>
```

### Background Opacity

```html
<div class="bg-primary bg-opacity-75">75%</div>
<div class="bg-primary bg-opacity-50">50%</div>
<div class="bg-primary bg-opacity-25">25%</div>
<div class="bg-primary bg-opacity-10">10%</div>
```

### Gradient

```html
<div class="bg-primary bg-gradient text-white p-3">Gradient</div>
<div class="bg-success bg-gradient text-white p-3">Gradient</div>
```

### Border Color

```html
<div class="border border-primary">Border primary</div>
<div class="border border-success">Border success</div>
<div class="border border-danger">Border danger</div>
<div class="border border-primary-subtle">Border subtle</div>
<div class="border border-primary border-opacity-50">Border 50%</div>
```

### Warna Lengkap

`primary` · `secondary` · `success` · `danger` · `warning` · `info` · `light` · `dark` · `body` · `black` · `white` · `transparent`

---

## 4. 📐 Grid & Container

### Container

```html
<div class="container">Fixed width (responsive)</div>
<div class="container-sm">100% sampai sm</div>
<div class="container-md">100% sampai md</div>
<div class="container-lg">100% sampai lg</div>
<div class="container-xl">100% sampai xl</div>
<div class="container-xxl">100% sampai xxl</div>
<div class="container-fluid">Full width 100%</div>
```

### Row

```html
<div class="row">Baris default</div>
<div class="row row-cols-2">2 kolom per baris</div>
<div class="row row-cols-3">3 kolom per baris</div>
<div class="row row-cols-md-4">4 kolom di md+</div>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">Responsive</div>
```

### Column

```html
<div class="row">
  <div class="col">Auto equal</div>
  <div class="col">Auto equal</div>
</div>

<div class="row">
  <div class="col-4">4/12</div>
  <div class="col-8">8/12</div>
</div>

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Responsive</div>
</div>

<div class="row">
  <div class="col-auto">Selebar konten</div>
  <div class="col">Sisa ruang</div>
</div>
```

### Gutters (Jarak antar Kolom)

```html
<div class="row g-0">Tanpa gutter</div>
<div class="row g-3">Gutter 1rem</div>
<div class="row gx-3">Horizontal gutter</div>
<div class="row gy-3">Vertical gutter</div>
<div class="row g-2 g-md-4">Responsive</div>
```

### Offset

```html
<div class="row">
  <div class="col-md-4">Kolom</div>
  <div class="col-md-4 offset-md-4">Geser 4 kolom</div>
</div>
```

### Nesting

```html
<div class="row">
  <div class="col-sm-6">
    <div class="row">
      <div class="col-6">Nested 1</div>
      <div class="col-6">Nested 2</div>
    </div>
  </div>
</div>
```

### Alignment Row

```html
<div class="row align-items-start">Atas</div>
<div class="row align-items-center">Tengah</div>
<div class="row align-items-end">Bawah</div>

<div class="row justify-content-start">Kiri</div>
<div class="row justify-content-center">Tengah</div>
<div class="row justify-content-end">Kanan</div>
<div class="row justify-content-around">Around</div>
<div class="row justify-content-between">Between</div>
<div class="row justify-content-evenly">Evenly</div>
```

### Order

```html
<div class="row">
  <div class="col order-last">Pertama di markup, terakhir tampil</div>
  <div class="col order-first">Kedua di markup, pertama tampil</div>
</div>
```

---

## 5. 🧭 Navigation & Menu

### Navbar Lengkap

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarMain">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Menu</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Item 1</a></li>
            <li><a class="dropdown-item" href="#">Item 2</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Cari...">
        <button class="btn btn-outline-success" type="submit">Cari</button>
      </form>
    </div>
  </div>
</nav>
```

### Navs & Tabs

```html
<!-- Tabs -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Profile</a>
  </li>
</ul>

<!-- Pills -->
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>

<!-- Justified / Fill -->
<ul class="nav nav-pills nav-fill">...</ul>
<ul class="nav nav-pills nav-justified">...</ul>
```

### Tab Content

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button">Tab 1</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button">Tab 2</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="tab1">Konten 1</div>
  <div class="tab-pane fade" id="tab2">Konten 2</div>
</div>
```

### Dropdown

```html
<!-- Basic -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated</a></li>
  </ul>
</div>

<!-- Split button -->
<div class="btn-group">
  <button class="btn btn-primary">Aksi</button>
  <button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"></button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opsi 1</a></li>
  </ul>
</div>

<!-- Arah -->
<div class="dropup">...</div>
<div class="dropend">...</div>
<div class="dropstart">...</div>

<!-- Dark theme -->
<ul class="dropdown-menu dropdown-menu-dark">...</ul>
```

### Breadcrumb

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

### Pagination

```html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<!-- Ukuran -->
<ul class="pagination pagination-sm">...</ul>
<ul class="pagination pagination-lg">...</ul>
```

### Offcanvas

```html
<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvas1">Buka</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas1">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Judul</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Konten sidebar.
  </div>
</div>
```

Posisi: `offcanvas-start` · `offcanvas-end` · `offcanvas-top` · `offcanvas-bottom`

---

## 6. 🎛️ Interactive Components

### Modal

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">Buka Modal</button>

<div class="modal fade" id="modal1" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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

Ukuran: `modal-sm` · `modal-lg` · `modal-xl` · `modal-fullscreen`

### Tooltip

```html
<button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Ini tooltip">
  Hover saya
</button>

<script>
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el))
</script>
```

Placement: `top` · `bottom` · `left` · `right`

### Popover

```html
<button class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Judul" data-bs-content="Isi popover">
  Klik saya
</button>

<script>
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el))
</script>
```

### Toast

```html
<button class="btn btn-primary" id="toastBtn">Tampilkan Toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="toast1" class="toast" role="alert">
    <div class="toast-header">
      <strong class="me-auto">Notifikasi</strong>
      <small>Baru saja</small>
      <button class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">Pesan berhasil dikirim!</div>
  </div>
</div>

<script>
  const toastEl = document.getElementById('toast1')
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl)
  document.getElementById('toastBtn').addEventListener('click', () => toast.show())
</script>
```

### Collapse & Accordion

```html
<!-- Collapse -->
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapse1">Toggle</button>
<div class="collapse" id="collapse1">
  <div class="card card-body">Konten collapse</div>
</div>

<!-- Accordion -->
<div class="accordion" id="accordion1">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#item1">
        Item 1
      </button>
    </h2>
    <div id="item1" class="accordion-collapse collapse show" data-bs-parent="#accordion1">
      <div class="accordion-body">Isi item 1.</div>
    </div>
  </div>
</div>
```

### Carousel

```html
<div id="carousel1" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button data-bs-target="#carousel1" data-bs-slide-to="0" class="active"></button>
    <button data-bs-target="#carousel1" data-bs-slide-to="1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Judul 1</h5>
        <p>Deskripsi slide pertama.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carousel1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carousel1" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

### Scrollspy

```html
<body data-bs-spy="scroll" data-bs-target="#navScroll" data-bs-smooth-scroll="true" tabindex="0">
  <nav id="navScroll" class="navbar">
    <ul class="nav nav-pills">
      <li class="nav-item"><a class="nav-link" href="#satu">Satu</a></li>
      <li class="nav-item"><a class="nav-link" href="#dua">Dua</a></li>
    </ul>
  </nav>
  <div id="satu" style="height: 100vh;">Section satu</div>
  <div id="dua" style="height: 100vh;">Section dua</div>
</body>
```

---

## 7. 🛠️ Utility Lengkap

### Border

```html
<div class="border">Semua border</div>
<div class="border-top">Top</div>
<div class="border-end">End</div>
<div class="border-bottom">Bottom</div>
<div class="border-start">Start</div>
<div class="border-0">Tanpa border</div>
<div class="border border-primary">Warna primary</div>
<div class="border border-3">Border tebal</div>
```

### Rounded

```html
<div class="rounded">Rounded</div>
<div class="rounded-top">Atas</div>
<div class="rounded-end">Kanan</div>
<div class="rounded-bottom">Bawah</div>
<div class="rounded-start">Kiri</div>
<div class="rounded-circle">Lingkaran</div>
<div class="rounded-pill">Pill</div>
<div class="rounded-0">Tanpa rounded</div>
```

### Shadow

```html
<div class="shadow-none">Tanpa shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-lg">Large shadow</div>
```

### Opacity

```html
<div class="opacity-100">100%</div>
<div class="opacity-75">75%</div>
<div class="opacity-50">50%</div>
<div class="opacity-25">25%</div>
<div class="opacity-0">0%</div>
```

### Ratio

```html
<div class="ratio ratio-1x1">...</div>
<div class="ratio ratio-4x3">...</div>
<div class="ratio ratio-16x9">
  <iframe src="..." allowfullscreen></iframe>
</div>
<div class="ratio ratio-21x9">...</div>
```

### Stacks

```html
<div class="vstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="hstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Vertical Rule

```html
<div class="d-flex">
  <div>Kiri</div>
  <div class="vr"></div>
  <div>Kanan</div>
</div>
```

### Interactions

```html
<div class="user-select-all">Pilih semua saat klik</div>
<div class="user-select-auto">Default</div>
<div class="user-select-none">Tidak bisa dipilih</div>

<a href="#" class="pe-none">Tidak bisa di-klik</a>
<a href="#" class="pe-auto">Bisa di-klik</a>
```

---

## 8. 🧰 Helper Classes

### Clearfix

```html
<div class="clearfix">
  <div class="float-start">Kiri</div>
  <div class="float-end">Kanan</div>
</div>
```

### Colored Links

```html
<a href="#" class="link-primary">Primary</a>
<a href="#" class="link-danger">Danger</a>
<a href="#" class="link-warning">Warning</a>
```

### Focus Ring

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Fokus saya
</a>
```

### Stretched Link

```html
<div class="card position-relative">
  <div class="card-body">
    <h5 class="card-title">Judul</h5>
    <p class="card-text">Deskripsi</p>
    <a href="#" class="btn btn-primary stretched-link">Klik</a>
  </div>
</div>
```

### Text Truncation

```html
<div class="text-truncate" style="max-width: 200px;">
  Teks panjang yang akan dipotong jadi satu baris dengan ellipsis.
</div>
```

### Visually Hidden

```html
<h2 class="visually-hidden">Hanya untuk screen reader</h2>
<a class="visually-hidden-focusable" href="#content">Skip ke konten</a>
```

### Icon Link

```html
<a href="#" class="icon-link">
  <svg class="bi" aria-hidden="true"><use xlink:href="#heart"></use></svg>
  Like
</a>
```

---

## 9. 📱 Responsive & Breakpoint

### Breakpoint

| Infix | Device | Lebar |
|-------|--------|-------|
| (none) | Extra small | < 576px |
| `sm` | Small | ≥ 576px |
| `md` | Medium | ≥ 768px |
| `lg` | Large | ≥ 992px |
| `xl` | Extra large | ≥ 1200px |
| `xxl` | XXL | ≥ 1400px |

### Mobile-First

```html
<!-- Tampil penuh di mobile, 2 kolom di md, 3 kolom di lg -->
<div class="col-12 col-md-6 col-lg-4">...</div>

<!-- Padding 2 di mobile, 4 di md, 5 di lg -->
<div class="p-2 p-md-4 p-lg-5">...</div>

<!-- Text center di mobile, kiri di md+ -->
<p class="text-center text-md-start">...</p>

<!-- Flex column di mobile, row di md+ -->
<div class="d-flex flex-column flex-md-row">...</div>

<!-- Hidden di mobile, block di lg+ -->
<div class="d-none d-lg-block">...</div>
```

### Contoh Kombinasi Responsive

```html
<div class="container">
  <div class="row g-3">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      Kartu responsive
    </div>
  </div>
</div>
```

---

## 10. 🌙 Dark Mode & Theming

### Enable Dark Mode

```html
<html lang="id" data-bs-theme="dark">
```

### Per Section

```html
<div data-bs-theme="dark">
  <p>Area ini bertema gelap.</p>
</div>

<div data-bs-theme="light">
  <p>Area ini bertema terang.</p>
</div>
```

### Toggle Dark Mode via JS

```html
<button class="btn btn-outline-secondary" id="themeToggle">🌙</button>

<script>
  const html = document.documentElement
  const btn = document.getElementById('themeToggle')
  const saved = localStorage.getItem('theme') || 'light'
  html.setAttribute('data-bs-theme', saved)

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-bs-theme', next)
    localStorage.setItem('theme', next)
    btn.textContent = next === 'dark' ? '☀️' : '🌙'
  })
</script>
```

### CSS Variables Populer

```css
:root {
  --bs-primary: #0d6efd;
  --bs-primary-rgb: 13, 110, 253;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  --bs-border-color: #dee2e6;
  --bs-font-sans-serif: system-ui, -apple-system, sans-serif;
  --bs-border-radius: 0.375rem;
  --bs-body-font-size: 1rem;
}
```

Override via CSS biasa:

```css
:root {
  --bs-primary: #ff6b00;
  --bs-primary-rgb: 255, 107, 0;
}
```

---

## 11. ⚡ JavaScript API

### Inisialisasi Komponen

```javascript
// Cara 1: via selector
const modal = new bootstrap.Modal(document.getElementById('myModal'))

// Cara 2: getOrCreateInstance (aman kalau sudah ada)
const modal = bootstrap.Modal.getOrCreateInstance('#myModal')

// Cara 3: getInstance (hanya ambil yang sudah ada)
const modal = bootstrap.Modal.getInstance('#myModal')
```

### Method Umum

```javascript
// Modal, Offcanvas, Toast, Tooltip, Popover
instance.show()
instance.hide()
instance.toggle()
instance.dispose()

// Tooltip / Popover
instance.enable()
instance.disable()
instance.toggleEnabled()
instance.setContent({ '.tooltip-inner': 'Baru' })

// Collapse
instance.show()
instance.hide()
instance.toggle()
```

### Event Listener

```javascript
const el = document.getElementById('myModal')

el.addEventListener('show.bs.modal', () => console.log('Akan tampil'))
el.addEventListener('shown.bs.modal', () => console.log('Sudah tampil'))
el.addEventListener('hide.bs.modal', () => console.log('Akan hilang'))
el.addEventListener('hidden.bs.modal', () => console.log('Sudah hilang'))
```

### Daftar Event

| Komponen | Event |
|----------|-------|
| Modal | `show.bs.modal`, `shown.bs.modal`, `hide.bs.modal`, `hidden.bs.modal` |
| Collapse | `show.bs.collapse`, `shown.bs.collapse`, `hide.bs.collapse`, `hidden.bs.collapse` |
| Dropdown | `show.bs.dropdown`, `shown.bs.dropdown`, `hide.bs.dropdown`, `hidden.bs.dropdown` |
| Tab | `show.bs.tab`, `shown.bs.tab`, `hide.bs.tab`, `hidden.bs.tab` |
| Toast | `show.bs.toast`, `shown.bs.toast`, `hide.bs.toast`, `hidden.bs.toast` |
| Carousel | `slide.bs.carousel`, `slid.bs.carousel` |

---

## 12. 🎨 Bootstrap Icons

### Setup

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
```

### Penggunaan

```html
<i class="bi bi-heart"></i>
<i class="bi bi-heart-fill"></i>
<i class="bi bi-search"></i>
<i class="bi bi-cart"></i>
<i class="bi bi-person-circle"></i>
<i class="bi bi-facebook"></i>
<i class="bi bi-github"></i>
```

### Ukuran

```html
<i class="bi bi-heart fs-1"></i>
<i class="bi bi-heart fs-2"></i>
<i class="bi bi-heart fs-3"></i>
<i class="bi bi-heart fs-4"></i>
<i class="bi bi-heart fs-5"></i>
<i class="bi bi-heart fs-6"></i>
```

### Warna

```html
<i class="bi bi-heart text-danger"></i>
<i class="bi bi-star text-warning"></i>
<i class="bi bi-check-circle text-success"></i>
```

### Dengan Button

```html
<button class="btn btn-primary">
  <i class="bi bi-plus-lg"></i> Tambah
</button>

<button class="btn btn-outline-danger btn-sm">
  <i class="bi bi-trash"></i>
</button>
```

### Dengan Tooltip

```html
<i class="bi bi-info-circle" data-bs-toggle="tooltip" title="Info"></i>
```

Cari icon lengkap di [icons.getbootstrap.com](https://icons.getbootstrap.com).

---

## 13. ♿ Accessibility (A11y)

### ARIA Dasar

```html
<!-- Label untuk tombol ikon -->
<button aria-label="Tutup">
  <i class="bi bi-x"></i>
</button>

<!-- Deskripsi untuk input -->
<input id="email" aria-describedby="emailHelp">
<div id="emailHelp">Masukkan email aktif.</div>

<!-- Label untuk section -->
<section aria-labelledby="sectionTitle">
  <h2 id="sectionTitle">Judul Section</h2>
</section>
```

### Role

```html
<nav role="navigation">...</nav>
<main role="main">...</main>
<form role="search">...</form>
<div role="alert">Notifikasi penting</div>
<div role="status">Loading...</div>
```

### Visually Hidden

```html
<!-- Disembunyikan tapi tetap dibaca screen reader -->
<span class="visually-hidden">Loading...</span>

<!-- Skip link -->
<a href="#mainContent" class="visually-hidden-focusable">Langsung ke konten</a>
```

### Focus Management

```html
<!-- Class focus ring -->
<a href="#" class="focus-ring">Fokus saya</a>

<!-- Order tab -->
<input tabindex="1">
<input tabindex="2">
<button tabindex="-1">Tidak bisa di-tab</button>
```

### Keyboard Support Bawaan

Bootstrap komponen sudah support keyboard:
- **Esc** — tutup Modal, Dropdown, Offcanvas
- **Tab** — navigasi antar focusable
- **Arrow keys** — navigasi Tab, Carousel
- **Enter / Space** — aktifkan tombol

---

## 14. 📦 CDN & Setup

### CDN Cepat

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS Bundle (Popper + Bootstrap) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- CSS terpisah tanpa JS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Popper & JS terpisah -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
```

### NPM

```bash
npm install bootstrap@5.3.3

# atau
yarn add bootstrap@5.3.3
```

```javascript
// Import via JS
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

// Atau komponen spesifik
import { Modal, Tooltip } from 'bootstrap'
```

### Vite / Webpack

```javascript
// main.js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

### Custom Build dengan Sass

```scss
// Override variabel dulu
$primary: #ff6b00;
$border-radius: 1rem;
$font-family-sans-serif: 'Inter', sans-serif;

// Baru import Bootstrap
@import 'bootstrap/scss/bootstrap';
```

### Override via CSS Variable (Tanpa Sass)

```html
<style>
  :root {
    --bs-primary: #ff6b00;
    --bs-primary-rgb: 255, 107, 0;
    --bs-border-radius: 1rem;
  }
</style>
```

---

## 15. 🧩 Layout Pattern / Resep

### 1. Hero Section

```html
<section class="vh-100 d-flex align-items-center bg-primary bg-gradient text-white">
  <div class="container text-center">
    <h1 class="display-3 fw-bold mb-3">Selamat Datang</h1>
    <p class="lead mb-4">Subjudul keren untuk hero section.</p>
    <div class="d-flex gap-2 justify-content-center">
      <button class="btn btn-light btn-lg">Mulai</button>
      <button class="btn btn-outline-light btn-lg">Pelajari</button>
    </div>
  </div>
</section>
```

### 2. Pricing Table

```html
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">Harga</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 text-center">
          <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <p class="display-4">Rp 99rb</p>
            <ul class="list-unstyled">
              <li>✓ 1 User</li>
              <li>✓ 5 GB Storage</li>
            </ul>
            <button class="btn btn-outline-primary w-100">Pilih</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 text-center border-primary">
          <div class="card-body">
            <span class="badge bg-primary mb-2">Populer</span>
            <h5 class="card-title">Pro</h5>
            <p class="display-4">Rp 299rb</p>
            <button class="btn btn-primary w-100">Pilih</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Dashboard Layout

```html
<div class="d-flex" style="min-height: 100vh;">
  <!-- Sidebar -->
  <aside class="bg-dark text-white p-3" style="width: 250px;">
    <h4>Admin</h4>
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link text-white" href="#">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">User</a></li>
    </ul>
  </aside>

  <!-- Main -->
  <div class="flex-grow-1">
    <nav class="navbar bg-body-tertiary px-3">
      <span class="navbar-brand">Dashboard</span>
    </nav>
    <main class="p-4">
      <h2>Konten Utama</h2>
    </main>
  </div>
</div>
```

### 4. Login Page

```html
<div class="vh-100 d-flex align-items-center justify-content-center bg-body-tertiary">
  <div class="card shadow" style="width: 24rem;">
    <div class="card-body p-4">
      <h3 class="text-center mb-4">Login</h3>
      <form>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control">
        </div>
        <button class="btn btn-primary w-100">Masuk</button>
      </form>
    </div>
  </div>
</div>
```

### 5. Product Card Grid

```html
<section class="py-5">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col">
        <div class="card h-100">
          <img src="produk.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Produk</h5>
            <p class="card-text">Deskripsi produk.</p>
            <button class="btn btn-primary mt-auto">Beli</button>
          </div>
        </div>
      </div>
      <!-- ulangi col di atas -->
    </div>
  </div>
</section>
```

### 6. Blog List

```html
<div class="container py-5">
  <h2 class="mb-4">Artikel Terbaru</h2>
  <div class="row g-4">
    <div class="col-md-6">
      <article class="card h-100">
        <img src="blog.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <span class="badge bg-primary mb-2">Teknologi</span>
          <h5 class="card-title">Judul Artikel</h5>
          <p class="card-text">Ringkasan artikel...</p>
          <a href="#" class="btn btn-link p-0">Baca selengkapnya →</a>
        </div>
        <div class="card-footer text-muted small">5 menit baca · 12 Sep 2026</div>
      </article>
    </div>
  </div>
</div>
```

### 7. Profile Page

```html
<div class="container py-5">
  <div class="row">
    <div class="col-md-3 text-center">
      <img src="avatar.jpg" class="rounded-circle mb-3" width="150" height="150" alt="...">
      <h4>Nama User</h4>
      <p class="text-muted">@username</p>
      <button class="btn btn-primary w-100 mb-2">Follow</button>
    </div>
    <div class="col-md-9">
      <ul class="nav nav-tabs mb-4">
        <li class="nav-item"><a class="nav-link active" href="#">Postingan</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Tentang</a></li>
      </ul>
      <p>Konten profil di sini...</p>
    </div>
  </div>
</div>
```

### 8. Sticky Footer

```html
<div class="d-flex flex-column vh-100">
  <nav class="navbar bg-dark text-white p-3">Header</nav>
  <main class="flex-grow-1 p-4">Konten</main>
  <footer class="bg-dark text-white text-center p-3">© 2026 Footer</footer>
</div>
```

### 9. FAQ Accordion

```html
<section class="py-5">
  <div class="container" style="max-width: 800px;">
    <h2 class="text-center mb-4">FAQ</h2>
    <div class="accordion" id="faq">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
            Pertanyaan 1?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faq">
          <div class="accordion-body">Jawaban...</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 10. Contact Form + Map

```html
<section class="py-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-6">
        <h3>Hubungi Kami</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">Nama</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Pesan</label>
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <button class="btn btn-primary">Kirim</button>
        </form>
      </div>
      <div class="col-md-6">
        <div class="ratio ratio-4x3">
          <iframe src="https://maps.google.com/..." allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 📋 Referensi Cepat

| Kebutuhan | Solusi |
|-----------|--------|
| Form validasi | `is-valid`, `is-invalid`, `valid-feedback`, `invalid-feedback` |
| Dark mode | `<html data-bs-theme="dark">` |
| Toggle theme | JS + `localStorage` |
| Icon | `<i class="bi bi-heart"></i>` |
| Responsive grid | `col-12 col-md-6 col-lg-4` |
| Sidebar dashboard | `d-flex` + `vh-100` |
| Hero fullscreen | `vh-100 d-flex align-items-center` |
| Sticky footer | `d-flex flex-column vh-100` + `flex-grow-1` |
| Center sempurna | `d-flex justify-content-center align-items-center` |
| Skip link (a11y) | `visually-hidden-focusable` |

---

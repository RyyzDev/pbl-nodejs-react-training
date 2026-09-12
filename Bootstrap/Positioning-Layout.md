# 📐 Bootstrap 5 Positioning & Layout

> Referensi lengkap untuk mengatur **posisi**, **display**, **flexbox**, **text alignment**, dan **spacing** elemen di Bootstrap 5.

---

## 📑 Daftar Isi

- [Display](#-display)
- [Position](#-position)
- [Flexbox](#-flexbox)
- [Text Alignment](#-text-alignment)
- [Vertical Align](#-vertical-align)
- [Float](#-float)
- [Spacing](#-spacing)
- [Sizing (Width & Height)](#-sizing-width--height)
- [Overflow](#-overflow)
- [Visibility](#-visibility)
- [Z-Index](#-z-index)
- [Contoh Kombinasi](#-contoh-kombinasi)

---

## 🖥️ Display

Mengatur bagaimana elemen ditampilkan di halaman.

### Nilai Display

```html
<div class="d-none">Tidak tampil sama sekali</div>
<div class="d-block">Display block</div>
<div class="d-inline">Display inline</div>
<div class="d-inline-block">Display inline-block</div>
<div class="d-flex">Display flex</div>
<div class="d-inline-flex">Display inline-flex</div>
<div class="d-grid">Display grid</div>
<div class="d-table">Display table</div>
<div class="d-table-cell">Display table-cell</div>
```

### Display Responsive

Kombinasikan dengan breakpoint: `sm`, `md`, `lg`, `xl`, `xxl`.

```html
<!-- Sembunyikan di mobile, tampil di md ke atas -->
<div class="d-none d-md-block">Hanya tampil di md+</div>

<!-- Tampil di mobile, sembunyi di lg ke atas -->
<div class="d-block d-lg-none">Hanya tampil di bawah lg</div>

<!-- Flex di md, block di lg -->
<div class="d-flex d-lg-block">Flex di md, block di lg</div>
```

### Print Display

```html
<div class="d-print-none">Tidak tampil saat diprint</div>
<div class="d-none d-print-block">Hanya tampil saat diprint</div>
```

### Tabel Referensi Cepat

| Class | Efek |
|-------|------|
| `d-none` | Hilang total |
| `d-block` | Full width, baris baru |
| `d-inline` | Sebaris, tidak bisa width/height |
| `d-inline-block` | Sebaris, bisa width/height |
| `d-flex` | Flexbox container |
| `d-inline-flex` | Flexbox sebaris |
| `d-grid` | Grid container |

---

## 📍 Position

Mengatur posisi elemen di dalam dokumen atau parent-nya.

### Nilai Position

```html
<div class="position-static">Default (mengikuti alur dokumen)</div>
<div class="position-relative">Relative terhadap posisi normalnya</div>
<div class="position-absolute">Absolute terhadap parent terdekat yang positioned</div>
<div class="position-fixed">Fixed terhadap viewport (tidak ikut scroll)</div>
<div class="position-sticky">Sticky saat scroll melewati batas tertentu</div>
```

### Edge Positioning (Top / Bottom / Start / End)

Gunakan bersama `position-absolute`, `position-fixed`, atau `position-sticky`.

```html
<!-- Pojok kanan atas -->
<div class="position-relative">
  <span class="position-absolute top-0 start-0">Kiri atas</span>
  <span class="position-absolute top-0 end-0">Kanan atas</span>
  <span class="position-absolute top-50 start-50 translate-middle">Tengah</span>
  <span class="position-absolute bottom-0 start-0">Kiri bawah</span>
  <span class="position-absolute bottom-0 end-0">Kanan bawah</span>
</div>
```

### Nilai Edge

| Class | Efek |
|-------|------|
| `top-0` / `bottom-0` | Menempel atas / bawah |
| `start-0` / `end-0` | Menempel kiri / kanan |
| `top-50` / `start-50` | 50% dari atas / kiri |
| `top-100` / `start-100` | 100% dari atas / kiri |

### Translasi (untuk Centering Sempurna)

```html
<!-- Center sempurna -->
<div class="position-absolute top-50 start-50 translate-middle">
  Saya di tengah
</div>

<!-- Center horizontal saja -->
<div class="position-absolute start-50 translate-middle-x">Horizontal center</div>

<!-- Center vertical saja -->
<div class="position-absolute top-50 translate-middle-y">Vertical center</div>
```

### Fixed Positioning

```html
<!-- Navbar fixed di atas -->
<nav class="position-fixed top-0 start-0 w-100">Navbar</nav>

<!-- Tombol floating kanan bawah (seperti chat button) -->
<button class="position-fixed bottom-0 end-0 m-3">Chat</button>
```

### Sticky Positioning

```html
<div class="position-sticky top-0">Header yang sticky</div>
```

> ⚠️ **Catatan:** Sticky tidak akan bekerja jika parent atau ancestor memiliki `overflow: hidden`, `overflow: auto`, atau `overflow: scroll`.

---

## 🧩 Flexbox

Mengatur layout menggunakan flexbox.

### Container Flex

```html
<div class="d-flex">Flex container</div>
<div class="d-inline-flex">Inline flex container</div>
```

### Arah (flex-direction)

```html
<div class="d-flex flex-row">Baris (default)</div>
<div class="d-flex flex-row-reverse">Baris terbalik</div>
<div class="d-flex flex-column">Kolom</div>
<div class="d-flex flex-column-reverse">Kolom terbalik</div>
```

### Justify Content (Horizontal)

```html
<div class="d-flex justify-content-start">Kiri</div>
<div class="d-flex justify-content-end">Kanan</div>
<div class="d-flex justify-content-center">Tengah</div>
<div class="d-flex justify-content-between">Sebar (ujung ke ujung)</div>
<div class="d-flex justify-content-around">Sebar (jarak sama)</div>
<div class="d-flex justify-content-evenly">Sebar (rata sempurna)</div>
```

### Align Items (Vertical)

```html
<div class="d-flex align-items-start">Atas</div>
<div class="d-flex align-items-end">Bawah</div>
<div class="d-flex align-items-center">Tengah</div>
<div class="d-flex align-items-baseline">Baseline</div>
<div class="d-flex align-items-stretch">Stretch (default)</div>
```

### Align Self (Per Item)

```html
<div class="d-flex">
  <div class="align-self-start">Atas</div>
  <div class="align-self-center">Tengah</div>
  <div class="align-self-end">Bawah</div>
</div>
```

### Flex Wrap

```html
<div class="d-flex flex-wrap">Bungkus ke baris baru</div>
<div class="d-flex flex-nowrap">Tidak bungkus</div>
<div class="d-flex flex-wrap-reverse">Bungkus terbalik</div>
```

### Align Content (Multi-line)

```html
<div class="d-flex flex-wrap align-content-start">...</div>
<div class="d-flex flex-wrap align-content-center">...</div>
<div class="d-flex flex-wrap align-content-end">...</div>
<div class="d-flex flex-wrap align-content-between">...</div>
<div class="d-flex flex-wrap align-content-around">...</div>
<div class="d-flex flex-wrap align-content-stretch">...</div>
```

### Fill, Grow, Shrink

```html
<div class="d-flex">
  <div class="flex-fill">Isi sisa ruang</div>
  <div class="flex-grow-1">Grow</div>
  <div class="flex-shrink-1">Shrink</div>
  <div class="flex-shrink-0">Tidak menyusut</div>
</div>
```

### Order

```html
<div class="d-flex">
  <div class="order-3">Pertama (order 3)</div>
  <div class="order-1">Kedua (order 1)</div>
  <div class="order-2">Ketiga (order 2)</div>
</div>
```

Nilai: `order-0` s/d `order-5`, plus `order-first` (=-1) dan `order-last` (=6).

### Responsive Flex

```html
<div class="d-flex flex-column flex-md-row">
  <!-- Kolom di mobile, baris di md ke atas -->
</div>

<div class="d-flex justify-content-center justify-content-md-between">
  <!-- Center di mobile, between di md ke atas -->
</div>

<div class="d-flex align-items-start align-items-md-center">
  <!-- Start di mobile, center di md ke atas -->
</div>
```

### Gap (Jarak antar Item Flex)

```html
<div class="d-flex gap-3">Gap 1rem</div>
<div class="d-flex gap-0">Tanpa gap</div>
<div class="d-flex gap-5">Gap besar</div>

<!-- Gap berbeda per arah -->
<div class="d-flex column-gap-3 row-gap-2">...</div>
```

Nilai gap: `0`, `1`, `2`, `3`, `4`, `5`.

### Stacks (VStack & HStack)

Shortcut Bootstrap untuk layout flex vertikal/horizontal dengan gap otomatis.

```html
<!-- Vertikal -->
<div class="vstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal -->
<div class="hstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## 📝 Text Alignment

### Horizontal Alignment

```html
<p class="text-start">Rata kiri</p>
<p class="text-center">Rata tengah</p>
<p class="text-end">Rata kanan</p>
```

### Responsive Text Alignment

```html
<p class="text-start text-md-center text-lg-end">
  Kiri di mobile, tengah di md, kanan di lg
</p>
```

### Text Wrapping & Overflow

```html
<p class="text-wrap">Teks akan wrap ke baris baru</p>
<p class="text-nowrap">Teks tidak wrap (bisa overflow)</p>
<p class="text-break">Pecah kata panjang (word-break)</p>
<p class="text-truncate">Potong dengan ellipsis (...) jika overflow</p>
```

`text-truncate` membutuhkan `display: block` atau `inline-block`, biasanya dikombinasikan dengan `d-block`.

### Text Transform

```html
<p class="text-lowercase">huruf kecil semua</p>
<p class="text-uppercase">HURUF BESAR SEMUA</p>
<p class="text-capitalize">Setiap Kata Berawalan Kapital</p>
```

---

## ⬆️ Vertical Align

Untuk inline, inline-block, table-cell, dan elemen dalam tabel.

```html
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
```

> ⚠️ Untuk vertical centering pada flexbox, gunakan `align-items-center` (bukan `align-middle`).

---

## 🎈 Float

Mengapungkan elemen ke kiri atau kanan.

```html
<div class="float-start">Float ke kiri</div>
<div class="float-end">Float ke kanan</div>
<div class="float-none">Tanpa float</div>
```

### Responsive Float

```html
<div class="float-start float-md-end">
  Float kiri di mobile, kanan di md ke atas
</div>
```

### Clearfix

Untuk membungkus elemen yang berisi float.

```html
<div class="clearfix">
  <div class="float-start">Kiri</div>
  <div class="float-end">Kanan</div>
</div>
```

---

## 📏 Spacing

Format: `{property}{sisi}-{breakpoint}-{size}`

- **Property:** `m` (margin), `p` (padding)
- **Sisi:** `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (horizontal), `y` (vertical), kosong (semua)
- **Breakpoint:** (kosong), `sm`, `md`, `lg`, `xl`, `xxl`
- **Size:** `0`, `1`, `2`, `3`, `4`, `5`, `auto`

### Margin

```html
<div class="m-3">Margin semua 1rem</div>
<div class="mt-4">Margin top</div>
<div class="mb-2">Margin bottom</div>
<div class="ms-3">Margin start (kiri)</div>
<div class="me-3">Margin end (kanan)</div>
<div class="mx-auto">Margin auto kiri-kanan (center horizontal)</div>
<div class="my-5">Margin top & bottom</div>
```

### Padding

```html
<div class="p-3">Padding semua</div>
<div class="pt-4">Padding top</div>
<div class="pb-2">Padding bottom</div>
<div class="ps-3">Padding start (kiri)</div>
<div class="pe-3">Padding end (kanan)</div>
<div class="px-5">Padding horizontal</div>
<div class="py-2">Padding vertical</div>
```

### Auto Margin untuk Centering

```html
<!-- Center horizontal block -->
<div class="mx-auto" style="width: 200px;">Kotak di tengah</div>

<!-- Push ke kanan dalam flex -->
<div class="d-flex">
  <div>Kiri</div>
  <div class="ms-auto">Kanan</div>
</div>
```

### Skala Size

| Size | Nilai |
|------|-------|
| `0` | 0 |
| `1` | 0.25rem |
| `2` | 0.5rem |
| `3` | 1rem |
| `4` | 1.5rem |
| `5` | 3rem |
| `auto` | auto |

---

## 📐 Sizing (Width & Height)

### Width

```html
<div class="w-25">25%</div>
<div class="w-50">50%</div>
<div class="w-75">75%</div>
<div class="w-100">100%</div>
<div class="w-auto">Auto</div>
```

### Height

```html
<div class="h-25">25%</div>
<div class="h-50">50%</div>
<div class="h-75">75%</div>
<div class="h-100">100%</div>
<div class="h-auto">Auto</div>
```

### Viewport Size

```html
<div class="mw-100">Max width 100%</div>
<div class="mh-100">Max height 100%</div>
<div class="min-vw-100">Min width 100vw</div>
<div class="min-vh-100">Min height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```

### Full Screen Section

```html
<section class="vh-100 d-flex align-items-center justify-content-center">
  <h1>Konten di tengah layar</h1>
</section>
```

---

## 🌊 Overflow

```html
<div class="overflow-auto">Scroll otomatis jika perlu</div>
<div class="overflow-hidden">Sembunyikan overflow</div>
<div class="overflow-visible">Overflow terlihat</div>
<div class="overflow-scroll">Selalu scroll</div>
```

### Per Sumbu

```html
<div class="overflow-x-auto">Scroll horizontal saja</div>
<div class="overflow-y-auto">Scroll vertical saja</div>
```

---

## 👁️ Visibility

```html
<div class="visible">Terlihat</div>
<div class="invisible">Tidak terlihat (tetap ada di layout)</div>
```

Perbedaan dengan `d-none`:
- `invisible` → elemen tetap memakan ruang, hanya tidak terlihat
- `d-none` → elemen dihilangkan dari layout

---

## 🗂️ Z-Index

```html
<div class="z-0">z-index: 0</div>
<div class="z-1">z-index: 1</div>
<div class="z-2">z-index: 2</div>
<div class="z-3">z-index: 3</div>
<div class="z-n1">z-index: -1</div>
```

Sering dipakai bersama `position-absolute` atau `position-relative`.

---

## 🎯 Contoh Kombinasi

### 1. Overlay Text di Atas Gambar (Center)

```html
<div class="position-relative">
  <img src="gambar.jpg" class="w-100" alt="...">
  <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
    <h2>Judul Overlay</h2>
    <p>Deskripsi singkat</p>
  </div>
</div>
```

### 2. Card dengan Badge di Pojok

```html
<div class="position-relative d-inline-block">
  <img src="produk.jpg" class="rounded" alt="...">
  <span class="position-absolute top-0 end-0 badge bg-danger m-2">NEW</span>
</div>
```

### 3. Navbar Fixed dengan Konten Center

```html
<nav class="position-fixed top-0 start-0 w-100 d-flex justify-content-between align-items-center p-3 bg-dark text-white">
  <span>Logo</span>
  <span>Menu</span>
</nav>
```

### 4. Section Full Screen Center

```html
<section class="vh-100 d-flex justify-content-center align-items-center bg-light">
  <div class="text-center">
    <h1>Hero Title</h1>
    <p>Subtitle</p>
    <button class="btn btn-primary">CTA</button>
  </div>
</section>
```

### 5. Tombol Floating Kanan Bawah

```html
<button class="position-fixed bottom-0 end-0 m-4 btn btn-primary rounded-circle">
  +
</button>
```

### 6. Sidebar Sticky

```html
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <div class="position-sticky top-0">Sidebar sticky</div>
    </div>
    <div class="col-md-9">Konten utama yang panjang...</div>
  </div>
</div>
```

### 7. Layout Card dengan Footer Rata Bawah

```html
<div class="card d-flex flex-column h-100">
  <div class="card-body">Isi kartu</div>
  <div class="card-footer mt-auto">Footer di bawah</div>
</div>
```

### 8. Grid Kartu Responsive

```html
<div class="d-flex flex-wrap gap-3 justify-content-center">
  <div class="card" style="width: 18rem;">...</div>
  <div class="card" style="width: 18rem;">...</div>
  <div class="card" style="width: 18rem;">...</div>
</div>
```

### 9. Toolbar Horizontal dengan Spacer

```html
<div class="d-flex justify-content-between align-items-center p-3 border rounded">
  <div class="d-flex gap-2">
    <button class="btn btn-sm btn-primary">Baru</button>
    <button class="btn btn-sm btn-secondary">Edit</button>
  </div>
  <div class="text-muted">3 item terpilih</div>
</div>
```

### 10. Center Vertical dengan Flex Column

```html
<div class="d-flex flex-column justify-content-center align-items-center vh-100">
  <h1>Judul</h1>
  <p>Deskripsi</p>
</div>
```

---

## 📋 Referensi Cepat

| Kebutuhan | Class |
|-----------|-------|
| Sembunyikan elemen | `d-none` |
| Tampilkan sebagai block | `d-block` |
| Flexbox | `d-flex` |
| Center horizontal (flex) | `justify-content-center` |
| Center vertical (flex) | `align-items-center` |
| Center horizontal (block) | `mx-auto` |
| Center sempurna (absolute) | `position-absolute top-50 start-50 translate-middle` |
| Fixed di atas | `position-fixed top-0 start-0 w-100` |
| Fixed di kanan bawah | `position-fixed bottom-0 end-0` |
| Sticky saat scroll | `position-sticky top-0` |
| Teks tengah | `text-center` |
| Teks kanan | `text-end` |
| Full screen section | `vh-100` |
| Gap antar item | `gap-3` |
| Push elemen ke kanan (flex) | `ms-auto` |
| Z-index tinggi | `z-3` |

---

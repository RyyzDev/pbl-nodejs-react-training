# Tugas React + Express + Prisma

Aplikasi CRUD kategori dan film. Frontend pakai React (Vite), backend pakai Express, database diakses lewat Prisma ORM ke MariaDB/MySQL.

## Struktur proyek

```
.
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/          # schema.prisma & migration ada di sini
│   ├── routes/
│   └── index.js          # entry point backend (Express)
├── public/                # static assets
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── index.html              # entry point frontend
├── vite.config.js
├── package.json
```

## Prasyarat

- Node.js 22+
- MariaDB / MySQL server aktif dan sudah bisa diakses

## Langkah menjalankan proyek

### 1. Install dependencies

```bash
npm install
```

### 2. Migrasi database dengan Prisma

```bash
npx prisma migrate dev --schema=backend/prisma/schema.prisma
```

```bash
npx prisma generate --schema=backend/prisma/schema.prisma
```

### 4. Jalankan frontend

```bash
npm run dev
```

Frontend jalan di `http://localhost:5173`.

### 5. Jalankan backend

Di terminal terpisah:

```bash
node backend/index.js
```

Backend jalan di `http://localhost:8000`.

## Endpoint API

| Method | Endpoint              | Keterangan          |
| ------ | ---------------------- | -------------------- |
| GET    | `/api/categories`      | Ambil semua kategori |
| GET    | `/api/categories/:id`  | Ambil satu kategori  |
| POST   | `/api/categories`      | Tambah kategori      |
| PUT    | `/api/categories/:id`  | Edit kategori        |
| DELETE | `/api/categories/:id`  | Hapus kategori       |
| GET    | `/api/movies`          | Ambil semua film     |
| GET    | `/api/movies/:id`      | Ambil satu film      |
| POST   | `/api/movies`          | Tambah film           |
| PUT    | `/api/movies/:id`      | Edit film             |
| DELETE | `/api/movies/:id`      | Hapus film            |
-- MEMBUAT DATABASE --
CREATE DATABASE IF NOT EXISTS belajar_db;

-- MENGGUNAKAN/MASUK DATABASE
USE belajar_db;

-- MEMBUAT TABLE DI DATABASE
 CREATE TABLE IF NOT EXISTS kategori 
 (
	id_kategori INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL UNIQUE
 );
 
 CREATE TABLE IF NOT EXISTS produk
 (
	id_produk INT AUTO_INCREMENT PRIMARY KEY,
    id_kategori INT NOT NULL,
    nama_produk VARCHAR(100) NOT NULL,
    harga_jual DECIMAL(12,2) NOT NULL,
	status_produk ENUM('AKTIF', 'NONAKTIF') DEFAULT 'AKTIF',
    
    FOREIGN KEY (id_kategori) REFERENCES kategori(id_kategori) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS stok
(
	id_stok INT AUTO_INCREMENT PRIMARY KEY,
    id_produk INT NOT NULL,
    stok_masuk INT NOT NULL,
    stok_keluar INT NOT NULL,
    stok_tersedia INT NOT NULL,
    
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS kasir
(
	id_kasir INT AUTO_INCREMENT PRIMARY KEY,
    nama_kasir VARCHAR(100) NOT NULL,
    no_hp VARCHAR(100) NOT NULL,
    alamat TEXT(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS penjualan_header
(
	id_penjualan INT AUTO_INCREMENT PRIMARY KEY,
    tanggal_penjualan DATE NOT NULL,
    id_kasir INT NOT NULL,
    total_transaksi DECIMAL(12,2) NOT NULL,
    
    FOREIGN KEY (id_kasir) REFERENCES kasir(id_kasir) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS penjualan_detail
(
	id_detail INT AUTO_INCREMENT PRIMARY KEY,
    id_penjualan INT NOT NULL,
    id_produk INT NOT NULL,
    jumlah DECIMAL(12,2) NOT NULL,
    harga DECIMAL(12,2) NOT NULL,
    subtotal DECIMAL(12,2) NOT NULL,
    
    FOREIGN KEY (id_penjualan) REFERENCES penjualan_header(id_penjualan) ON DELETE CASCADE,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk) ON DELETE CASCADE
);


DESC penjualan_detail;


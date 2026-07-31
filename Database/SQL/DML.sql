-- INSERT SINGLE DATA
INSERT INTO kategori (nama_kategori) VALUES ('makanan');
INSERT INTO kategori (nama_kategori) VALUES ('minuman');
INSERT INTO kasir (nama_kasir, no_hp, alamat) VALUES ('Kocak gaming', '086138724', 'jalan kocak gaming');

-- INSERT MULTIPLE DATA
INSERT INTO stok (id_produk, stok_masuk, stok_keluar, stok_tersedia)
VALUES
(1, 200, 10, 190),
(1, 350, 10, 340),
(1, 80, 10, 70),
(1, 285, 10, 275),
(1, 600, 100, 500);

INSERT INTO kasir(nama_kasir, no_hp, alamat) VALUES
('Andi','081234567890','Bandung'),
('Budi','081234567891','Jakarta'),
('Citra','081234567892','Bekasi'),
('Dina','081234567893','Bogor'),
('Eka','081234567894','Depok'),
('Fajar','081234567895','Bandung'),
('Gina','081234567896','Garut'),
('Hendra','081234567897','Tasikmalaya'),
('Indah','081234567898','Cirebon'),
('Joko','081234567899','Sukabumi');

INSERT INTO stok(id_produk, stok_masuk, stok_keluar, stok_tersedia) VALUES
(1,100,20,80),
(2,150,40,110),
(3,200,30,170),
(4,70,10,60),
(2,120,50,70),
(3,90,20,70),
(4,80,25,55),
(2,100,30,70),
(1,130,60,70),
(1,150,20,130);

INSERT INTO penjualan_header(id_kasir, total_transaksi, tanggal_penjualan) VALUES
(1, 85000, '23-01-14'),
(2, 120000, '23-01-14'),
(3, 76000, '23-01-14'),
(4, 98000, '23-01-14'),
(5, 150000, '23-01-14'),
(6, 50000, '23-01-14'),
(7, 180000, '23-01-14'),
(8, 97000, '23-01-14'),
(9, 45000, '23-01-14'),
(10, 210000, '23-01-14');

INSERT INTO penjualan_detail(id_penjualan, id_produk, jumlah, harga, subtotal) VALUES
(1,1,1,78000,78000),
(2,2,5,7000,35000),
(3,3,4,5000,20000),
(4,4,2,35000,70000),
(5,1,10,6000,60000),
(6,2,3,12000,36000),
(7,3,2,15000,30000),
(8,4,1,45000,45000),
(9,2,6,5000,30000),
(10,3,4,25000,100000);


-- GET ALL DATA FROM TABLE
SELECT * FROM produk;
SELECT * FROM kategori;
SELECT * FROM kasir;
SELECT * FROM penjualan_header;

-- GET ALL DATA BY ORDER FROM TABLE
SELECT * FROM produk ORDER BY id_produk DESC;
SELECT * FROM produk ORDER BY id_produk ASC;

-- SEARCH DATA FROM TABLE
SELECT * FROM produk WHERE id_produk = 1;
SELECT * FROM produk WHERE harga_jual < 10000;
SELECT * FROM produk WHERE id_produk = 3 OR id_produk = 1;
SELECT * FROM produk WHERE nama_produk = 'Roti bakar';

-- SEARCH DATA FROM SPECIFIC COLUMN
SELECT nama_produk FROM produk;
SELECT nama_kasir, alamat FROM kasir;
SELECT nama_produk FROM produk WHERE harga_jual = 10000;
SELECT nama_produk FROM produk WHERE harga_jual > 10000;
SELECT nama_produk FROM produk WHERE harga_jual < 10000;
SELECT nama_produk FROM produk WHERE harga_jual <= 10000;

SELECT * FROM produk WHERE harga_jual > 1000 AND id_kategori = 2;
SELECT * FROM produk WHERE harga_jual >= 6000 AND harga_jual <= 15000;
SELECT * FROM produk WHERE harga_jual BETWEEN 6000 AND 15000;
SELECT * FROM produk ORDER BY harga_jual ASC;
SELECT * FROM produk WHERE nama_produk LIKE '%yam%';


SELECT * FROM penjualan_header WHERE DATE(tanggal_penjualan)='2023-01-14';


SELECT id_kasir, SUM(total_transaksi) total_penjualan FROM penjualan_header GROUP BY id_kasir;
SELECT * FROM penjualan_header;

-- UPDATE ROW DATA FROM TABLE
UPDATE penjualan_header
SET id_kasir = 1
WHERE id_penjualan = 3;

UPDATE kasir
SET nama_kasir = 'Citra Gema'
WHERE id_kasir = 6;

UPDATE produk
SET status_produk = 'NONAKTIF'
WHERE id_produk = 3 OR id_produk = 1;

SELECT * FROM kasir;

-- DELETE ROW DATA FROM TABLE
DELETE FROM kasir WHERE id_kasir = 13;


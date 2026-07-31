-- INDEXING
CREATE INDEX index_kasir ON kasir(nama_kasir);
SELECT * FROM kasir WHERE nama_kasir = 'kocak gaming';

-- JOIN
SELECT
p.id_produk , p.nama_produk, p.harga_jual, k.nama_kategori, s.stok_tersedia
FROM produk p
INNER JOIN kategori k
ON p.id_kategori = k.id_kategori
INNER JOIN stok s
ON p.id_produk = s.id_produk
WHERE p.harga_jual >= 10000 AND s.stok_tersedia < 100
GROUP BY p.nama_produk;

-- VIEW
CREATE VIEW vw_product_stock_kategori 
AS 
SELECT
p.id_produk , p.nama_produk, p.harga_jual, k.nama_kategori, s.stok_tersedia
FROM produk p
INNER JOIN kategori k
ON p.id_kategori = k.id_kategori
INNER JOIN stok s
ON p.id_produk = s.id_produk
WHERE p.harga_jual >= 10000 AND s.stok_tersedia < 100
GROUP BY p.nama_produk;

SELECT * FROM vw_product_stock_kategori;

CREATE VIEW vw_penjualan_kasir
AS
SELECT
p.id_penjualan, p.tanggal_penjualan, k.nama_kasir, k.alamat, p.total_transaksi
FROM penjualan_header p
INNER JOIN kasir k
ON p.id_kasir = k.id_kasir;

SELECT * FROM vw_penjualan_kasir
GROUP BY
alamat;

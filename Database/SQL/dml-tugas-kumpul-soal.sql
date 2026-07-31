/*============================================================================================
Anda diberikan file SQL yang memuat perintah :
- CREATE DATABASE
- USE DATABASE
- CREATE TABLE
- INSERT INTO 
Tugas Anda :
1. Copy paste isi file SQL tersebut dan Execute di Workbench anda.
2. Berikan jawaban tepat di bawah setiap soal permintaan no. 1 s/d 25 di bawah ini
3. Setelah anda menjawab soal permintaan, simpan semua perintah 1 s/d 25 dalam file SQL
4. Kirim jawaban anda ke https://bit.ly/linkdrivePBLWebBatch3-2026 dengan terlebih dahulu
   membuat folder SQL di nama anda masing-masing

                  S E L A M A T   M E N G E R J A K A N !!!
===============================================================================================*/

-- 1. Tampilkan seluruh data pelanggan.
SELECT
*
FROM
pelanggan;

-- 2. Tampilkan nama pelanggan, kota, dan provinsi pelanggan.
SELECT
nama_pelanggan,
kota,
provinsi
FROM
pelanggan;

-- 3. Tampilkan seluruh data produk yang memiliki stok lebih dari 20 unit.
SELECT
*
FROM
produk
WHERE
stok > 20;

-- 4. Tampilkan nama produk beserta harga produk, urutkan dari harga tertinggi ke harga terendah.
SELECT
nama_produk, harga
FROM 
produk
ORDER BY
harga
DESC;

-- 5. Tampilkan seluruh data sales yang memiliki target penjualan lebih dari Rp70.000.000.
SELECT
*
FROM
sales
WHERE
target_penjualan > 70000000;

-- 6. Tampilkan seluruh transaksi penjualan yang menggunakan metode pembayaran Transfer.
SELECT
* 
FROM
penjualan
WHERE
metode_pembayaran = 'Transfer';

-- 7. Hitung jumlah seluruh pelanggan yang terdaftar.
SELECT 
COUNT(*) AS jumlah_pelanggan_terdaftar
FROM 
pelanggan;

-- 8. Tampilkan seluruh transaksi dengan status Selesai, diurutkan berdasarkan tanggal terbaru.
SELECT
*
FROM
penjualan
WHERE
status_penjualan = 'Selesai'
ORDER BY
tanggal_penjualan
DESC;

-- 9.  Hitung jumlah transaksi pada bulan Februari 2025.
SELECT * FROM penjualan;
SELECT
COUNT(*) AS total_transaksi_februari_2025
FROM
penjualan
WHERE
tanggal_penjualan LIKE '%2025-02%';

-- 10. Tampilkan nama pelanggan beserta tanggal penjualan.
SELECT
p.nama_pelanggan,
j.tanggal_penjualan
FROM pelanggan p
INNER JOIN penjualan j
ON
p.id_pelanggan = j.id_pelanggan;

-- 11. Tampilkan nama pelanggan beserta nama sales dalam melakukan transaksi
SELECT
p.nama_pelanggan,
s.nama_sales
FROM pelanggan p
INNER JOIN penjualan j
ON 
p.id_pelanggan = j.id_pelanggan
INNER JOIN sales s
ON 
j.id_sales = s.id_sales;

-- 12. Tampilkan detail transaksi yang berisi: ID Penjualan, Nama Pelanggan, Nama Produk, Jumlah, Harga Produk
SELECT
dp.id_penjualan,
c.nama_pelanggan,
p.nama_produk,
dp.jumlah,
p.harga
FROM 
detail_penjualan dp
INNER JOIN produk p
ON
dp.id_produk = p.id_produk
INNER JOIN penjualan j
ON
dp.id_penjualan = j.id_penjualan 
INNER JOIN pelanggan c
ON
c.id_pelanggan = j.id_pelanggan;

-- 13. Hitung total nilai penjualan setiap transaksi : (Total_penjualan = jumlah × harga produk)
SELECT
SUM(p.harga * dp.jumlah) AS total_penjualan
FROM detail_penjualan dp
JOIN produk p
ON
p.id_produk = dp.id_produk;

-- 14. Hitung jumlah transaksi setiap sales (group berdasarkan nama_sales).
SELECT
s.nama_sales,
COUNT(pj.id_penjualan) AS jumlah_transaksi
FROM penjualan pj
LEFT JOIN sales s
ON 
pj.id_sales = s.id_sales
GROUP BY
s.nama_sales;

-- 15. Hitung total omzet setiap sales (group berdasarkan nama_sales).
SELECT
s.nama_sales,
SUM(dp.jumlah*p.harga) AS total_omzet
FROM penjualan pj
LEFT JOIN sales s
ON 
pj.id_sales = s.id_sales
LEFT JOIN detail_penjualan dp
ON
pj.id_penjualan = dp.id_penjualan
LEFT JOIN produk p
ON
dp.id_produk = p.id_produk
GROUP BY
s.nama_sales;

-- 16. Tampilkan sales dengan omzet terbesar.
SELECT
s.nama_sales,
SUM(dp.jumlah*p.harga) AS total_omzet
FROM penjualan pj
LEFT JOIN sales s
ON 
pj.id_sales = s.id_sales
LEFT JOIN detail_penjualan dp
ON
pj.id_penjualan = dp.id_penjualan
LEFT JOIN produk p
ON
dp.id_produk = p.id_produk
GROUP BY
s.nama_sales
ORDER BY
total_omzet DESC
LIMIT 1;

-- 17. Hitung total pembelian setiap pelanggan.
SELECT
p.nama_pelanggan,
COUNT(pj.id_penjualan) AS total_pembelian
FROM penjualan pj
JOIN pelanggan p
ON
p.id_pelanggan = pj.id_pelanggan
GROUP BY
p.nama_pelanggan;

-- 18. Tampilkan pelanggan dengan total pembelian terbesar.
SELECT
c.nama_pelanggan,
SUM(dp.jumlah*p.harga) AS total_pembelian
FROM penjualan pj
JOIN pelanggan c
ON
c.id_pelanggan = pj.id_pelanggan
JOIN detail_penjualan dp
ON
dp.id_penjualan = pj.id_penjualan
JOIN produk p
ON
p.id_produk = dp.id_produk
GROUP BY
c.nama_pelanggan
ORDER BY
total_pembelian DESC
LIMIT 1;

-- 19. Hitung total unit produk yang terjual (Group berdasarkan nama_produk)
SELECT
p.nama_produk,
SUM(dp.jumlah) AS total_unit_terjual
FROM detail_penjualan dp
JOIN produk p
ON
p.id_produk = dp.id_produk
GROUP BY
p.nama_produk;

-- 20. Tampilkan 5 produk terlaris.
SELECT
p.nama_produk,
SUM(dp.jumlah) AS total_unit_terjual
FROM detail_penjualan dp
JOIN produk p
ON
p.id_produk = dp.id_produk
GROUP BY
p.nama_produk
ORDER BY
total_unit_terjual DESC
LIMIT 5;

-- 21. Hitung omzet setiap produk.
SELECT
p.nama_produk,
SUM(dp.jumlah * p.harga) AS total_omzet
FROM detail_penjualan dp
JOIN produk p
ON
p.id_produk = dp.id_produk
GROUP BY
p.nama_produk;

-- 22. Tampilkan nama pelanggan beserta tanggal transaksi (Group berdasarkan kategori_produk)
SELECT
c.nama_pelanggan,
pj.tanggal_penjualan,
p.kategori_produk
FROM penjualan pj
JOIN pelanggan c
ON 
c.id_pelanggan = pj.id_pelanggan
JOIN detail_penjualan dp
ON
pj.id_penjualan = dp.id_penjualan
JOIN produk p
ON
p.id_produk = dp.id_produk
GROUP BY
p.kategori_produk;

-- 23. Tampilkan pelanggan yang belum pernah membeli.
SELECT
c.nama_pelanggan,
COUNT(pj.id_penjualan) AS total_membeli
FROM pelanggan c
LEFT JOIN penjualan pj
ON 
c.id_pelanggan = pj.id_pelanggan
LEFT JOIN detail_penjualan dp
ON
pj.id_penjualan = dp.id_penjualan
LEFT JOIN produk p
ON
p.id_produk = dp.id_produk
WHERE
pj.id_penjualan IS NULL;

-- 24. Tampilkan sales yang belum pernah melakukan penjualan.
SELECT
s.nama_sales,
COUNT(pj.id_penjualan) AS total_penjualan
FROM sales s
LEFT JOIN penjualan pj
ON 
s.id_sales = pj.id_sales
LEFT JOIN detail_penjualan dp
ON
pj.id_penjualan = dp.id_penjualan
LEFT JOIN produk p
ON
p.id_produk = dp.id_produk
WHERE
pj.id_penjualan IS NULL;


-- 25. Tampilkan produk yang belum pernah terjual.
SELECT
p.nama_produk, p.kategori_produk,
COUNT(pj.id_penjualan) AS total_terjual 
FROM
produk p
LEFT JOIN  detail_penjualan dp
ON 
p.id_produk = dp.id_produk
LEFT JOIN penjualan pj
ON
pj.id_penjualan = dp.id_penjualan
WHERE
pj.id_penjualan IS NULL;
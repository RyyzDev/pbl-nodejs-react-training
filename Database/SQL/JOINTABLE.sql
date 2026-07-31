-- JOIN 4 TABLE
SELECT
ph.id_penjualan,
ph.tanggal_penjualan,
k.nama_kasir,
p.nama_produk,
pd.jumlah,
pd.subtotal
FROM penjualan_header ph
INNER JOIN kasir k
ON ph.id_kasir = k.id_kasir
INNER JOIN penjualan_detail pd
ON  ph.id_penjualan = pd.id_penjualan
INNER JOIN produk p
ON p.id_produk = pd.id_produk
GROUP BY
id_penjualan
ORDER BY
nama_kasir ASC;

-- LEFT JOIN
SELECT
ph.id_penjualan,
ph.tanggal_penjualan,
k.nama_kasir,
p.nama_produk,
pd.jumlah,
pd.subtotal
FROM penjualan_header ph
LEFT JOIN kasir k
ON ph.id_kasir = k.id_kasir
LEFT JOIN penjualan_detail pd
ON  ph.id_penjualan = pd.id_penjualan
LEFT JOIN produk p
ON p.id_produk = pd.id_produk
GROUP BY
id_penjualan
ORDER BY
nama_kasir ASC;

-- RIGHT JOIN
SELECT
ph.id_penjualan,
ph.tanggal_penjualan,
k.nama_kasir,
p.nama_produk,
pd.jumlah,
pd.subtotal
FROM penjualan_header ph
RIGHT JOIN kasir k
ON ph.id_kasir = k.id_kasir
RIGHT JOIN penjualan_detail pd
ON  ph.id_penjualan = pd.id_penjualan
RIGHT JOIN produk p
ON p.id_produk = pd.id_produk
GROUP BY
id_penjualan
ORDER BY
nama_kasir ASC;
-- TRIGGER
-- Buatlah sebuah trigger  yang otomatis mengurangi jumlah stok di tabel produk
-- setiap kali ada transaksi baru yang dimasukkan ke table penjualan

DELIMITER //
CREATE TRIGGER kurangi_stok
AFTER INSERT ON detail_penjualan
FOR EACH ROW
BEGIN
	UPDATE produk
    SET stok = stok - NEW.jumlah
    WHERE id_produk = NEW.id_produk;
END
// DELIMITER ;

INSERT INTO penjualan(id_pelanggan, id_sales, tanggal_penjualan, metode_pembayaran, status_penjualan)
VALUES
(1, 1, '2026-01-01', 'Transfer', 'Selesai');

INSERT INTO detail_penjualan(id_penjualan, id_produk, jumlah)
VALUES
(1015, 1, 12);

select * from produk;


-- PROCEDURE
-- Buatlah sebuah procedure  yang otomatis mengurangi jumlah stok di tabel produk
-- setiap kali ada transaksi baru yang dimasukkan ke table penjualan

DELIMITER //
CREATE PROCEDURE KurangiStok(
    IN p_id_produk INT, 
    IN p_jumlah_beli INT
)
BEGIN
    UPDATE produk 
    SET stok = stok - p_jumlah_beli 
    WHERE id_produk = p_id_produk;
END;
// DELIMITER ;

CALL KurangiStok(1, 2);

select * from produk;


-- TRANSACTION
-- Buatlah sebuah Transaction dimana proses mengurangi jumlah stok di tabel produk
-- setiap kali ada transaksi baru yang dimasukkan ke table penjualan

START TRANSACTION;
	UPDATE produk 
	SET stok = stok - 1 
	WHERE id_produk = 1;

	CALL KurangiStok(1, 1);

-- ROLLBACK; -- <- pembatalan update
COMMIT;-- <-- simpan


-- PRODUCEDURE + TRANSACTION (AUTOMATIC ROLLBACK WHEN ERROR IN TRANSACTION)
DELIMITER //
CREATE PROCEDURE ProsesPenjualanOtomatis(
    IN p_id_produk INT, 
    IN p_jumlah INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL SET MESSAGE_TEXT = 'Transaksi Gagal! Otomatis Rollback.';
    END;

    --  Mulai Transaksi
    START TRANSACTION;
			-- MASUKKAN DML DISINI
    -- Kunci data jika sukses
    COMMIT;
END;
// DELIMITER ;


CALL ProsesPenjualanOtomatis(1, 2);
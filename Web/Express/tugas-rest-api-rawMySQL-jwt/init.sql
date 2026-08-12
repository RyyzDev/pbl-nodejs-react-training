-- 1. Membuat Tabel user (Dibuat pertama karena dirujuk oleh tabel lain)
CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `password` VARCHAR(192) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Membuat Tabel mahasiswa
CREATE TABLE `mahasiswa` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(255) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `user_id` INT,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
);

-- 3. Membuat Tabel mata_kuliah
CREATE TABLE `mata_kuliah` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(45) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `user_id` INT,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
);

-- 4. Membuat Tabel nilai (Menghubungkan mahasiswa, mata_kuliah, dan user)
CREATE TABLE `nilai` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `indeks` VARCHAR(255),
    `skor` INT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `mata_kuliah_id` INT NOT NULL,
    `mahasiswa_id` INT NOT NULL,
    `user_id` INT,
    FOREIGN KEY (`mata_kuliah_id`) REFERENCES `mata_kuliah`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
);

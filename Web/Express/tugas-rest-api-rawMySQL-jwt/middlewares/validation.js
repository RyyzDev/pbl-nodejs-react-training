const validateMahasiswa = (req, res, next) => {
    // destructuring request agar menjadi name
    const { nama } = req.body
    // wadah error
    const errors = [];

    // logic validator
    if (!nama || typeof nama !== 'string' || nama.trim().length < 2) {
        errors.push('Nama mahasiswa wajib diisi (minimal 2 karakter)')     
    }
    if (errors.length) {
        return res.status(400).json({
            errors
        })
    }

    next();
}


const validateMatkul = (req, res, next) => {
    const { nama } = req.body
    const errors = [];

    if (!nama == undefined && (typeof title !== 'string') || title.trim().length < 1){
        errors.push('nama matkul tidak boleh kosong')
    }
    if (errors.length){
        return res.status(400).json({
            errors
        })
    }
    next()
}

const validateNilai = (req, res, next) => {
    const { mata_kuliah_id, mahasiswa_id, skor } = req.body
    const errors = [];

    if(Number.isInteger(mata_kuliah_id) !== true || Number.isInteger(mata_kuliah_id) !== true || Number.isInteger(nilai) !== true) {
        errors.push('Input tidak valid, pastikan input hanya angka!')
    }
    if (errors.length) {
        return res.status(400).json({
            errors
        })
    }
    next()
}

module.exports = {
    validateMahasiswa,
    validateMatkul,
    validateNilai
}
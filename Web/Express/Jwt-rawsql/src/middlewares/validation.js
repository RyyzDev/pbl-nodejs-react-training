const validateCategoryCreate = (req, res, next) => {
    // destructuring request agar menjadi name
    const { name } = req.body
    // wadah error
    const errors = [];

    // logic validator
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.push('Name wajib diisi (minimal 2 karakter)')     
    }
    if (errors.length) {
        return res.status(400).json({
            errors
        })
    }

    next();
}

const validateCategoryUpdate = (req, res, next) => {
    // izinkan update parsial
    const { name } = req.body;
    const errors = []

    if (name !== undefined && (typeof name !== 'string' || name.trim().length < 2)){
        errors.push('Jika disertakan, name minimal 2 karakter')
    }
    if (errors.length) {
        return res.status(400).json({
            errors
        })
    }

    next();
}

const validateMovieCreate = (req, res, next) => {
    const { title, year } = req.body
    const errors = []

    if (!title || typeof title !== 'string' || title.trim().length < 1){
        errors.push('title wajib')
    }
    if (errors.length) {
        return res.status(400).json({errors})
    }
    next();
}

const validateMovieUpdate = (req, res, next) => {
    const { title, year } = req.body
    const errors = [];

    if (!title == undefined && (typeof title !== 'string') || title.trim().length < 1){
        errors.push('Jika disertakan title tidak boleh kosong')
    }
    if (!year == undefined && (!Number.isInteger(year)) || year < 1800 || year > 3000){
        errors.push('Jika disertakan year harus integer valid')
    }
    if (errors.length){
        return res.status(400).json({
            errors
        })
    }
    next()
}

module.exports = {
    validateCategoryCreate,
    validateCategoryUpdate,
    validateMovieCreate,
    validateMovieUpdate
}
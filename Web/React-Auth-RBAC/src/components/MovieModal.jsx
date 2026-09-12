export default function MovieModal({
    show,
    isEdit,
    form,
    categories,
    isSubmitting,
    onChange,
    onSubmit,
    onClose
}) {
    if (!show) {
        return null
    }

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h5 className="modal-title">{isEdit ? ('Edit') : ('Tambah')} Movie</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Judul Film</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={form.title || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="year" className="form-label">Tahun Rilis</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="year"
                                    name="year"
                                    value={form.year || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="categoryId" className="form-label">Pilih Kategori</label>
                                <select
                                    className="form-select"
                                    id="categoryId"
                                    name="categoryId"
                                    value={form.categoryId || ''}
                                    onChange={onChange}
                                >
                                    <option value="">-- Tanpa Kategori / Pilih Kategori --</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                        <span role="status">Mengirim...</span>
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
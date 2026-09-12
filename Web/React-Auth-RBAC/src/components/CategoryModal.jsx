export default function CategoryModal({
    show,
    isEdit,
    form,
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
                        <h5 className="modal-title">{isEdit ? ('Edit') : ('Tambah')} Kategori</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="form-label">Nama Kategori</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={form.name || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="form-label">Deskripsi Kategori</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={form.description || ''}
                                    onChange={onChange}
                                />
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
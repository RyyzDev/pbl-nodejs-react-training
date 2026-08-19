import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function GuestPage() {
    const url = 'https://mytechs.my.id/data-siswa-api/api-buku-tamu.php'
    const [guests, setGuests] = useState([])
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [activeGuest, setActiveGuest] = useState(null);
    const [inputData, setInputData] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const getGuestData = useCallback(async() => {
        try {
            const response = await axios.get(url)
            if (!response.data) {
                setError("Gagal mengambil data")
                return;
            }
            setGuests(response.data)
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Sepertinya ada yang salah")
        } finally {
            setLoading(false)
        }
    }, [url])
    

    useEffect(() => {
         getGuestData();
    }, [getGuestData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setError("")

        try {
            const response = await axios.post(url, form)
            if (response.data.success === false) {
                setError("Gagal Menyimpan data")
                setInputData(false)
            } else {
                console.log(response.data)
                alert("data berhasil disimpan")
            }
            setIsSubmitting(false)
            setInputData(false)
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Error")
        }
    }

    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}
            <div className='container mt-4'>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setInputData(true)}
                >
                    Tambah Data
                </button>
            </div>

            {!loading && !error && (
                <div className="container mt-4">
                    <table className="table justify-content-center mb-2 text-center border-1 table-striped table-hover">
                        <thead className="container-fluid table-secondary">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nama Tamu</th>
                                <th scope="col">Komentar Tamu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guests.map(guest => (
                                <tr key={guest.id_tamu} onClick={() => { setActiveGuest(guest) }} className='pe-auto'>
                                    <td>{guest.id_tamu}</td>
                                    <td>{guest.nama_tamu}</td>
                                    <td>{guest.komentar_tamu}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeGuest && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content text-center">
                            <div className="modal-header">
                                <h5 className="modal-title">Data Pengunjung</h5>
                                {/* Klik tombol close akan mengubah state kembali ke null untuk menutup modal */}
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setActiveGuest(null)}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <h4>{activeGuest.nama_tamu}</h4>
                                <div className="form-floating mb-3">
                                    <b>
                                        <textarea
                                            className="form-control text-center"
                                            id="floatingTextarea2Disabled"
                                            style={{ height: '100px', fontSize: '20px' }}
                                            disabled
                                            value={activeGuest.komentar_tamu}
                                        />
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {inputData && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content text-center">
                            <div className="modal-header">
                                <h5 className="modal-title">Tambah Buku Tamu</h5>
                                {/* Klik tombol close akan mengubah state kembali ke null untuk menutup modal */}
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setInputData(null)}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="nama_tamu" className="form-label">Nama Tamu</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nama_tamu"
                                            name="nama_tamu"
                                            value={form.nama_tamu || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email_tamu" className="form-label">Email Tamu</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email_tamu"
                                            name="email_tamu"
                                            value={form.email_tamu || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="komentar_tamu" className="form-label">Komentar Tamu</label><br />
                                        <textarea
                                            className="form-control"
                                            id="komentar_tamu"
                                            name="komentar_tamu"
                                            rows={4}
                                            value={form.komentar_tamu || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={isSubmitting} // Tombol otomatis tidak bisa diklik jika isLoading bernilai true
                                    >
                                        {isSubmitting ? (
                                            <>
                                                {/* Spinner Bootstrap */}
                                                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                                <span role="status">Mengirim...</span>
                                            </>
                                        ) : (
                                            "Submit" // Teks normal jika tidak sedang loading
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
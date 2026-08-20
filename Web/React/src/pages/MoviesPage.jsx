import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import MovieModal from '../components/MovieModal'

export default function MoviesPage() {
    const url = 'http://localhost:8000'
    const [form, setForm] = useState({})
    const [movies, setMovies] = useState([])
    const [categories, setCategories] = useState([])

    const [inputData, setInputData] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0);

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    // GET DATA MOVIES
    const getMovies = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/api/movies`)

            if (!response.data) {
                setError("Gagal Mengambil Data")
                return
            }
            setMovies(response.data)
        } catch (err) {
            console.error("Gagal mengambil data", err)
            setError(err.response?.data?.message || err.message || "Ada Kesalahan sistem")
        } finally {
            setLoading(false)
        }
    }, [])

    // GET DATA CATEGORY
    const getCategory = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/api/categories`)

            if (!response.data) {
                setError("Gagal Mengambil Data Kategori")
                return
            }
            setCategories(response.data)
        } catch (err) {
            console.error("Gagal mengambil kategori", err)
            setError(err.response?.data?.message || err.message || "Ada Kesalahan sistem")
        }
    }, [])

    // fungsi untuk buka modal popup
    const openAddModal = () => {
        setForm({})
        setIsEdit(false)
        setInputData(true)
    }

    // fungsi untuk tutup modal popup
    const closeModal = () => {
        setInputData(null)
        setForm({})
        setIsEdit(false)
    }

    // fungsi untuk edit
    const handleEdit = (movie) => {
        setForm({
            id: movie.id,
            title: movie.title,
            year: movie.year,
            categoryId: movie.category?.id ?? movie.categoryId ?? ''
        })
        setIsEdit(true)
        setInputData(true)
    }

    // fungsi untuk delete
    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("Apakah anda yakin ingin menghapus film ini?")
        if (!konfirmasi) {
            return
        }
        try {
            const response = await axios.delete(`${url}/api/movies/${id}`)
            if (!response.data) {
                setError("Gagal Menghapus Data")
                return
            }
            setRefreshKey(k => k + 1)
            alert("Data berhasil dihapus")
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal menghapus data")
        }
    }

    // fungsi untuk tombol submit di modal popup
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setError("")

        try {
            let response
            if (isEdit) {
                const { id, ...payload } = form
                response = await axios.put(`${url}/api/movies/${id}`, payload)
            } else {
                response = await axios.post(`${url}/api/movies`, form)
            }

            if (response.data.success === false) {
                setError("Gagal Menyimpan data")
            } else {
                alert(isEdit ? "Data berhasil diubah" : "Data berhasil disimpan")
                setRefreshKey(k => k + 1)
                closeModal()
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Error")
        } finally {
            setIsSubmitting(false)
        }
    }

    // fungsi untuk ngisi form dinamis
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    // agar terender setiap refresh
    useEffect(() => {
        getMovies(); //eslint-disable-line
        getCategory();
    }, [getMovies, getCategory, refreshKey])

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

            {!loading && !error && (
                <div>
                    <div className='container mt-4'>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={openAddModal}
                        >
                            Tambah Data
                        </button>
                    </div>
                    <div className='container mt-5'>
                        <table className='table justify-content-center mb-2 text-center border-1 table-striped'>
                            <thead className='container-fluid table-secondary'>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Judul</th>
                                    <th scope='col'>Tahun Rilis</th>
                                    <th scope='col'>Kategori</th>
                                    <th scope='col'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => {
                                    return (
                                        <tr key={movie.id}>
                                            <td>{movie.id}</td>
                                            <td>{movie.title}</td>
                                            <td>{movie.year}</td>
                                            <td>{movie.category?.name}</td>
                                            <td>
                                                <button
                                                    className='btn btn-primary btn-sm me-2'
                                                    onClick={() => handleEdit(movie)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className='btn btn-danger btn-sm'
                                                    onClick={() => handleDelete(movie.id)}
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <MovieModal
                show={!!inputData}
                isEdit={isEdit}
                form={form}
                categories={categories}
                isSubmitting={isSubmitting}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onClose={closeModal}
            />
        </>
    )
}
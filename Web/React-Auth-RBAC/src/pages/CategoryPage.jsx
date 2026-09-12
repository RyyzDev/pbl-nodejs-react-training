import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import CategoryModal from '../components/CategoryModal'

export default function CategoryPage() {
    const url = 'http://localhost:8000'
    const [form, setForm] = useState({})
    const [categories, setCategories] = useState([])

    const [inputData, setInputData] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0);

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    // GET DATA CATEGORY
    const getCategories = useCallback(async () => {
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
        } finally {
            setLoading(false)
        }
    }, [])

    const openAddModal = () => {
        setForm({})
        setIsEdit(false)
        setInputData(true)
    }

    const closeModal = () => {
        setInputData(null)
        setForm({})
        setIsEdit(false)
    }

    const handleEdit = (category) => {
        setForm({
            id: category.id,
            name: category.name,
            description: category.description
        })
        setIsEdit(true)
        setInputData(true)
    }

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("Apakah anda yakin ingin menghapus kategori ini?")
        if (!konfirmasi) {
            return
        }
        try {
            const response = await axios.delete(`${url}/api/categories/${id}`)
            if (!response.data) {
                setError("Gagal Menghapus Data")
                return
            }
            setRefreshKey(k => k + 1)
            alert("Kategori berhasil dihapus")
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal menghapus kategori")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setError("")

        try {
            let response
            if (isEdit) {
                const { id, ...payload } = form
                response = await axios.put(`${url}/api/categories/${id}`, payload)
            } else {
                response = await axios.post(`${url}/api/categories`, form)
            }

            if (response.data.success === false) {
                setError("Gagal Menyimpan data")
            } else {
                alert(isEdit ? "Kategori berhasil diubah" : "Kategori berhasil disimpan")
                setRefreshKey(k => k + 1)
                closeModal()
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    useEffect(() => {
        getCategories(); //eslint-disable-line
    }, [getCategories, refreshKey])

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
                            Tambah Kategori
                        </button>
                    </div>
                    <div className='container mt-5'>
                        <table className='table justify-content-center mb-2 text-center border-1 table-striped'>
                            <thead className='container-fluid table-secondary'>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Nama Kategori</th>
                                    <th scope='col'>Deskripsi</th>
                                    <th scope='col'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(category => {
                                    return (
                                        <tr key={category.id}>
                                            <td>{category.id}</td>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                            <td>
                                                <button
                                                    className='btn btn-primary btn-sm me-2'
                                                    onClick={() => handleEdit(category)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className='btn btn-danger btn-sm'
                                                    onClick={() => handleDelete(category.id)}
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

            <CategoryModal
                show={!!inputData}
                isEdit={isEdit}
                form={form}
                isSubmitting={isSubmitting}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onClose={closeModal}
            />
        </>
    )
}
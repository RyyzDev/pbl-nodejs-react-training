import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default function MenuPage() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [menus, setMenus] = useState([])

    useEffect(() => {
        async function getMenusData() {
            const url = 'https://api.getdietly.com/search'
            try {
                const response = await axios.get(url, {
                    params: {
                        "q": "rice",
                        "limit": "12"
                    }
                })
                if(!response){
                    throw new Error('Http Error')
                }
                console.log(response)
                setMenus(response.data)
            } catch(err) {
                console.log("Error", err)
                setError(err.response?.data?.message || err.message || "Sepertinya ada kesalahan :(")
            } finally {
                setLoading(false)
            }
        }

        getMenusData()
    }, [])

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
                <div className='d-flex row row-cols-1 row-col-md-2 row-cols-lg-3 mb-5 g-4'>
                        {menus.map((menu) => (
                            <Card 
                                key={menu.id}
                                name={menu.name}
                                image_url={menu.image_url}
                            />
                        ))}
                </div>
        )}       
    </>
    )
}
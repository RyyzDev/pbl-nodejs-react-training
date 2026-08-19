import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeePage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    /*
        2 TIPE KOMUNIKASI API
    */
   // 1. MENGGUNAKAN FETCH
    // useEffect(() => {
    //     async function getUsersData(){
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //     try{
    //         const response = await fetch(url)
    //         if (!response.ok) {
    //             throw new Error('Http Error')
    //         }

    //         const data = await response.json()
    //         await setUsers(data)
    //     } catch(err) {
    //         console.log("Error Fetching data", err)
    //         setError("Gagal fetching data")
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    //     getUsersData();
    // }, []);

    // 2. MENGGUNAKAN AXIOS (LIBRARY AXIOS)
    useEffect(() => {
        async function getUsersData(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        // coba dulu
        try{
            const response = await axios.get(url)
            console.log(response)
            setUsers(response.data)
            //jika error
        } catch(err) {
            console.log("Error Fetching data", err)
            setError(err.response?.data?.message || err.message || "Ada Kesalahan Sistem :(")
        } finally { // jika selesai (berhasil)
            setLoading(false)
        }
    }

        getUsersData();
    }, []);
    

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
            <div className="container">
            <table className="table justify-content-center mb-2 text-center border-1 table-striped table-hover">
                <thead className="container-fluid table-secondary">
                    <tr>
                        <th scope="col border-start">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><a href={user.website}>{user.website}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )}
        </>
    )
}
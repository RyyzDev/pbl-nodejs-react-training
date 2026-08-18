export default function Card() {
    return (
        <>
         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Item Menu */}
            <div className="col">
                {/* h-100 memastikan tinggi semua card sama rata meski teksnya berbeda panjang */}
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden image-hover-container">
                    {/* Foto Makanan */}
                    <div className="position-relative">
                        <img 
                        src="https://unsplash.com" 
                        className="card-img-top object-fit-cover" 
                        alt="Salad Segar"
                        style={{ height: '220px' }}
                        />
                        {/* Badge Kategori Terlaris */}
                        <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill shadow-sm">
                        Best Seller
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
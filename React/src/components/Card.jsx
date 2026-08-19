export default function Card({ name, image_url }) {
    return (
        <div className="col"> 
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden image-hover-container m-4 shadow-lg">
                <div className="position-relative">
                    <img 
                        src={image_url}
                        className="card-img-top object-fit-cover" 
                        alt={name}       
                        style={{ height: '220px', width: '100%' }}
                    />
                    <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill shadow-sm">
                        Best Seller
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold text-dark mb-0">
                        {name}      
                    </h5>
                </div>
            </div>
        </div>
    );
}

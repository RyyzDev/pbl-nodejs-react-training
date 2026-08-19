import { Link } from 'react-router-dom'
import Hero from '../assets/hero.png'


function HomePage() {
    return (
        <div>
        {/* SECTION 1: HERO */}
        <section className="py-5 bg-light min-vh-75 d-flex align-items-center">
            <div className="container px-4 px-lg-5 my-3">
            <div className="row align-items-center gx-5">
                {/* Teks Hero */}
                <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
                    Mengenal kami lebih dekat
                </span>
                <h1 className="display-4 fw-black text-dark lh-sm mb-3">
                    Cita Rasa Warisan, <br />
                    <span className="text-primary">Takkan Tergantikan</span>
                </h1>
                <p className="lead text-muted mb-4">
                    Kami menghadirkan resep otentik leluhur yang diolah dengan bahan segar pilihan. 
                    Menghasilkan kelezatan abadi yang tak ada duanya di setiap suapan!
                </p>
                <div className="d-grid d-sm-flex justify-content-sm-center justify-content-lg-start gap-3">
                    <Link to="/menu" className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-bold shadow-sm">
                    Lihat Menu Kami
                    </Link>
                    <Link to="/contact" className="btn className='btn-outline-dark btn-lg px-4 py-3 rounded-pill fw-bold">
                    Hubungi Kami
                    </Link>
                </div>
                </div>

                {/* Gambar Hero */}
                <div className="col-lg-6">
                <div className="position-relative">
                    {/* Efek dekoratif di belakang gambar */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4 transform-rotate-3d opacity-10" style={{ zIndex: 0, transform: 'rotate(3deg)' }}></div>
                    <img
                    src={Hero}
                    alt="Suasana Restoran Kami"
                    className="img-fluid rounded-4 shadow-lg w-100 position-relative"
                    style={{ zIndex: 1, objectFit: 'cover', maxHeight: '450px' }}
                    />
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* SECTION 2: CALL TO ACTION (CTA) */}
        <section className="py-5 bg-dark text-white">
            <div className="container px-4 px-lg-5 text-center my-4">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                <h2 className="display-5 fw-bold mb-3">
                    Siap Memanjakan Lidah Anda Hari Ini?
                </h2>
                <p className="text-white-50 lead mb-4">
                    Jangan lewatkan menu andalan *Best Seller* kami. Pesan tempat sekarang atau pesan antar langsung ke rumah Anda untuk menikmati kelezatan kuliner terbaik.
                </p>
                <div className="d-grid d-sm-flex justify-content-center gap-3">
                    <Link to="/menu" className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold text-dark shadow">
                    Pesan Sekarang
                    </Link>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold">
                    Reservasi Meja
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
    )
}

export default HomePage
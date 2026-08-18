import Hero from '../assets/hero.png'


function HomePage() {
    return (
        <div>
            <section className='py-2 bg-light'>
                <div className='container px-4 px-lg-5 my-5'>
                    <div className="row align-items-center gx-5">

                        <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                            <span className='badge bg-primary-subtle text-primary mb-5 mb-lg-0'>Mengenal kami lebih dekat</span>
                            <h1 className="display-4 fw-bold lh-sm mb-3 text-dark">Tentang Kami</h1>
                            <p>
                                Cita rasa masakan warisan leluhur yang diturunkan,
                                Sehingga menghasilkan rasa yang tak ada duanya!
                            </p>
                        </div>

                        <div className='col-lg-6'>
                            <img
                              src={Hero}
                              alt="Restoran Kami"
                              className="img-fluid rounded-4 shadow-lg w-100"
                            /> 
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
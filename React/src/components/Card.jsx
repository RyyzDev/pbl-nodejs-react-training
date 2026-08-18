function Card({title, children}) {
    return (
        <div>
            <h3>{title}</h3>
        {/* children ini tidak dibungkus tag, jadi di definisikan di parent */}
            {children}
        </div>
    )
}

export default Card
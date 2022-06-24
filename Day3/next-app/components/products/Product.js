import Link from 'next/link'

export default function Product({ product }) {
    return (
        <div className="card" style={{ width: '300px' }}>
            <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{`Price: $${product.price}`}</p>
                <Link href={`/products/${product.id}`}>
                    <a className="btn btn-primary">See more</a>
                </Link>
            </div>
        </div>
    )
}
import Product from './product'

export default function Products({ products }) {
    return (
        <>
            <h3>Our products</h3>
            {
                products.map(product => (
                    <div key={product.name} className="col-md-4 pt-2 pb-5">
                        <Product product={product} />
                    </div>
                ))
            }
        </>
    )
}




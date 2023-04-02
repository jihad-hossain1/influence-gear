import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => {
            setProducts(data);
        })
    },[])
    return (
        <>
            <div>
                <div className='my-2'>
                    <h2 className='text-center font-semibold text-2xl'>Popular Collection</h2>
                
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                
                {
                products.map(product => <Cards product={product} key={product.id}></Cards>)
            }
            </div>
            </div>
        </>
    );
};

export default Home;
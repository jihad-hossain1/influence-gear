import React from 'react';

const Cards = (props) => {
    console.log(props.product);
    const {price,ratings,ratingsCount,stock,img,name} = props.product
    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                    <div>
                        <h2 className="card-title">{ name}</h2>
                    <p className='text-lg'>Price: ${ price}</p>
                    <p>Qty: <small className='btn btn-outline btn-xs'>{ stock}</small></p>
                    <p>Rating: { ratings}</p>
                    <p>total-Parch: { ratingsCount}</p>
                    </div>
                <div className="card-actions justify-end">
                <button className="bg-slate-300 px-2 rounded"><small>Add to Cart</small></button>
                </div>
            </div>
            </div> 
        </>
    );
};

export default Cards;
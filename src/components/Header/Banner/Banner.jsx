import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="banner grid md:flex gap-2 py-4 mx-5 my-5 ">
                <div className="banner-title ">
                    <h2 className="text-4xl font-bold mb-2">Start your Journey as Influencer</h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit sed earum facilis dolores exercitationem rem mollitia odit nam sit!</p>
                    <button className="py-2 px-3 rounded bg-error">Preebook now</button>
                </div>
                <div className="banner-img">
                <img className="rounded" src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />

                </div>
            </div>   
        </>
    );
};

export default Banner;
import React from 'react'

const Cards = ({ cardItem }) => {
    return (
        <>
        <div className="service_page">
        <h3 className="text-center mt-5 p-3 text-white"> Service Page</h3>
        </div>
            <div className="service_page p-5">
                <div className="container">
                    <div className="row gy-5">
                        {cardItem.map((currElem) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div className="card p-2">
                                            <img src={currElem.image} className="card-image" alt="imgg" width="100%" height="50%"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{currElem.heading}</h5>
                                                <p className="card-text">{currElem.description}</p>
                                                <a href="home.js" className="btn btn-primary">{currElem.visit}</a>
                                            </div>
                                        </div>


                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>
            </div>

        </>
    )
}

export default Cards

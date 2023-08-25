import React from 'react';

const Common = (props) => {
  return (
    <>
      <div className="home_page pt-5">
        <div className="container">




          <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ">
              <h3 className="header">{props.header}</h3>
              <h1><strong>{props.name}</strong></h1>
              <p>{props.description}</p>
              <button className="btn btn-outline-primary">Hire Me</button>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mx-auto align-items-center mt-3">
              <img src={props.img} alt="img" />
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Common

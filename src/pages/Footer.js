import React from 'react';
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <h5 className="text-black">Get Ready to get started?</h5>
                <h5 className="text-black">Talk to us today</h5>
              </div>
              <div className="col-md-6 mx-auto">
                <button className="btn btn-outline-primary text-center">Get Started</button>
              </div>
            </div>
          </div>
          <div className="footer_bottom py-5">
            <div className="container_footer">
              <div className="row">
                <div className="col-md-3">
                  <h5>Thapa Technical</h5>
                  <p className="">Lorem In publishing and graphic design, </p>
                </div>
                <div className="col-md-3 mx-auto">
                  <h5>Subscribe to get important updates</h5>
                  <input className="m-2 p-2 text-center" type="email" placeholder='Email'></input>
                  <button className="btn btn-primary text-center">Subscribe</button>
                </div>
                <div className="col-md-3 mx-auto">
                  <h5>Follow Us</h5>
                  <li className="m-2"><i className="fa-brands fa-facebook-f fa-fade"></i></li>
                  <li className="m-2"><i className="fa-brands fa-google-plus-g fa-beat-fade"></i></li>
                  <li className="m-2"><i className="fa-brands fa-twitter fa-beat-fade"></i></li>
                </div>
                <div className="col-md-3 mx-auto">
                  <h5>Call us</h5>
                  <h5>679889909</h5>
                </div>
              </div>
            </div>
            <hr />
            <p className="text-center">@2022 Thapatechnical. All Rights Reserved</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Footer

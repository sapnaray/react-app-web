import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact_page">
                <h3 className="text-center mt-5 p-3 text-white"> Contact Page</h3>
            </div>

            <div className="container">
                <div className="map_location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.640741514766!2d76.79436527385745!3d28.21822567589352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d47c455555555%3A0xb14a3b539d4e6dfa!2sH%26M%20INNOVANCE%20LLP%20-WEB%20DEVELOPMENT%20COMPANY%7C%20WEBSITE%20DEVELOPMENT%20COMPANY%20IN%20DELHI%7CWEBSITE%20DEVELOPMENT%20COMPANY%20IN%20DHARUHERA!5e0!3m2!1sen!2sin!4v1687769665368!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="fullName here" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone number here" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="submit w-50">
                                    <button className="btn btn-outline-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact

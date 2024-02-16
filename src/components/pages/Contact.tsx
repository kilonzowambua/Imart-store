import Navbar from "../Navbar";


function Contact() {
  return (
    <>
      <Navbar />

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            {" "}
            <div
              style={{
                overflow: "hidden",
                resize: "none",
                maxWidth: "100%",
                width: "800px",
                height: "500px",
              }}
            >
              <div
                id="embed-map-canvas"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: "0" }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=Machakos+County,+Kenya&key=AIzaSyApdNE7oaeyB7Uyi_37f2tnsKOmC_qADes"
                ></iframe>
              </div>
              <a
                className="our-googlemap-code"
                href="https://www.bootstrapskins.com/themes"
                id="authorize-map-data"
              ></a>
              <style>
                {`
          #embed-map-canvas img.text-marker {
            max-width: none!important;
            background: none!important;
          }
          img {
            max-width: none;
          }
        `}
              </style>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Contact Us</h1>
            <p className="lead ">
              "Reach out to us today! Use our contact form to get in touch."
            </p>

            <form className="p-3 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  rows={4}
                  id="floatingPassword"
                ></textarea>
                <label htmlFor="floatingPassword">Enter Message</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Submit
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Sent, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
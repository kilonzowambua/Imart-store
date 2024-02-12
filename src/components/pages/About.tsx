import Navbar from "../Navbar";
import About_image1 from "../../assets/images/About us page-amico.svg";

function About() {
  return (
    <>
      <Navbar />
      <hr />
      <hr />
      <hr />
      <div className="bg-dark text-info py-2 px-6 mt-6 text-center">
        <div className="py-4">
          <h1 className="display-5 fw-bold text-white">About Us</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Our Mission
            </h1>
            <p className="lead">
              At iMart Store, our mission is to redefine the shopping experience
              by providing unparalleled convenience, innovation, and quality. We
              aim to empower our customers by offering a curated selection of
              products that cater to their diverse needs and preferences.
              Through continuous innovation and a commitment to excellence, we
              strive to become the ultimate destination for all shoppers,
              delivering exceptional value and satisfaction with every
              interaction. At iMart Store, we're not just selling products –
              we're shaping experiences and enriching lives, one purchase at a
              time."
            </p>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <div className="rounded-lg-3" />
            <img
              src={About_image1}
              className="img-fluid"
              width="400"
              height="100"
              alt="First about us"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About
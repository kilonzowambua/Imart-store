import Navbar from '../Navbar';
function Products() {
  return (
    <>
      <Navbar />
      <hr />
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4 px-2 py-4">
        <div className="col  px-2">
          <div className="border border-success border-4">
            <div className="card h-50 ">
              <img
                src="https://images.unsplash.com/photo-1558818498-28c1e002b655?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Tomatoes"
              />
              <div className="card-body">
                <h5 className="card-title badge bg-success fs-6">Tomatoes</h5>
                <h6 className="fs-7 fw-bolder">
                  Price:<i>Ksh.50/=</i>
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-2">
          <div className="border border-success border-4">
            <div className="card h-50 ">
              <img
                src="https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title badge bg-success fs-6">Oranges</h5>
                <h6 className="fs-7 fw-bolder">
                  Price:<i>Ksh.60/=</i>
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-2">
          <div className="border border-success border-4">
            <div className="card h-40">
              <img
                src="https://plus.unsplash.com/premium_photo-1674666545866-d02e25597939?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGF2YWNhZG98ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title badge bg-success fs-6">Avocado</h5>
                <h6 className="fs-7 fw-bolder">
                  Price:<i>Ksh.80/=</i>
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products

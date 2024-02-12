
import Navbar from "../Navbar";

function Home() {
    return (
      <>
        <Navbar />
        <div className="cover-container">
          <img
            className="cover-image"
            src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cover Image"
          />
          <div className="cover-text">
            <h1>Welcome to iMart online Store</h1>
            <p>
              At iMart Store, we're dedicated to revolutionizing your shopping
              experience. Our mission is simple: to provide convenience,
              affordability, and quality in every purchase. From everyday
              essentials to the latest gadgets, we're your one-stop destination
              for all your shopping needs.
            </p>
            <button
              type="button"
              className="btn btn-outline-success fs-4 mx-4 my-4"
            >
              Join Us
            </button>
          </div>
            </div>
           
      </>
    );
}

export default Home

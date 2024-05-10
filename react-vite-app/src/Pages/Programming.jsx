import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";

function Programming(){
  return (
    <section className="landing-page">
      <Navbar />
      <div className="body">
        <div className="body-child">
          <Card />
        </div>
      </div>
      <Footer/>
    </section>
  );
}


export default Programming;
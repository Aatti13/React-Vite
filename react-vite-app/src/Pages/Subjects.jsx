import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Options from "../component/Options";

function Subjects(){
  return (
    <section className="landing-page">
      <Navbar />
      <div className="subaru-body">
        <div className="sub-body-child"><br/>
          <h2 className="sub-head">Step into the World of Computer Science...</h2>
          <br/><Options />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Subjects;
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Contact(){
  return (
    <div className="landing-page">
      <Navbar />
      <div className="body">
        <div className="body-child">
          <h2 className="contact-head">CONTACT US</h2><br/><hr className="grad" />
          <div className="contact-par">
            <div className="left-contact">
              <LeftForm />
            </div>
            <div className="right-contact">
              <RightImg />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const RightImg = ()=>{
  return (
    <img src="./images/general/aboutcodespindle.jpg" alt="about-us" className="cd-lg"/>
  );
}

const LeftForm = ()=>{
  return (
    <form action="#" method="post" className="cont-form">
      <div className="email-contact">
        <a href="mailto: aattreya.ks@gmail.com"><input type="text" placeholder="Enter Mail-ID *" className="cont-em"/></a>
      </div>
      <div className="text-form">
        <textarea name="" id="msg-cont" className="msg-cont" cols="30" rows="10" placeholder="Enter your Message * " required>
        </textarea>
      </div>
      <div className="submit-cont">
        <input type="submit" value="Submit" className="submit-btn"/>
        <input type="reset" value="Reset" className="reset-btn"/>
      </div>
    </form>
  );
}

export default Contact;
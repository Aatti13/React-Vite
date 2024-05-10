import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function About(){
  return (
    <section className="landing-page">
      <Navbar />
      <div className="abt-body">
        <div className="white-paper">
          <h2 className="white-head">About Us</h2><br/><hr className="grad" />
          <div className="flexer">
            <Description />
            <img src="./images/general/vector.jpg" alt="vector" className="vector"/>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

const Description = ()=>{
  return (
    <h4 className="desc">
      CodeSpindle offers you indepth knowledge on several programming languages, databases and also subject matter expertise on domains like Cyber Security, Database Management Systems and Software Engineering.<br/><br/>

      The video lectures and tutorials have been designed in such a way that even a beginner can follow the concepts with minimum effort.<br/><br/>

      At CodeSpindle the focus is on providing numerous exercises so that the users can get hands on experience on the concept. These lectures have already been utilized by learners worldwide for more than 100,000+ Hours with over 2 Million views.<br/><br/>

      CodeSpindle will be continously evolving and effort will be made to add more subjects in newer domains and also offer users with a valuable and enriching experience. Register with us to get notifications and also follow us on our social media accounts to get news on our updates to the platform. CodeSpindle team wishes you success in your learning journey.<br/>
    </h4>
  );
}



export default About;
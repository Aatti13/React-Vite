import Search from "./Search";

function Hero(){
  return (
    <div className="hero-container">
      <section className="hero">
        <Left />
        <Right />
      </section>
    </div>
  );
}

const Left = ()=>{
  return (
    <section className="left">
      <h1>Welcome to CodeSpindle,</h1>
      <h2>The Best place to Learn Anything Computer Science... </h2>
      <ButtonContainer />
    </section>
  );
}

const Right = ()=>{
  return (
    <section className="right">
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
      <Search />
    </section>
  );
}

const ButtonContainer = ()=>{
  return (
    <div className="btn-container">
      <a href="https://www.youtube.com/@SatishCJ" target="_blank">
        <button className="youtube">
          <img src="./images/sociallogos/yt_logo_mono_dark.png" alt="yt-btn"/>
          YouTube
        </button>
      </a>
      <a href="https://codespindle.com/" target="_blank"><button className="original">CodeSpindle</button></a>
    </div>
  );
}



export default Hero;
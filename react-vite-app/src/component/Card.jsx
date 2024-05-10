function Card(){
  const languages1 = [
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCiEeouwBe5XugjZdb_1n7wd", img:"./images/langlogos/c.svg"}, 
    {href: "https://www.youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF", img:"./images/langlogos/cpp.png"}, 
    {href: "https://www.youtube.com/playlist?list=PLTjRvDozrdlz3_FPXwb6lX_HoGXa09Yef", img:"./images/langlogos/csharp.svg"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCgXSB8VDhAWkDQMXWo10Bh6", img:"./images/langlogos/python.png"}, 
  ];

  const languages2 = [
    {href: "https://codespindle.com/JavaScript/JavaScript-index.html", img: "./images/langlogos/javascript.png"},
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCgHkI6-DBLzSXSmRtHVfhOk", img: "./images/langlogos/php.png"},
    {href: "https://www.youtube.com/playlist?list=PL8fnAiiuQeFtg3ztGNquEb4Oh-WZxVPUv", img: "./images/langlogos/golang.png"},
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCiK-dIPJsZpJxHCut-IKcXB", img: "./images/langlogos/java.png"}, 
  ];

  return (
    <div className="card-container">
      <h1>Learn Programming from the Best resources...</h1>
      <div className="card-row">
        {languages1.map((language1, index)=>{
          return (
            <div className="card" key={index}>
              <a href={language1.href} target="_blank"><img src={language1.img} alt="img" className="lang-logo"/></a>
            </div>
          );
        })}
      </div>
      <div className="card-row">
      {languages2.map((language, index)=>{
          return (
            <div className="card" key={index}>
              <a href={language.href} target="_blank"><img src={language.img} alt="img" className="lang-logo"/></a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
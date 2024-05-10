function Options(){
  return (
    <div className="subjects-row">
      <Selections />
    </div>
  );
}

const Selections = ()=>{
  const databases = [
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgChd7pCEEsysCffvlxFRz4cu", value: "Oracle"}, 
    {href: "", value: "NoSQL"}, 
    {href: "", value: "MongoDB"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgChcOZ6qHgSfwiBPCz2Bzdjh", value: "Neo4j"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgChtqVJ36s3XaG0-sFog6JXC", value: "Redis"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCjfqP9cjbaY8zjPViRVOVKU", value: "Cassandra"}, 
  ];
  const coreConcepts = [
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCgJhjoDrmUYY7R0mzJzw9Mu", value: "Cyber Security"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCivx3szJVUKmnFpqEIls4v2", value: "Ethical Hacking"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCj4DfO_75XlZ83HSSFleGjZ", value: "Software Engineering"}, 
    {href: "https://www.youtube.com/playlist?list=PLqfPEK2RTgCj_AyiVdpUpIDGale2FnMDW", value: "Advanced DBMS"}, 
  ];

  return (
    <div className="parent">
      <div className="slide">
        <h3 className="left-sub">Databases</h3><br/>
        <div className="array">
          <ul className="sub-par">
            {databases.map((database, index)=>{
              return (
                <li key={index} className="subs"><a href={database.href} target="_blank"><div className="inner">{database.value}</div></a></li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="slide">
        <h3 className="left-sub">Core Concepts</h3><br/>
        <div className="array">
          <ul className="sub-par">
            {coreConcepts.map((coreConcept, index)=>{
              return (<li key={index} className="subs"><a target="_blank" href={coreConcept.href}><div className="inner">{coreConcept.value}</div></a></li>);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Options;
function Navbar(){
  return (
    <header>
      <div className="navbar-container">
        <Logo />
        <NavList />
        <Register />
      </div>
    </header>
  );
}

const Logo = ()=>{
  return (
    <h1 className="logo"><a href="/" id="bala">&lt;CodeSpindle/&gt;</a></h1>
  );
}

const NavList = ()=>{
  const navElements = [
    {title:'HOME', url: '/'}, 
    {title: 'SUBJECTS', url: '/subjects'}, 
    {title: 'ABOUT', url: '/about'}, 
    {title: 'CONTACT', url: '/contact'},
    {title: 'PROGRAMMING', url: '/programming'}];
  return (
    <nav className="navbar">
      <ul className="navlist">
        {navElements.map((navElement, index)=>(
          <li className="element" key={index}><a href={navElement.url} key={index}>{navElement.title}</a></li>
        ))}
      </ul>
    </nav>
  );
}

const Register = ()=>{
  return (
    <div className="register-container">
      <button><a href="/register">Register</a></button>
      
    </div>
  );
}

export default Navbar;
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';

import Navbar from "./Navbar";

function Header( { currentPage }) {
  let headerContent = '';

  switch (currentPage) {
    case '/':
      headerContent = 'Home';
      break;
    case '/About':
      headerContent = 'About';
      break;
    case '/Portfolio':
      headerContent = 'Portfolio';
      break;
    case '/Resume':
      headerContent = 'Resume';
      break;
    case '/Contact':
      headerContent = 'Contact';
      break;
    default:
      headerContent = '';
  }

  

  return (
    <header className="header">
      <h1 className="header-title">{ headerContent }</h1>
      <Navbar />
    </header>
  );
}

export default Header;
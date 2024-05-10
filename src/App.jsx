// Bringing in the required import from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';

// import './styles/all.css'
// import ProfileImage from './components/ProfileImg';


function App() {
  const currentPage = useLocation().pathname;
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      
      <div className="row">
        <CssBaseline />
        <Header currentPage={currentPage} />
        <ProfileImage />
        <main className="col-md-6 col-sm-12">
          <Outlet />
        </main>
        <Footer />
      </div>
            
      
    </>
  );
}

export default App;
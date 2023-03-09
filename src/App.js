// import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Card from './components/card';
import Gallery from './components/gallery';
import Progress from './components/progress';
import Form from './components/form';
// import Footer from './components/footer';

function App() {
  return (
    <Box>
    <div className="App">
      <Navbar/>
    </div>
    <div >
      <Home/>
      <About/>
      <Card/>
      <Gallery/>
      <Progress/>

      <Form/>
      {/* <Footer/> */}
    </div>
    </Box>
    
  );
}

export default App;

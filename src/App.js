import './CSS/bootstrap.css'
import './App.css';
import Navbar from './Components/Navbar'
import Sales from './Components/Sales'
import Banner from './Components/Banner'
import Mobile from './Components/Mobiles'
import Form from './Components/Form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
        <div class="row"><Navbar/></div>
        <Sales/>
        <Banner/> 
        <Routes>
          <Route path="/Form" element={<Form/>}/>
        </Routes>
        <Mobile/>
      </BrowserRouter>
    </>
  );
}

export default App;

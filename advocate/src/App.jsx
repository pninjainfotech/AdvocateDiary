import './App.css';
import Features from "./components/Layout/Features";
import Contact from "./components/Layout/Contact";
import Prices from "./components/Layout/Prices";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import { Route, Routes} from 'react-router';
import { Home } from './components/Layout/Home';
import Footer from "./components/Layout/Footer";
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './components/Dashboard/Dashboard';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';

function withLayout(HocComponent){
  return (
    <Layout>
      <HocComponent />
    </Layout>
  )
}
function App () {
  
  return (
    <div className="App">
      <Routes>
        {/* <Route path ='/' element ={<Home/>}/> */}
        <Route path='/' element={withLayout(Home)}/>
        <Route path ='/dashboard' element ={withLayout(Dashboard)}/>
        {/* <Route path ='/All Cases' element ={<AllCases/>} /> */}
        <Route path ='/new-cases' element ={withLayout(RegistrationForm)}/>
        <Route path='/features' element ={withLayout(Features)} />
        <Route path='/contact' element={withLayout(Contact)}/>
        <Route path='/prices' element={withLayout(Prices)}/>
        <Route path='/login' element={withLayout(Login)} />
        <Route path='/signup' element={withLayout(Signup)}/>
        <Route path='/footer' element={withLayout(Footer)}/>

      </Routes>
        

    </div>
  );
}

export default App;
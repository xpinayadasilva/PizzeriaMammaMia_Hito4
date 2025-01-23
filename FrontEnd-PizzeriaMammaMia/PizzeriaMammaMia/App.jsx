import './App.css';
import NavBar from './components/NavBar';
/* import Home from './pages/Home';  */
import Footer from './components/Footer'; 
import Pizza from "./components/Pizza";
/* 
import LoginPage from './components/LoginPAge';  
import RegisterPage from './components/RegisterPage'; 
*/ 
/* import Cart from './components/Cart'; */

function App(){
     
  return (    
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className='flex-grow'>
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage />  */}
        {/* <Cart /> */}
        <Pizza />
      </main>
      <Footer />     
    </div>       
  )
}
  

export default App;
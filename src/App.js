
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes,Route, useLocation} from 'react-router-dom';



import NavScrollExample from './components/header';
import Footer from './components/Footer';
import Men from './components/Men';
import Women from './components/Women';
import Home from './components/Body';
import Collection from './components/collection';
import View from './components/View';
import Cart from './components/Cart';
import { Context } from './components/context';
import { useState , useEffect} from 'react';
import Login from './components/Login';
import Adminnav from './components/Admin/Adminnav';
import Userdetails from './components/Admin/Userdetails';
import { shoeData } from './components/products';
import Addproduct from './components/Admin/Addproduct';
import Editproduct from './components/Admin/Editproduct';
import SignUp from './components/Signup';
import Search from './components/Admin/Search';
import Adminlogin from './components/Admin/Adminlogin';



function App() {
  const[search,setsearch]=useState(" ")
  const location =useLocation()
  const[product,setproduct] =useState(shoeData)
  const[carts,setstate]=useState([]);
  const[edit,setedit]=useState([])
  const[state,setchange]=useState(false)
  const[conform,setconform]=useState(false)
  const [userData,setuserData]=useState([])
  const[adminlogin,setadminlogin]=useState([{
    email:'viswajith21295@gmail.com',
    password:'Viswa.@123'
  }])
  const[login,setLogin]=useState([{
    name:'viswajith',
    email:'viswajith21295@gmail.com',
    password:'Viswa.@123'
  }])
 
  

  useEffect(()=>{
    location.pathname.includes('admin')? setchange(true):
    location.pathname.includes('login')? setchange(true):setchange(false)
  },[location])


  const data={
    carts,
    setstate,
    login,
    setLogin,
    product,
    setproduct,
    edit,
    setedit,
    search,
    setsearch,
    adminlogin,
    setadminlogin,
    conform,
    setconform,
    userData,
    setuserData
  }
  
  return (
   
   
<div>
    
   

    
    
    <Context.Provider value={data}>
    {state?null:<NavScrollExample/>}
    
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/col' element={<Collection/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/signup' element={<SignUp/>}/>
        <Route path='/login/set' element={<Adminlogin/>}/>
        <Route path='/admin' element={<Adminnav/>}/>

        <Route element={<Adminnav/>}>
        <Route path='/admin/search' element={<Search/>}/>
        <Route path='/admin/col' element={<Collection/>}/>
        <Route path='/admin/userdetail' element={<Userdetails/>}/>
        <Route path='/admin/addproduct' element={<Addproduct/>}/>
        <Route path='/admin/editproduct' element={<Editproduct/>}/>
        
        </Route>
        
        
       
        
        </Routes>
      </Context.Provider>
     {state?null: <Footer/>}
      
      </div>
     
  );
  }

export default App;

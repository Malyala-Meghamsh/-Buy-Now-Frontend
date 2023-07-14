import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/home';
import Product from './components/Product/product';
import Profile from './components/Profile/profile';
import Confirm from './components/Confirm/Confirm';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route exact path='/product/:id' Component={Product}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/confirm/:id' Component={Confirm}/>
      </Routes>
  );
}

export default App;
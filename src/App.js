
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import News from './components/News/News';
import Doctor from './components/Doctor/Doctor';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import MemberDetails from './components/MemberDetails/MemberDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
    <AuthProvider>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/doctor' element={<Doctor/> }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/team/:teamsID' element={<PrivateRoute><MemberDetails/></PrivateRoute>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;

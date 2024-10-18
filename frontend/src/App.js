import Navbar from './components/usercomponents/Navbar';
import About from './components/usercomponents/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/usercomponents/Signin';
import Login from './components/usercomponents/Login';
import Home from './components/usercomponents/Home';
import Protectedroutes from './components/usercomponents/Protectedroutes';
import { AuthenticationProvider } from './components/globalstates/Authentication';
import { Alertprovider } from './components/globalstates/Alertmessage';
import Footer from './components/usercomponents/Footer';
import Schedulebooking from './components/usercomponents/Schedulebooking';
import Viewbooking from './components/usercomponents/Viewbooking';

function App() {
  return (
    <>
      <AuthenticationProvider>
        <Alertprovider>
          <BrowserRouter>
            <Routes>
              <Route element={<Protectedroutes />}>
                <Route element={<><div><Navbar /></div>
                  <div><Home /></div>
                  <div><Footer /></div></>} path='/home' />
                <Route element={<><div><Navbar /></div>
                  <div className='my-4 container'><About /></div>
                  <div><Footer /></div></>} path='/about' />
                <Route element={<><div><Navbar /></div>
                  <div><Schedulebooking /></div>
                  <div><Footer /></div></>} path='/book' />
                <Route element={<><div><Navbar /></div>
                  <div><Viewbooking /></div>
                  <div><Footer /></div></>} path='/viewbooking' />
              </Route>
              <Route element={<>
                <div><Login /></div>
              </>} path='/' />
              <Route element={<>
                <div><Signin /></div>
              </>} path='/signin' />
            </Routes>
          </BrowserRouter>
        </Alertprovider>
      </AuthenticationProvider>
    </>
  );
}

export default App;

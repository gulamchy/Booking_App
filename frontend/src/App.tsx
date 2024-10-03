import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import Register from './pages/register';
import SignIn from './pages/signin';
import AddHotel from './pages/AddHotel';
import { useAppContext } from './contexts/appContext';



const App = () => {
  const {isLoggedIn} = useAppContext();
  return (
   <Router >
      <Routes>
        <Route path='/' element={
          <Layout>
            <p>Home Page</p>
          </Layout>
        }/>
        
        <Route path='/search' element={
          <Layout>
            <p>Search Page</p>
         </Layout>
        }/>  
        <Route path='/register' element={
          <Layout>
            <Register />
          </Layout>
        }/> 
        <Route path='/login' element={
          <Layout>
            <SignIn />
          </Layout>
        }/>

        {isLoggedIn && (
          <>
            <Route path='/add-hotel' element={
              <Layout>
                <AddHotel />
              </Layout>
            }/>
          </>
        )}
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
   </Router>
  )
};

export default App;

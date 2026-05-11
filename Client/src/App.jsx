import React, { use } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { useEffect } from 'react'
import axios from 'axios';
import { setUserData, } from './Redux/userSlice';
import { useDispatch } from 'react-redux';


function App() {
const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/user/current-user',
          { withCredentials: true }
        );

        dispatch(setUserData(response.data));

      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(setUserData(null));
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


    </div>
  )
}

export default App

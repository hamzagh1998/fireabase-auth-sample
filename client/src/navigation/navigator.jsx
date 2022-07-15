import React, { useEffect } from 'react';
import { Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setIsloading, setUserData } from '../redux/user/user.slice';

import { mainNvigator }  from './main.navigator';
import { authNavigator }  from './auth.navigator';


export function Navigator() {

  // react router dom hooks
  const navigate = useNavigate();
  const loacation = useLocation();
  // redux hooks
  const token = useSelector(state => state.user.token);
  const isLoading = useSelector(state => state.user.isLoading);
  const dispatch = useDispatch();

  const pathname = loacation.pathname; // current path

  const protectedRoutes = ['/', '/users', '/etc'];
  const authRoutes = ['/login', '/register'];

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    userData
      ? dispatch(setUserData(userData))
      : protectedRoutes.includes(pathname) && navigate('/login');
    (authRoutes.includes(pathname) && token) && navigate('/');
    dispatch(setIsloading(false));
    }, [token]);

  return isLoading
    ? <h1>Loading</h1>
    : (
        <Routes>
          { mainNvigator }
          { authNavigator }
        </Routes>
      );
};

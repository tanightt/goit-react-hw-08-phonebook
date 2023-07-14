import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/selectors';
import { Contacts, Home, Login, Register } from 'pages';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <PublicRoute restrictetTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restrictetTo="/contacts" component={<Login />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute restrictetTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<h1> Page is not found! 404 </h1>} />
        </Route>
      </Routes>
    </>
  );
};

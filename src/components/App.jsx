import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/selectors';
import { Contacts, Home, Login, Register } from 'pages';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Comment } from 'react-loader-spinner';
import { styled } from 'styled-components';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#df8e3d"
      />
    </Loader>
  ) : (
    <Container>
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
    </Container>
  );
};

const Loader = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Container = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(78, 50, 36, 0.5);

  background-image: url('https://images.pexels.com/photos/17568714/pexels-photo-17568714.jpeg');
`;

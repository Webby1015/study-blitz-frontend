import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import api from './services/api';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Profile from './pages/Profile';
import Notes from './pages/Notes';
import Discussions from './pages/Discussions';
import Aktu from './pages/Aktu';
import AktuOneView from './pages/AktuOneView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import toast from 'react-hot-toast';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/');
        // console.log(response.data);
        // toast(response.data.message)
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Check if JWT token is present
  const isSignedIn = localStorage.getItem('accessToken') !== null;

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* Only allow sign-in and sign-up if JWT token is not present */}
        {!isSignedIn && (
          <>
          <Route
              path="/aktu-ac-in"
              element={
                <>
                  <PageTitle title="Aktu | Study Blitz " />
                  <Aktu/>
                </>
              }
            />
            <Route
              path="/aktu-one-view"
              element={
                <>
                  <PageTitle title="Aktu | Study Blitz " />
                  <AktuOneView/>
                </>
              }
            />
            <Route
              path="/auth/signin"
              element={
                <>
                  <PageTitle title="Signin | Study Blitz " />
                  <SignIn />
                </>
              }
            />
            <Route
              path="/auth/signup"
              element={
                <>
                  <PageTitle title="Signup | Study Blitz " />
                  <SignUp />
                </>
              }
            />
            {/* Redirect to sign-in page if accessing other routes */}
            <Route
              path="*"
              element={<Navigate to="/auth/signin" replace />}
            />
          </>
        )}

        {/* Allow access to other routes if JWT token is present */}
        {isSignedIn && (
          <>
            <Route
              path="/notes"
              element={
                <>
                  <PageTitle title="Notes | Study Blitz " />
                  <Notes />
                </>
              }
            />
            <Route
              path="/discussions"
              element={
                <>
                  <PageTitle title="Discussions | Study Blitz " />
                  <Discussions />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <PageTitle title="Profile | Study Blitz " />
                  <Profile />
                </>
              }
            />
            <Route
              path="/aktu-ac-in"
              element={
                <>
                  <PageTitle title="Aktu | Study Blitz " />
                  <Aktu/>
                </>
              }
            />
            <Route
              path="*"
              element={<Navigate to="/notes" replace />}
            />
          </>
        )}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
// import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Notes from './pages/Notes';
import Discussions from './pages/Discussions';
import Aktu from './pages/Aktu';
import AktuOneView from './pages/AktuOneView';
import 'react-toastify/dist/ReactToastify.css';
import { Welcome } from './pages/Welcome';
import { currentuser } from './services/api';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await currentuser();
        // console.log(res);
        // console.log(res.data.message)
        localStorage.setItem('myKey', 'true');
      } catch (error: any) {
        localStorage.setItem('myKey', "false");
        console.error('Error during registration:', error.response.data.message);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <>
    <Loader />
    <p>Just wait for a while backend is starting up</p>
    </>
  ) : (
    <>
      <Routes>
        <Route
          path="/notes"
          element={
            <>
              <PageTitle title="Notes | Study Blitz " />
              <Notes  />
            </>
          }
        />
        <Route
          path="/discussions"
          element={
            <>
              <PageTitle  title="Discussions | Study Blitz " />
              <Discussions  />
            </>
          }
        />
        {/* <Route
          index
          element={
            <>
              <PageTitle title="Study Blitz" />
              <ECommerce />
            </>
          }
        /> */}
        <Route
          index
          element={
            <>
              <PageTitle title="Study Blitz" />
              <Welcome />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <PageTitle title="Study Blitz" />
              <Welcome />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Study Blitz " />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Study Blitz " />
              <Profile  />
            </>
          }
        />
        {/* <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Study Blitz " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Study Blitz " />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Study Blitz " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Study Blitz " />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Study Blitz " />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Study Blitz " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Study Blitz " />
              <Buttons />
            </>
          }
        /> */}
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Study Blitz " />
              <SignIn  />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Study Blitz " />
              <SignUp/>
            </>
          }
        />
        <Route
          path="/aktu-ac-in"
          element={
            <>
              <PageTitle title="Aktu | Study Blitz " />
              <Aktu />
            </>
          }
        />
        <Route
          path="/aktu-one-view"
          element={
            <>
              <PageTitle title="Aktu | Study Blitz " />
              <AktuOneView />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

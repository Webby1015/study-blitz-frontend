import DefaultLayout from '../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';

export const Welcome = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center rounded-md items-center bg-gradient-to-r from-blue-950 to-blue-700">
        <div className="text-center bg-white w-screen bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <header>
            <Link className="mb-5.5 inline-block" to="/">
              <img
                className="hidden dark:block bg-white rounded-lg h-70"
                src={Logo}
                alt="Logo"
              />
              <img
                className="dark:hidden bg-white rounded-lg h-70"
                src={Logo}
                alt="Logo"
              />
            </Link>
            <h1 className="text-4xl font-bold text-white mb-6">
              Welcome to Study Blitz
            </h1>
          </header>
          <main>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Whether you are a student striving for excellence or an educator
              seeking to support your students, StudySphere provides an
              all-in-one platform to access study materials and engage in
              meaningful discussions
            </p>
            <Link
              to='/auth/signin'
              className="bg-blue-950 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700  transition duration-300 mb-4 block"
            >
              Sign in
            </Link>
            <Link
              to='/notes'
              className="bg-blue-950 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 mb-4 block"
            >
              Go through Notes
            </Link>
            <Link
              to='/discussions'
              className="bg-blue-950 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 mb-4 block"
            >
              Explore Discussions
            </Link>
          </main>
        </div>
      </div>
    </DefaultLayout>
  );
};

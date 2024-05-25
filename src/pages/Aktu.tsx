import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../common/Loader';

const Aktu = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <DefaultLayout>
      {loading ? (
        <Loader   />
      ) : (
        <iframe
          className=" rounded-md bg-boxdark dark:bg-white"
          src="https://aktu.ac.in/"
          title="AKTU Website"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      )}
    </DefaultLayout>
  );
};

export default Aktu;

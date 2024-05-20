import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../common/Loader';

const AktuOneView = () => {
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
        <Loader  />
      ) : (
        <iframe
          className=" rounded-md  bg-white"
          src="https://oneview.aktu.ac.in/WebPages/aktu/OneView.aspx"
          title="AKTU Website"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      )}
    </DefaultLayout>
  );
};

export default AktuOneView;

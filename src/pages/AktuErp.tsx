import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../common/Loader';

const AktuErp = () => {
  const openWebsite = () => {
    window.open('https://erp.aktu.ac.in/login.aspx', '_blank');
  };

  return (
    <DefaultLayout>
      <button onClick={openWebsite}>Open AKTU Website</button>
    </DefaultLayout>
  );
};

export default AktuErp;

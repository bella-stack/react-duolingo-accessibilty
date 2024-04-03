import React from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import HeartModel from '../components/HeartModel'; 

const Explore = () => {
  return (
    <div>
        <Header />
        <SideBar />
        <p>1. diff className</p>
        <p>2. can have voice assist to read out the class and intro</p>
        <p>3. can have AI assistance to give suggestion for choosing class</p>
        <HeartModel />

    </div>
  );
};

export default Explore;

// In Classroom.js
import React from 'react';
import SideBar from '../components/SideBar';
import EngToSpan from '../components/EngToSpan';
import VoiceToText from '../components/VoiceToText';
import Header from '../components/Header';

const Classroom = () => {
  return (
    <div>
        <Header />
        <SideBar />
        <EngToSpan />
        <VoiceToText />

    </div>
  );
};

export default Classroom;

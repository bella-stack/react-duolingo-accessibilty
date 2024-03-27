// In Classroom.js
import React from 'react';
import SideBar from '../components/SideBar';
import EngToSpan from '../components/EngToSpan';
import VoiceToText from '../components/VoiceToText';

const Classroom = () => {
  return (
    <div>
        <SideBar />
        {/* <EngToSpan /> */}
        <VoiceToText />

    </div>
  );
};

export default Classroom;

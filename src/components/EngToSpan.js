// In Classroom.js
import React from 'react';
import SideBar from './SideBar';
import '../App.css'


const EngToSpan = () => {

    const readText = () => {
        const storyText = document.getElementById('story-text').textContent;
        const speech = new SpeechSynthesisUtterance();
        speech.text = storyText;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
      };

  return (
    <div>
        <SideBar />
        <div class="EngToSpan-container">
            <div class="read-content">
            <div class="story">
                <h2>English Story</h2>
                <p id="story-text">
                    Once upon a time, in a faraway land, there was a kingdom where the language of English was not just a means of communication, but a way to bring people together...
                </p>
                <button className="read-button" onClick={readText}>Read</button>
            </div>
            <div class="story">
                <h2>Spanish Story</h2>
                <p>
                    Dianie
                </p>
                <button class="read-button">Read</button>
            </div>
            </div>
        </div>
    </div>
    
  );
};

export default EngToSpan;


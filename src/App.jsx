import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
   
      <CharacterEditor />
      <Footer /> 
      <div style={{
      position: "absolute",
      top:"60%",
      width: "100%",
      backgroundColor: "lightgrey",
      zIndex: "-1",
      height: "100%",
    }} />
    </>
  );
}

export default App;

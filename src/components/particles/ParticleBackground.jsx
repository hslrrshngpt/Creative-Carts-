import React from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
 
function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true
            },
          },
          particles: {
            color: {
              value: "#981e1e"
            },
            number: {
              density: {
                enable: true,
                area: 1500 // Adjust the area value to your preference
              },
              limit: 50, // Adjust the number of particles to your preference
              value: 30, // Adjust the initial number of particles to your preference
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 0.5, // Adjust the animation speed to your preference
                sync: true,
              },
              random: {
                enable: true,
                minimumValue: 0.01,
              },
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2 // Adjust the minimum size of particles to your preference
              },
              value: 4, // Adjust the initial size of particles to your preference
            }
          }
        }}
      />
    </div>
  );
}
 
export default App;

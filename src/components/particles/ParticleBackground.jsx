import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
 
function App() {
  const particlesInit = async (main) => {
    console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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
                  area: 1440
                },
                limit: 90,
                value: 80,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1,
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
                  minimumValue:3
                },
                value: 6
              }
            }
          }}
      />  
  </div>
  );
}
 
export default App;
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const MagicParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="z-50 max-w-[75rem] w-full h-[40rem] absolute"
      options={{
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          color: {
            value: ['#ffffff', '#735CDD', '#00A7E1'],
          },
          shape: {
            type: 'star',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 4,
            },
          },
          opacity: {
            value: 0.75,
            random: false,
            anim: {
              enable: true,
              speed: 1.75,
              opacity_min: 1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.1,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default MagicParticles;

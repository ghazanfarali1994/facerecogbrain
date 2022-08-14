import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
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
        <Particles
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={ {
    
        particles: {
            links: {
                distance: 150,
                enable: true,
            },
            move: {
                enable: true,
            },
            size: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
        },
}
}
    />
  );
}

export default Particle;
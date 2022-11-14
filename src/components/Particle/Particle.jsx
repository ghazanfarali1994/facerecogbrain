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
                    "fullScreen": {
                                "enable": true,
                                "zIndex": -1
                            },

                    particles: {
                            links: {
                                enable: true,
                            },
                            move: {
                                enable: true,
                            },
                            size: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            zIndex: -1,
                            fullScreen: {
                                enable: true,
                                zIndex: -1
                            },
                            number: {
                                value:100,
                                density: {
                                    enable: true,
                                    value_area:800
                                }
                            },
                        },
}
}
    />
  );
}

export default Particle;
import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

    const particlesInit = async (main) => {
			
			await loadFull(main);
		};

    return (
		<Particles init={particlesInit} params={particlesConfig}></Particles>
	);
}

export default ParticlesBackground

import './style/estadisticas.css'
import { descargar } from '../utils/descargar.js'
export const Estadisticas = () => {

	return (
		<div className="estadisticas">

		    <div className="estadistica">
		        <img src="https://img.icons8.com/pulsar-line/48/group-of-projects.png" alt="" />
		        <h2>15+</h2>
		        <p>Proyectos realizados</p>
		    </div>
			
		    <div className="estadistica">
		        <img src="https://img.icons8.com/windows/32/satisfaction.png" alt="" />
		        <h2>100%</h2>
		        <p>Clientes satisfechos</p>
		    </div>
			
		    <div className="estadistica">
		        <img src="https://img.icons8.com/ios/50/development-skill.png" alt="" />
		        <h2>4</h2>
		        <p>Aplicaciones full stack</p>
		    </div>
			
		</div>
	);
};

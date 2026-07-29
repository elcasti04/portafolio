import './style/inicio.css'
import { descargar } from '../utils/descargar.js'
export const Inicio = () => {
	return (
		<div id="inicio">
			<main
			className="inicio container-fluid"
			style={{ minHeight: '100vh' }}>
			<div className="col">
				<div className="d-flex col flex-wrap align-items-between">
					{/* IZQUIERDA */}
					<div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
						<h5 className="text-uppercase text-secondary mb-3">
							Desarrollador Web
						</h5>

						<div className="d-flex justify-content-center mb-3">
							<img
								className="img-fluid rounded-circle shadow"
								style={{ maxWidth: '350px' }}
								src="/img/perfil2.jpg"
								alt="foto de perfil"
							/>
						</div>

						<h5 className="fw-bold">Desarrollo aplicaciones web rápidas, modernas y escalables con React y Node.js.</h5>
					</div>

					{/* DERECHA */}
					<div className="col-12 col-lg-6 text-center text-lg-start">
						<h2 className="fw-bold mb-3"></h2>
						<hr className="w-25 mx-auto mx-lg-0" />

						<h3 className="fw-semibold">Andres Arturo Castro</h3>

						<h5 className="mt-3 text-secondary">
							Full Stack Web Developer
						</h5>

						<p className="mt-3">
							<strong>Desarrollo aplicaciones web modernas </strong> 
							utilizando <i>React, Node.js, Express y PostgreSQL</i>. Me enfoco en crear 
							interfaces intuitivas, APIs robustas y soluciones 
							escalables siguiendo <i>buenas prácticas de desarrollo</i>. 
							<strong> Estoy listo para ayudarte.</strong>
						</p>
						<p><i>“Primero resuelve el problema, después escribe el código”</i></p>
					</div>
				</div>
			</div>
			<div className='botones col-12 col-lg-12'>
				<button><a href="#proyectos">Proyectos</a></button>
				<button onClick={descargar}>Descargar CV</button>
			</div>
		</main>
						
		</div>
	);
};

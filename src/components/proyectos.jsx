import './style/proyectos.css'

export const Proyectos = () => {
	const proyectos = [
		{
			nombre:'Iglesia Evangelica Jesucristo Rey Eterno',
			descripcion:`Proyecto Full Stack para el desarrollo del sitio web de la iglesia, 
			abarcando tanto el backend como el frontend. Se utilizaron tecnologías como 
			Node.js, Express.js, JWT para la autenticación y React + JSX para la construcción 
			de una interfaz dinámica y responsive. El proyecto se desarrolló siguiendo buenas 
			prácticas de programación, priorizando la seguridad, el rendimiento y una 
			experiencia de usuario intuitiva.`,
			img:'/img/iejre.png',
			url:'por verse',
			repo:'https://github.com/elcasti04/IJRE-WEB'
		},
		{
			nombre:'Casa de Adoración roca Firme',
			descripcion:`Desarrollo de una aplicación web para la iglesia Casa de Adoración 
			Roca Firme utilizando React y TypeScript. El proyecto abarcó el diseño UI/UX, 
			la implementación de una interfaz responsive, optimización del rendimiento y 
			una experiencia de usuario fluida en dispositivos móviles y de escritorio.`,
			img:'/img/casarocafirme.png',
			url:'por verse',
			repo:'https://github.com/CasadeAdoracionRocaFirme/Pagina-Web-CARF'
		},
		{
			nombre:'Andres-Pelis',
			descripcion:`Plataforma web inspirada en las sagas Harry Potter y Crepúsculo, 
			desarrollada con React, JavaScript, HTML y CSS. Permite explorar información 
			sobre las películas mediante una interfaz moderna e intuitiva, con tarjetas 
			interactivas, navegación dinámica y un diseño responsive que brinda una 
			experiencia fluida en cualquier dispositivo.`,
			img:'/img/andrespelis.png',
			url:'https://andrespelis.netlify.app/',
			repo:'por verse'
		},
		{
			nombre:'Milo J music',
			descripcion:`Página web dedicada al artista argentino Milo J, desarrollada 
			con React, JavaScript, HTML y CSS. El proyecto incluye una biografía del 
			artista, un buscador de canciones, reproducción de música, enlaces a sus 
			redes sociales y un diseño responsive que ofrece una experiencia fluida 
			tanto en dispositivos móviles como de escritorio.`,
			img:'/img/pMilo.png',
			url:'https://milo-j-music.netlify.app/',
			repo:'https://github.com/elcasti04/MiloMusic'
		}
	]
	return (
		<>
			<div id="proyectos">
				<main
					style={{ miHeight: '95vh' }}
					className="proyectos section-block container-fluid row col-12 p-4"
				>
					<h2 className="text-center">Proyectos principales</h2>
					<div>
						<p className="text-center">
							En esta sección se mostrarán algunos de los proyectos en los que
							he trabajado, tanto personales como académicos. Estos proyectos
							reflejan mi pasión por la programación y mi compromiso con el
							aprendizaje continuo. A través de estos proyectos, he podido
							aplicar mis habilidades técnicas y resolver problemas reales, lo
							que me ha permitido crecer como desarrollador.
						</p>
						<hr />
						
							<div className='d-flex flex-wrap'>
								{proyectos.map((proyecto, index) => {
									return (
										<ul
										style={{ height: 'auto', color:'white' }}
										className="card col-11 col-md-6 col-lg-5 mx-auto d-flex justify-content-around align-items-center gap-5"
										key={index}>
										<li className="text-center">
											<img
												id="img-proyect"
												src={proyecto.img}
												alt={proyecto.nombre}
												className="img-fluid rounded-3 mb-3 shadow-sm"/>
											<h5 className="card-title fw-bold">{proyecto.nombre}</h5>
											<p className="card-text small">
												{proyecto.descripcion}
											</p>
											<div className="d-flex justify-content-center gap-2 mt-2">
												<a
													href={proyecto.url}
													target="_blank"
													className="btn btn-primary btn-sm rounded-pill px-3">
														Ver proyecto
												</a>
												<a
													href={proyecto.repo}
													target="_blank"
													className="btn btn-outline-primary btn-sm rounded-pill px-3">
														Repositorio
												</a>
											</div>
										</li>
									</ul>
									)
								})}
						
						</div>
					</div>
					<hr />
				</main>
			</div>
		</>
	);
};

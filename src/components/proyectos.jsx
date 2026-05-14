export const Proyectos = () => {
	return (
		<>
			<div id="proyectos">
				<main
			
				style={{ miHeight: '95vh' }}
				className="proyectos section-block container-fluid row col-12 p-4"
			>
				<h2 className="text-center">Proyectos</h2>
				<div>
					<p className="text-center">
						En esta sección se mostrarán algunos de los proyectos en los que he
						trabajado, tanto personales como académicos. Estos proyectos
						reflejan mi pasión por la programación y mi compromiso con el
						aprendizaje continuo. A través de estos proyectos, he podido aplicar
						mis habilidades técnicas y resolver problemas reales, lo que me ha
						permitido crecer como desarrollador.
					</p>
					<hr />
					<ul className="list-unstiled text-center d-flex flex-wrap justify-content-center gap-2">
						<li className="card col-12 col-md-6 col-lg-3 justify-content-center align-items-center">
							<img
								id="img-proyect"
								src="../src/../src/assets/image/imagenR-a-M.png"
								alt="proyecto 1"
								className="img-top"
							/>
							<h5 className="card-title">Rick and Morty API</h5>
							<p className="card-text">
								Aplicación web desarrollada con React, consumiendo el API de
								Rick and Morty.
							</p>
							<div className="d-flex justify-content-between">
								<a
									href="https://rick-and-morty-api-andrew.netlify.app/"
									target="_blank"
									className="btn btn-primary"
								>
									Ver proyecto
								</a>
								<a
									href="https://github.com/elcasti04/rick-and-morty-api"
									target="_blank"
									className="btn btn-outline-primary"
								>
									Repositorio
								</a>
							</div>
						</li>
						<li className="card col-12 col-md-6 col-lg-3 justify-content-center align-items-center">
							<img
								id="img-proyect"
								src="../src/../src/assets/image/img-F-app.png"
								alt="proyecto 2"
								className="img-top"
							/>
							<h5 className="card-title">Frases motivacionales APP</h5>
							<p className="card-text">
								Aplicación web creada con React que muestra frases
								motivacionales y de reflexión de manera aleatoria.
							</p>
							<div className="d-flex justify-content-between">
								<a
									href="https://motivational-frases.netlify.app/"
									target="_blank"
									className="btn btn-primary"
								>
									Ver proyecto
								</a>
								<a
									href="https://github.com/elcasti04/frases-app"
									target="_blank"
									className="btn btn-outline-primary"
								>
									Repositorio
								</a>
							</div>
						</li>
						<li className="card col-12 col-md-6 col-lg-3 justify-content-center align-items-center">
							<img
								id="img-proyect"
								src="../src/assets/image/imgW-app.png"
								alt="proyecto 3"
								className="img-top"
							/>
							<h5 className="card-title">Wheater APP</h5>
							<p className="card-text">
								Aplicación desarrollada con React que muestra información del
								clima de cualquier ciudad del mundo.
							</p>
							<div className="d-flex justify-content-between">
								<a
									href="https://wheaterclima-app.netlify.app/"
									target="_blank"
									className="btn btn-primary"
								>
									Ver proyecto
								</a>
								<a
									href="https://github.com/elcasti04/clima-App"
									target="_blank"
									className="btn btn-outline-primary"
								>
									Repositorio
								</a>
							</div>
						</li>
						<li className="card col-12 col-md-6 col-lg-3 justify-content-center align-items-center">
							<img
								id="img-proyect"
								src="../src/assets/image/pokemon.jpg"
								alt="proyecto 4"
								className="img-top"
							/>
							<h5 className="card-title">Poke-Dex APP</h5>
							<p className="card-text">
								Aplicación desarrollada con TypeScript que muestra pokémones e
								información detallada de cada uno, consumiendo datos desde una
								API.
							</p>
							<div className="d-flex justify-content-between">
								<a
									href="https://pokedexapi-aa.netlify.app/"
									target="_blank"
									className="btn btn-primary"
								>
									Ver proyecto
								</a>
								<a
									href="https://github.com/elcasti04/pokedex-app"
									target="_blank"
									className="btn btn-outline-primary"
								>
									Repositorio
								</a>
							</div>
						</li>
						<li className="card col-12 col-md-6 col-lg-3 justify-content-center align-items-center">
							<img
								id="img-proyect"
								src="../src/assets/image/latam45.png"
								alt="proyecto 5"
								className="img-top"
							/>
							<h5 className="card-title">Latam 45 APP</h5>
							<p className="card-text">
								Página web de monitoreo de mercado financiero para el índice
								LATAM 45. La aplicación muestra en tiempo real (simulado) el
								comportamiento de 45 activos clave de América Latina
							</p>
							<div className="d-flex justify-content-between">
								<a
									href="https://latam45.netlify.app/"
									target="_blank"
									className="btn btn-primary"
								>
									Ver proyecto
								</a>
								<a
									href="https://github.com/elcasti04/Latam45"
									target="_blank"
									className="btn btn-outline-primary"
								>
									Repositorio
								</a>
							</div>
						</li>
						<li className="card col-12 col-md-6 col-lg-3 justify-content-center align-items-center">
							<img
								id="img-proyect"
								src="../src/assets/image/concesionario.png"
								alt="proyecto 7"
								className="img-top"
							/>
							<h5 className="card-title">Concesionario</h5>
							<p className="card-text">
								Proyecto full stack desarrollado con nodeJs, express, postgreSql
								para el backend y React y typeScript para el frontend de un
								concesionario
							</p>
							<div className="d-flex justify-content-between">
								<a
									href="https://andres-concesionario.netlify.app/"
									target="_blank"
									className="btn btn-primary"
								>
									Ver proyecto
								</a>
								<a
									href="https://github.com/elcasti04/harrypotter"
									target="_blank"
									className="btn btn-outline-primary"
								>
									Repositorio
								</a>
							</div>
						</li>
					</ul>
				</div>
				<hr />
			</main>
			</div>
		</>
	);
};

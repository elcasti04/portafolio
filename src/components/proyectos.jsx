import './page.css/proyectos.css'
import { useState } from 'react';

export const Proyectos = () => {
	const [mostrar, setMostrar] = useState(1);
	function cambiar () {
		if(mostrar < 11){
			setTimeout(() => {
			setMostrar(mostrar + 1)
			}, 2000)
		}else if(mostrar == 14){
			setMostrar(1)
		}
	}
	
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
							En esta sección se mostrarán algunos de los proyectos en los que
							he trabajado, tanto personales como académicos. Estos proyectos
							reflejan mi pasión por la programación y mi compromiso con el
							aprendizaje continuo. A través de estos proyectos, he podido
							aplicar mis habilidades técnicas y resolver problemas reales, lo
							que me ha permitido crecer como desarrollador.
						</p>
						<hr />
						<div
							style={{ height: 'auto', color:'white' }}
							className="card col-11 col-md-8 col-lg-6 mx-auto d-flex justify-content-center align-items-center"
						>
							{mostrar === 1 && (
								<div className="">
									<img
										id="img-proyect"
										src="/img/imagenR-a-M.png"
										alt="proyecto 1"
										className="img-fluid rounded-3 mb-3"
									/>
									<h5 className="card-title fw-bold">Rick and Morty API</h5>
									<p className="card-text small">
										Aplicación web desarrollada con React, consumiendo el API de
										Rick and Morty.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://rick-and-morty-api-andrew.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/rick-and-morty-api"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
								</div>
							)}

							{mostrar === 2 && (
								<div className="">
									<img
										id="img-proyect"
										src="/img/img-F-app.png"
										alt="proyecto 2"
										className="img-fluid rounded-3 mb-3"
									/>
									<h5 className="card-title fw-bold">
										Frases motivacionales APP
									</h5>
									<p className="card-text small">
										Aplicación web creada con React que muestra frases
										motivacionales.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://motivational-frases.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/frases-app"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
								</div>
							)}

							{mostrar === 3 && (
								<div className="text-center">
									<img
										id="img-proyect"
										src="/img/imgW-app.png"
										alt="proyecto 3"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Weather APP</h5>
									<p className="card-text small">
										Aplicación del clima con información de cualquier ciudad.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://wheaterclima-app.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/clima-App"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
								</div>
							)}

							{mostrar === 4 && (
								<div className="text-center">
									<img
										id="img-proyect"
										src="/img/pokemon.jpg"
										alt="proyecto 4"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Poke-Dex APP</h5>
									<p className="card-text small">
										App en TypeScript con información detallada de Pokémon.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://pokedexapi-aa.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/pokedex-app"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
								</div>
							)}

							{mostrar === 5 && (
								<div className="text-center">
									<img
										id="img-proyect"
										src="/img/latam45.png"
										alt="proyecto 5"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Latam 45 APP</h5>
									<p className="card-text small">
										Plataforma de monitoreo financiero en tiempo real
										(simulado).
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://latam45.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/Latam45"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
								</div>
							)}

							{mostrar === 6 && (
								<div className="text-center">
									<img
										id="img-proyect"
										src="/img/concesionario.png"
										alt="proyecto 6"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Concesionario</h5>
									<p className="card-text small">
										Proyecto full stack con Node.js, PostgreSQL y React.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://andres-concesionario.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/concesionarioF"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
								</div>
							)}

							{mostrar === 7 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pNotas.png"
										alt="proyecto 7"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Cuaderno de Notas</h5>
									<p className="card-text small">
										Proyecto full stack con Node.js, PostgreSQL y React + typeScript.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://andres-notas.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/notas"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}
							{mostrar === 8 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pAndresgpt.png"
										alt="proyecto 8"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">AndresGPT</h5>
									<p className="card-text small">
										Proyecto Simulacion de IA utilizando Gemini.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://andreschatbot.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/AndresChat2"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}
							{mostrar === 9 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pMilo.png"
										alt="proyecto 9"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Milo-j-Music</h5>
									<p className="card-text small">
										Proyecto para escuchar y visualizar la musica del cantante milo j.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://milo-j-music.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/MiloMusic"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}
							{mostrar === 10 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pIreth.png"
										alt="proyecto 10"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Portafolio</h5>
									<p className="card-text small">
										Proyecto en vanilla de un portafolio online.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://portafolioireth.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/portafolioIreth"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}

							{mostrar === 11 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pCalc.png"
										alt="proyecto 11"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">calculadora</h5>
									<p className="card-text small">
										Proyecto de ua calculadora 100% funcional.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://calculadora-andres.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/calculadora"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}

							{mostrar === 12 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pSnake.png"
										alt="proyecto 12"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Snake game</h5>
									<p className="card-text small">
										Replica del Famoso Juego de la Serpiente.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://snakegame-andres.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/juegoSerpiente"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}

							{mostrar === 13 &&( 
							<div>
								<img
										id="img-proyect"
										src="/img/pTictactoe.png"
										alt="proyecto 13"
										className="img-fluid rounded-3 mb-3 shadow-sm"
									/>
									<h5 className="card-title fw-bold">Tic Tac Toe</h5>
									<p className="card-text small">
										Replica del Famoso Juego Tic Tac Toe.
									</p>
									<div className="d-flex justify-content-center gap-2 mt-2">
										<a
											href="https://tictactoe-andres.netlify.app/"
											target="_blank"
											className="btn btn-primary btn-sm rounded-pill px-3"
										>
											Ver proyecto
										</a>
										<a
											href="https://github.com/elcasti04/tictactoe"
											target="_blank"
											className="btn btn-outline-primary btn-sm rounded-pill px-3"
										>
											Repositorio
										</a>
									</div>
							</div>)}



















							
							{/*Botones */}
							<div className='d-flex gap-4'>
								<button
								className="btn btn-dark mt-4 px-4 rounded-pill"
								onClick={() => {
									if (mostrar >= mostrar) {
										setMostrar(mostrar - 1);
									}
								}}
							>
								Anterior
							</button>

							<button
								className="btn btn-dark mt-4 px-4 rounded-pill"
								onClick={() => {
									if (mostrar <= mostrar) {
										setMostrar(mostrar + 1);
									}
								}}
							>
								Siguiente
							</button>
						{cambiar()}

							</div>
						</div>
					</div>
					<hr />
				</main>
			</div>
		</>
	);
};

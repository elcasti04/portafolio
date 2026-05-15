import './page.css/habilidades.css'
export const Habilidades = () => {
	return (
		<>
			<div id="habilidades">
				<main
			
				style={{ minHeight: '95vh' }}
				className="habilidades section-block container-fluid row col-12 p-4"
			>
				<h2 className="text-center">Habilidades</h2>
				<div className="col-12 col-md-12 col-lg-12">
					<h3 className="text-center">Habilidades Técnicas</h3>
					<ul className="list-unstiled text-center d-flex flex-wrap justify-content-center gap-2">
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								style={{backgroundColor:'white'}}
								width="50"
								height="50"
								src="https://img.icons8.com/?size=100&id=1043&format=png&color=000000"
								alt="html-icono"
								className="mb-3"
							/>
							<h5 className="card-title">HTML</h5>
							<p className="card-text">
								Tengo un sólido dominio de HTML5, lo que me permite estructurar
								páginas web de manera clara, semántica y accesible.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								src="https://img.icons8.com/ios/50/css3.png"
								alt="css3-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">CSS</h5>
							<p className="card-text">
								Disfruto trabajar con CSS, ya que me permite dar estilo, color y
								vida a las páginas con tipografías modernas y efectos dinámicos.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								src="/img/iconos/icons8-react-native.gif"
								alt="react-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">React</h5>
							<p className="card-text">
								Manejo React.js para crear interfaces modernas, modulares y
								eficientes con componentes reutilizables y hooks.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="50"
								height="50"
								src="https://img.icons8.com/windows/50/node-js.png"
								alt="node-js"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">Node.js</h5>
							<p className="card-text">
								Con Node.js desarrollo el lado del servidor, creando
								aplicaciones rápidas, eficientes y escalables.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="48"
								height="48"
								src="https://img.icons8.com/?size=100&id=39853&format=png&color=000000"
								alt="JS-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">JavaScript</h5>
							<p className="card-text">
								Con JavaScript hago que las páginas sean interactivas,
								ofreciendo experiencias dinámicas y fluidas.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="48"
								height="48"
								src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
								alt="express-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">Express</h5>
							<p className="card-text">
								Manejo Express.js para crear APIs rápidas y seguras.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="48"
								height="48"
								src="https://img.icons8.com/?size=100&id=eJCmZxqMUnt8&format=png&color=000000"
								alt="postgre-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">Postgre-SQL</h5>
							<p className="card-text">
								Manejo PostgreSQL para bases de datos relacionales eficientes.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="48"
								height="48"
								src="https://img.icons8.com/?size=100&id=WC9GOvjtKVuH&format=png&color=000000"
								alt="mongo-icono"
								style={{backgroundColor:'white'}}
								className="mb-3"
							/>
							<h5 className="card-title">MongoDB</h5>
							<p className="card-text">
								Manejo MongoDB para bases de datos NoSQL flexibles.
							</p>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="48"
								height="48"
								src="https://img.icons8.com/?size=100&id=38388&format=png&color=000000"
								alt="git-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">GitHub</h5>
							<p className="card-text">
								Manejo GitHub para control de versiones y trabajo colaborativo.
							</p>
						</li>
					</ul>
				</div>
				<div className="">
					<h3 className="text-center">Habilidades blandas</h3>
					<ul className="row col-12 list-unstiled text-center d-flex flex-wrap justify-content-center gap-2">
						<li className="hb border col-6 col-md-4 col-lg-4">
							Comunicación efectiva
						</li>
						<li className="hb border col-6 col-md-4 col-lg-4">
							Resolución de problemas
						</li>
						<li className="hb border col-6 col-md-4 col-lg-4">Adaptabilidad</li>
						<li className="hb border col-6 col-md-4 col-lg-4">Gestión del tiempo</li>
					</ul>
				</div>
				<hr />
			</main>
			</div>
		</>
	);
};

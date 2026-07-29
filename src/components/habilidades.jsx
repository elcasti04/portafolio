import './style/habilidades.css'
export const Habilidades = () => {
	return (
		<>
			<div id="habilidades">
				<main
			
				style={{ minHeight: '100vh' }}
				className="habilidades section-block container-fluid row col-12 p-4"
			>
				<div className="col-12 col-md-12 col-lg-12">
					<h3 className="text-center">Habilidades</h3>
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
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								src="https://img.icons8.com/ios/50/css3.png"
								alt="css3-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">CSS</h5>
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								src="/img/iconos/icons8-react-native.gif"
								alt="react-icono"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">React</h5>
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
						</li>
						<li className="card col-12 col-md-6 col-lg-2 justify-content-center align-items-center">
							<img
								width="48"
								height="48"
								src="https://img.icons8.com/ios/50/php.png" alt="php"
								className="mb-3"
								style={{backgroundColor:'white'}}
							/>
							<h5 className="card-title">PHP</h5>
						</li>
					</ul>
				</div>
				<hr />
			</main>
			</div>
		</>
	);
};

import { useNavigate } from 'react-router-dom'
export const NavBar = () => {


	const navigate = useNavigate()

	function cambiarModo () {
		document.body.classList.toggle('light-mode')
		document.body.classList.contains('light-mode')
			? document.getElementById('modo-claro').innerHTML= '🌙'
			: document.getElementById('modo-claro').innerHTML= '🌞'

	}

	return (
		<>
			<div className="navbar-style container-fluid d-flex justify-content-between align-items-center row col-12 ">
				<nav className="navbar-main container row col-10 d-flex text-center">
					<ul className=" d-flex me-auto col-10 text-center">
						<li
							className=" nav-item"
						>
							<a
								className="nav-link"
								href="#inicio"
								
							>
								Inicio
							</a>
						</li>
						<li className="col-2 nav-item">
							<a className="nav-link" href="#acerca-de-mi">
								Acerca de mí
							</a>
						</li>
						<li className="col-2 nav-item">
							<a className="nav-link" href="#habilidades">
								Habilidades
							</a>
						</li>
						<li className="col-2 nav-item">
							<a className="nav-link" href="#proyectos">
								Proyectos
							</a>
						</li>
						<li className="col-2 nav-item">
							<a className="nav-link" href="#contacto">
								Contacto
							</a>
						</li>
					</ul>
				</nav>
				<div className="col-2 d-flex">
					<button
						id="modo-claro"
						type="button"
						className="btn btn-warning text-dark me-2"
						onClick={cambiarModo}
					>
						🌞
					</button>
					
				</div>
			</div>
		</>
	);
};

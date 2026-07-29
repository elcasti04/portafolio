import './style/navbar.css'
import { useState, useEffect } from 'react';

export const NavBar = () => {

	const [estado, setEstado] = useState('oscuro');
	const [menuAbierto, setMenuAbierto] = useState(false);

	useEffect(() => {
		if (estado === "claro") {
			document.body.classList.add('light-mode');
		} else {
			document.body.classList.remove('light-mode');
		}
	}, [estado]);

	const cerrarMenu = () => setMenuAbierto(false);

	return (
		<>
			<nav className="nav">

				<a href="#inicio">
					<img src="/img/logo2.png" alt="logo" />
				</a>

				<div
					className={`hamburguesa ${menuAbierto ? 'activo' : ''}`}
					onClick={() => setMenuAbierto(!menuAbierto)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<ul className={menuAbierto ? 'menu activo' : 'menu'}>

					<li className="nav-item">
						<a
							className="nav-link"
							href="#inicio"
							onClick={cerrarMenu}
						>
							Inicio
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link"
							href="#habilidades"
							onClick={cerrarMenu}
						>
							Habilidades
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link"
							href="#proyectos"
							onClick={cerrarMenu}
						>
							Proyectos
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link"
							href="#contacto"
							onClick={cerrarMenu}
						>
							Contacto
						</a>
					</li>

					<li>
						<button
							onClick={() =>
								setEstado(
									estado === 'claro'
										? 'oscuro'
										: 'claro'
								)
							}
						>
							{estado === 'claro' ? '🌙' : '☀'}
						</button>
					</li>

				</ul>

			</nav>
		</>
	);
};
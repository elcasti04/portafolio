import "./style/footer.css";

export const Footer = () => {
	return (
		<footer className="site-footer">

			<div className="footer-container">

				<div className="footer-logo">
					<img src="/img/logo2.png" alt="Andrés Arturo Castro" />
					<h3>Andrés Arturo Castro</h3>
					<p>Full Stack Web Developer</p>
				</div>

				<div className="footer-links">
					<h4>Enlaces</h4>

					<a href="#inicio">Inicio</a>
					<a href="#acerca-de-mi">Acerca de mí</a>
					<a href="#habilidades">Habilidades</a>
					<a href="#proyectos">Proyectos</a>
					<a href="#contacto">Contacto</a>
				</div>

				<div className="footer-contacto">
					<h4>Contacto</h4>

					<p>📧 andresppemma@gmail.com</p>
					<p>📱 +57 312 774 3932</p>
					<p>📍 Colombia</p>
				</div>

			</div>

			<hr />

			<div className="footer-copy">
				<p>
					© 2026 Andrés Arturo Castro Orozco · Todos los derechos reservados.
				</p>

				<p>
					Desarrollado con React y JSX.
				</p>
			</div>

		</footer>
	);
};

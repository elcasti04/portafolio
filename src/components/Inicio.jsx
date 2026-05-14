export const Inicio = () => {
	return (
		<div id="inicio">
			<main
			className="inicio container-fluid py-5"
			
			style={{ minHeight: '95vh' }}
		>
			<div className="container">
				<div className="row align-items-center">
					{/* IZQUIERDA */}
					<div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
						<h5 className="text-uppercase text-secondary mb-3">
							Desarrollador Web
						</h5>

						<div className="d-flex justify-content-center mb-3">
							<img
								className="img-fluid rounded-circle shadow"
								style={{ maxWidth: '220px' }}
								src="../src/assets/image/perfil2.jpg"
								alt="foto de perfil"
							/>
						</div>

						<h5 className="fw-bold">Programador Full Stack</h5>
					</div>

					{/* DERECHA */}
					<div className="col-12 col-lg-7 text-center text-lg-start">
						<h2 className="fw-bold mb-3">Descripción</h2>
						<hr className="w-25 mx-auto mx-lg-0" />

						<h3 className="fw-semibold">Andres Arturo Castro Orozco</h3>

						<h5 className="mt-3 text-secondary">
							Desarrollador Web Full Stack y estudiante de Ingeniería de
							Software
						</h5>

						<p className="mt-3">
							<strong>
								Desarrollador web y estudiante de Ingeniería de Software
							</strong>{' '}
							con conocimientos en{' '}
							<i>
								HTML, CSS, JavaScript, React, NodeJs, Angular, Express,
								PostgreSQL, MongoDB, GitHub
							</i>{' '}
							y más. Me interesa participar en proyectos que impulsen mi
							crecimiento profesional y contribuyan con soluciones innovadoras.
						</p>
					</div>
				</div>
			</div>
		</main>
		</div>
	);
};

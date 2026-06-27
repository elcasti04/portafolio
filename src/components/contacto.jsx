import './style/contacto.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const modalElement = document.getElementById('dialogo-mensaje');
		let modal = null;

		if (window.bootstrap && modalElement) {
			const modal = new window.bootstrap.Modal(modalElement);
			modal?.show();
		}

		if (form.name && form.email && form.message) {
			emailjs
				.send('service_4l0rdvp', 'template_kdtysec', form, 'jxVCfyca7qoNr7htn')
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						setForm({ name: '', email: '', message: '' });
						modal.show();
					},
					(error) => {
						console.error('FAILED...', error);
						modal.show();
					},
				);
		} else {
			console.warn('Completa todos los campos');
			modal.show();
		}
	};

	return (
		<div id="contacto">
      <main 
    style={{minHeight:'95vh'}}
    
    className="contacto-section container-fluid d-flex flex-column align-items-center text-center py-5">
			<h2 className="mb-5">Contacto</h2>

			{/* LINKS */}
			<div className="row w-100 justify-content-center mb-4">
				<ul className="d-flex flex-wrap justify-content-center gap-3 list-unstyled">
					<li>
						<a
							href="mailto:andresppemma@gmail.com"
							target="_blank"
							className="btn btn-outline-primary"
						>
							<img
								width="30"
								src="https://img.icons8.com/ios/50/mail.png"
								alt="mail"
								className="me-2"
							/>
							Email
						</a>
					</li>

					<li>
						<a
							href="tel:+573127743932"
							target="_blank"
							className="btn btn-outline-primary"
						>
							<img
								width="30"
								src="https://img.icons8.com/ios/50/phone--v1.png"
								alt="phone"
								className="me-2"
							/>
							Teléfono
						</a>
					</li>

					<li>
						<a
							href="https://www.linkedin.com/in/andres-castro-b64271255/"
							target="_blank"
							className="btn btn-outline-primary"
						>
							<img
								width="30"
								src="https://img.icons8.com/ios/50/linkedin.png"
								alt="linkedin"
								className="me-2"
							/>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>

			{/* FORMULARIO */}
			<div className="col-12 col-md-6">
				<form onSubmit={handleSubmit} className="p-4 border rounded">
					<h2 className="mb-4">Ponte en contacto conmigo</h2>

					<div className="mb-3 text-start">
						<label className="form-label">
							<strong>Nombre:</strong>
						</label>
						<input
							name="name"
							className="form-control"
							type="text"
							placeholder="Tu nombre"
							value={form.name}
							onChange={handleChange}
						/>
					</div>

					<div className="mb-3 text-start">
						<label className="form-label">
							<strong>Email:</strong>
						</label>
						<input
							name="email"
							className="form-control"
							type="email"
							placeholder="tu-email@ejemplo.com"
							value={form.email}
							onChange={handleChange}
						/>
					</div>

					<div className="mb-3 text-start">
						<label className="form-label">
							<strong>Mensaje:</strong>
						</label>
						<textarea
							name="message"
							className="form-control"
							rows="4"
							placeholder="Escribe tu mensaje..."
							value={form.message}
							onChange={handleChange}
						/>
					</div>

					<div className="d-grid">
						<button type="submit" className="btn btn-primary btn-lg">
							Enviar
						</button>
					</div>
				</form>
			</div>

			{/* MODAL */}
			<div
				className="modal fade"
				id="dialogo-mensaje"
				tabIndex="-1"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Mensaje</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
							></button>
						</div>
						<div className="modal-body">Pronto responderemos su mensaje.</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
    </div>
	);
};

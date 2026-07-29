import './style/testimonios.css'

const Testimonios = () => {
    const testimonios = [
        {
            nombreProyecto: 'Iglesia Evangelica Jesucristo Rey Eterno',
            calificacion: '5',
            testimonio:`Nuestra comunidad quedó completamente satisfecha con el trabajo 
            realizado. El sitio web superó nuestras expectativas tanto en diseño como en 
            funcionalidad, ofreciendo una experiencia moderna, rápida y fácil de usar. 
            Andrés demostró compromiso, responsabilidad y una excelente disposición 
            durante todo el proceso de desarrollo, atendiendo nuestras necesidades y 
            realizando los ajustes necesarios hasta lograr el resultado esperado. 
            Como iglesia, recomendamos ampliamente su trabajo y agradecemos el esfuerzo y la 
            dedicación invertidos en este proyecto.`,
            autor:'Marco Orozco (Pastor)',
            contacto:'(+57) 310 764 7687'
        },
        {
            nombreProyecto: 'Iglesia Casa de Adoracion Roca Firme',
            calificacion: '5',
            testimonio:`Estamos muy agradecidos por el excelente trabajo desarrollado para 
            nuestra iglesia. Desde el diseño hasta la implementación, el proyecto reflejó 
            profesionalismo, creatividad y atención a cada detalle. La página web representa 
            fielmente nuestra identidad y facilita que las personas conozcan nuestra 
            congregación, ministerios y actividades. Valoramos la comunicación constante, 
            el cumplimiento de los tiempos acordados y la calidad del resultado final. Sin duda,
            recomendamos sus servicios para el desarrollo de proyectos web.`,
            autor:'Elimey de Jesús Orozco (encargada)',
            contacto:'(+57) 312 203 3342'
        }
    ]
    return (
        <section id="testimonios" className="testimonios">
            
            <div className="titulo-testimonios">
                <h2>Testimonios</h2>
                <p>
                    La satisfacción de mis clientes es el mejor respaldo de mi trabajo.
                    Estas son algunas de las opiniones de quienes confiaron en mí para
                    desarrollar sus proyectos web.
                </p>
            </div>
            
            <div className="testimonios-container">
                {testimonios.map((testimonio, index) => (
                    <div className="card-testimonio" key={index}>
                
                        <h3>{testimonio.nombreProyecto}</h3>
                        <div className="comillas">❝</div>
                        <p className="descripcion">
                            {testimonio.testimonio}
                        </p>
                        <div className="estrellas">
                            {"⭐".repeat(Number(testimonio.calificacion))}
                        </div>
                
                        <div className="autor">
                            <h4>{testimonio.autor}</h4>
                            <span>{testimonio.contacto}</span>
                        </div>

                
                    </div>
                ))}
            </div>
            
            <hr />
            
        </section>
    )
}

export default Testimonios
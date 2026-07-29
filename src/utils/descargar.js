    export const descargar = function () {
        const lang = document.documentElement.lang
        const cvUrl = 
        lang === 'en' ? "/documents/CurrículumCv.pdf" : "/documents/CurrículumEngCv.pdf"
        const link = document.createElement('a')
        link.href = cvUrl 
        link.download = 'Currículum.Cv-Andres-Castro.pdf'
       document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
    }
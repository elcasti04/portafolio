import { useState } from 'react'
import './page.css/chatbot.css'


export const ChatBot = () => {
    const API_KEY = import.meta.env.VITE_API_URL
    const [loader, setLoader] = useState(false)
    const [abierto, setAbierto] = useState(false)
    const [mensajes, setMensajes] = useState([
        { texto: 'Hola 😁, soy el asistente virtual. ¿Como puedo ayudarte?', tipo: 'bot'}
    ])
    const [input, setInput] = useState('')

    const toogleChat = () => {
        setAbierto(!abierto)
    }
    
   const enviarMsg = async () => {
    if (!input.trim()) return;

    const nuevoMsg = { texto: input, tipo: 'usuario' };
    setMensajes((prev) => [...prev, nuevoMsg]);

    const MsgUser = input;
    setInput('');

    setLoader(true)

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: MsgUser }]
                    }
                ]
            })
        });

        console.log("STATUS:", res.status); 

        const data = await res.json();
       
        console.log("DATA:", data);

        if (!res.ok) {
            throw new Error("Error en API");
        }

        
        const textoBot =
            data.candidates?.[0]?.content?.parts?.[0]?.text || "Sin respuesta";

        setMensajes((prev) => [
            ...prev,
            { texto: textoBot, tipo: 'bot' }
        ]);

    } catch (error) {
        console.error("ERROR REAL:", error); 

        setMensajes((prev) => [
            ...prev,
            { texto: 'Error conectando', tipo: 'bot' }
        ]);
    } finally {
        setLoader(false)
    }
};
    
    return (
        <>
        <div className="chatbot-toggle" onClick={toogleChat}>Asist</div>
        {abierto && (
            <div className="chatbot">
                <div className="chat-header">Asistente
                    <span style={{cursor:'pointer'}} onClick={toogleChat}>X</span>
                </div>

                <div className="chat-body">
                    {mensajes.map((msg, i) => (
                        <div
                        key={i}
                        className={msg.tipo === 'bot' ? 'bot' : 'usuario'}>
                        {msg.texto}
                        </div>
                    ))}
                    {loader && (<div className="loader">cargando...</div>)}
                </div>
                <div className="chat-footer">
                    <input type="text"
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Escribeme tu duda...'
                    onKeyDown={(e) => e.key === 'Enter' && enviarMsg()}/>
                    <button onClick={enviarMsg}>Enviar</button>
                </div>
            </div>
        )}
        </>
    )
}
import React, { useRef } from "react"
import emailjs from "emailjs-com"

export default function ContactForm() {
	const form = useRef()
	

  const sendEmail = (e) => {
		e.preventDefault()
		
    emailjs.sendForm(
      'service_jr8fapr',
      'template_684bxfr',
      form.current,
      'uCsRO-b0BG_REg7NC'
    ).then(
      (result) => {
        alert("Mensaje Enviado con exito")
      },
      (error) => {
        alert("Error al enviar " + error.text)
      }
    )
  }
  return(
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
			<div className="grid grid-cols-1 md:grid-cols-2 text-left gap-x-4">
				<div className=" flex flex-col gap-y-1">
					<label className="font-semibold text-sm" htmlFor="nombre">Nombre:</label>
					<input className="focus:border-none py-2 px-3 rounded-lg bg-gray-700" type="text" name="nombre" id="nombre"/>
				</div>
				<div className=" flex flex-col gap-y-1">
					<label className="font-semibold text-sm" htmlFor="apellido">Apellido:</label>
					<input className="focus:border-none py-2 px-3 rounded-lg bg-gray-700" type="text" name="apellido" id="apellido" />
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 text-left gap-x-4">
				<div className=" flex flex-col gap-y-1">
					<label className="font-semibold text-sm" htmlFor="telefono">Teléfono:</label>
					<input className="focus:border-none py-2 px-3 rounded-lg bg-gray-700" type="text" name="telefono" id="telefono" />
				</div>
				<div className=" flex flex-col gap-y-1">
					<label className="font-semibold text-sm" htmlFor="asunto">Asunto:</label>
					<input className="focus:border-none py-2 px-3 rounded-lg bg-gray-700" type="text" name="asunto" id="asunto" />
				</div>
			</div>
		  <div className="text-left flex flex-col">
				<label htmlFor="mensaje">Mensaje</label>
				<textarea name="mensaje" id="mensaje" cols="4" rows="4" placeholder="En que te puedo ayudar..." className=" py-2 px-4 bg-gray-700 rounded-lg"></textarea>
			</div>
			<div className="w-full flex flex-col justify-start items-left">
				<button type="submit" className="bg-[#C58846] w-24 py-2 rounded-lg hover:text-black cursor-pointer font-semibold transition-all">Enviar</button>
			</div>
		</form>
  )
}
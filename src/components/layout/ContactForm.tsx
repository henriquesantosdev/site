import { Check, Send } from "lucide-react"
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import ringSpin from "/90-ring-spin.svg"

export const ContactForm = () => {

  const [successAlert, setSuccessAlert] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const name = data.get('name')?.toString()
    const email = data.get('email')?.toString()
    const message = data.get('message')?.toString()

    const form = event.target as HTMLFormElement

    const webhookUrl = "https://discord.com/api/webhooks/1333980382441246770/iAZOpQnyT6to10fmJMpD_pNf5N8kAeUNBnKKTqpGgKgKch8QBZmajnQOiuR1oGv_pQyR";

    const payload = {
      content: `**Novo contato recebido!**\n**Nome:** ${name}\n**E-mail:** ${email}\n**Mensagem:** ${message}`,
    };

    try {
      setLoading(true)
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setLoading(false)
        setSuccessAlert(true)
        form.reset();
      } else {
        setLoading(false)
        setSuccessAlert(false)
      }
    } catch (error) {
      console.error("Erro ao enviar o contato:", error);
    }
  };

  return (
    <section id="contato" className="mt-8 p-4 rounded-xl text-white font-bold flex flex-col">
      <h2 className="font-jet text-xl text-left text-sky-500 dark:text-blue-700">/Vamos trabalhar juntos?</h2>

      <div>
        <form onSubmit={submitContactForm} className="flex flex-col gap-4 min-w-16 mt-6">
          <div className="flex gap-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Nome"
              className="p-4 w-full rounded-md font-jet bg-bluev7 placeholder:text-sky-800 placeholder:font-jet placeholder:font-normal text-sky-500 focus:outline-none focus:outline-1 focus:outline-sky-500 focus:outline-offset-2"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="E-mail"
              className="p-4 w-full rounded-md font-jet bg-bluev7 placeholder:text-sky-300/30 placeholder:font-jet placeholder:font-normal text-sky-500 focus:outline-none focus:outline-1 focus:outline-sky-500 focus:outline-offset-2"
            />
          </div>

          <textarea
            required
            name="message"
            placeholder="Mensagem"
            className="p-4 h-36 w-full rounded-md font-jet bg-bluev7 placeholder:text-sky-300/30 placeholder:font-jet placeholder:font-normal text-sky-500 focus:outline-none focus:outline-1 focus:outline-sky-500 focus:outline-offset-2">
          </textarea>

          {successAlert ? (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 dark:hover:bg-green-700 dark:bg-green-600 dark:text-white hover:text-white transition duration-100 text-green-900 font-semibold font-jet p-4 w-full rounded-lg flex gap-2 items-center justify-center">
              <Check className="size-5" />
              <span>Enviado com sucesso</span>
            </button>
          ) : (

            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 dark:hover:bg-blue-600 dark:bg-blue-800 dark:text-white hover:text-white transition duration-100 text-bluev7 font-semibold font-jet p-4 w-full rounded-lg flex gap-2 items-center justify-center">
              {loading ? (
                <div className="flex gap-2 text-white">
                  <img src={ringSpin} alt="loading icon" />
                  <span>Enviando...</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Send className="size-5" />
                  <span>Enviar</span>
                </div>
              )}
            </button>
          )}

        </form>

        <div className="text-green-500 mt-4 text-center">
        </div>
      </div>

      <div>
        <p className="font-jet text-2xl text-center dark:text-bluev7">ou</p>
      </div>

      <div className="flex flex-col mt-4">
        <a href="https://www.linkedin.com/in/henrique-santos-497b0026a/" target="_blank" className="font-jet bg-linkedin w-full p-4 rounded-lg flex items-center justify-center gap-2">
          <FaLinkedin className="size-6" />
          <span>Linkedin</span>
        </a>
      </div>
    </section>
  )
}
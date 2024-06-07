import { useState } from "react";
import "./sugestoes.css";

export default function Sugestoes() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Exibe a caixa de confirmação
    const isConfirmed = window.confirm(
      "Sua sugestão foi aceita com sucesso. Deseja continuar?",
    );
    if (isConfirmed) {
      // Limpa o formulário após a confirmação
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <h1>DEIXE SUA SUGESTÃO</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ESCREVA AQUI SUA SUGESTÃO"
          />
        </div>
        <input type="submit" value="ENVIAR" />
      </form>
    </div>
  );
}

'use client';
import { useState } from 'react';
import './form.css';
import { motion } from 'framer-motion';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // try {
    //   const result = await emailjs.sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     formRef.current,
    //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    //   );
    //   setLoading(false);

    //   if (result) {
    //     setForm({
    //       name: '',
    //       email: '',
    //       message: '',
    //     });
    //     alert('Thank you. I will get back to you as soon as possible.');
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   console.error(error);

    //   alert('Ahh, something went wrong. Please try again.');
    // }
  };

  return (
    <section className="form">
      <form
        action=""
        id="form"
        className="form__container"
        onSubmit={handleSubmit}
      >
        <h1 className="form__title">Regístrate GRATIS</h1>
        <div className="form__input-container">
          <div className="form__overlay" />
          <label htmlFor="name" className="form__label">
            {' '}
            Nombre:{' '}
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Escribe tu nombre aquí"
            onChange={handleChange}
          />
          <p className="form__error-msg">Escribe tu nombre correctamente.</p>
          <label htmlFor="email" className="form__label">
            {' '}
            Email:{' '}
          </label>
          <input
            type="email"
            className="form__input"
            id="email"
            placeholder="Coloca tu email para mandarte la invitación"
            onChange={handleChange}
          />
          <p className="form__error-msg">Escribe un email válido.</p>
          <motion.button
            type="submit"
            className="form__btn"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            APARTA MI LUGAR
          </motion.button>
        </div>
      </form>
      <p className="form__credits">Fotografía: Carlos Alvar</p>
      <p className="form__credits">Dirección escénica: Julián Reyes Botello</p>
    </section>
  );
}

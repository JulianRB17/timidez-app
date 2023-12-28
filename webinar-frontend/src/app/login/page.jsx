'use client';
import Footer from '@/components/footer/Footer';
import { useState, useEffect } from 'react';
import './login.css';
import Loader from '@/components/loader/Loader';
import { authorize, checkToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    (async function () {
      try {
        if (token) {
          setLoading(true);
          const res = await checkToken(token);
          if (res) {
            setLoading(false);
            router.replace('/admin');
          } else {
            setLoading(false);
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [router]);

  const handleLogin = async function () {
    try {
      setLoading(true);
      const data = await authorize(formValues);
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        setLoading(false);
        router.replace('/admin');
      } else {
        throw new Error('Algo salió mal');
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
    console.log(formValues);
    setValidForm(target.form.checkValidity());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setFormValues({
        email: '',
        password: '',
      });
      await handleLogin();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Ahh, algo salió malo, por favor vuelve a intentarlo.');
    }
  };

  return (
    <>
      <section className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__element">
            <p className="login__label">Email</p>
            <input
              type="email"
              className="login__input"
              id="email"
              onChange={handleChange}
              maxLength={30}
              required
              name="email"
              value={formValues.email}
            />
          </div>
          <div className="login__element">
            <p className="login__label">Contraseña</p>
            <input
              type="password"
              className="login__input"
              id="password"
              onChange={handleChange}
              maxLength={25}
              minLength={3}
              required
              value={formValues.password}
            />
          </div>
          <button
            className={`login__btn ${isValidForm || 'login__btn_inactive'}`}
            disabled={!isValidForm}
            type="submit"
          >
            {loading ? <Loader /> : 'ENVIAR'}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

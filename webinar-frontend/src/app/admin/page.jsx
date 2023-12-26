'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Email from './components/email/Email';
import Numbers from './components/numbers/Numbers';
import { checkToken } from '@/utils/auth';
import BtnLogout from './components/btnLogout/BtnLogout';
import api from '@/utils/api';
import Loader from '@/components/loader/Loader';

export default function Admin() {
  const [jwt, setJwt] = useState('');
  const [loading, setLoading] = useState(true);
  const [numbers, setNumbers] = useState({
    all: '',
    active: '',
    engaged: '',
    client: '',
    admin: '',
  });
  const [emailFormValues, setEmailFormValues] = useState({
    subject: '',
    htmlBody: '',
  });
  const [isValidForm, setValidForm] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    (async function () {
      try {
        if (token) {
          const res = await checkToken(token);
          if (res) {
            setJwt(token);
            await api.getUserInfo(token);
            const numbers = await api.getNumbers();
            setNumbers(numbers);
            setLoading(false);
          } else {
            router.replace('/login');
          }
        } else {
          router.replace('/login');
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [router]);

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;
    setEmailFormValues({
      ...emailFormValues,
      [id]: value,
    });
    setValidForm(target.form.checkValidity());
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailLoading(true);
    const result = await api.postEmail(emailFormValues);
    try {
      if (result) {
        setEmailFormValues({
          htmlBody: '',
          subject: '',
        });
      }
      setEmailLoading(false);
    } catch (error) {
      setEmailLoading(false);
      console.error(error);
      alert('Ahh, algo salió mal, por favor vuelve a intentarlo.');
    }
  };

  function handleLogout(e) {
    e.preventDefault();
    setJwt('');
    localStorage.removeItem('jwt');
    router.replace('/login');
  }

  return (
    <section className="admin">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Numbers numbers={numbers} loading={loading} />
          <Email
            emailLoading={emailLoading}
            isValidForm={isValidForm}
            onChange={handleChange}
            onSubmit={handleEmailSubmit}
          />
          <BtnLogout onClick={handleLogout} />
        </>
      )}
    </section>
  );
}

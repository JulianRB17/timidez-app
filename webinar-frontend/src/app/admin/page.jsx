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

  function handleLogout(e) {
    e.preventDefault();
    // setJwt('');
    localStorage.removeItem('jwt');
    router.replace('/login');
  }

  return (
    <section className="admin">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Numbers api={api} />
          <Email api={api} />
          <BtnLogout onClick={handleLogout} />
        </>
      )}
    </section>
  );
}

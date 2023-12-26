import { useEffect, useState } from 'react';
import Loader from '@/components/loader/Loader';

export default function Numbers({ api }) {
  const [total, setTotal] = useState('');
  const [active, setActive] = useState('');
  const [engaged, setEngaged] = useState('');
  const [clients, setClients] = useState('');
  const [admins, setAdmins] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      {
        setLoading(true);
        const totalNumbers = await api.getUsers().length;
        const activeNumbers = await api.getActiveUsers().length;
        const engagedNumbers = await api.getEngagedUsers().length;
        const clientNumbers = await api.getClientUsers().length;
        const adminNumbers = await api.getAdminUsers().length;
        setTotal(totalNumbers);
        setActive(activeNumbers);
        setEngaged(engagedNumbers);
        setClients(clientNumbers);
        setAdmins(adminNumbers);
      }
    })([]);
  });

  return (
    <section className="numbers">
      <div className="numbers__element">
        <p className="numbers__label">Total</p>
        <div className="numbers__number">{loading ? <Loader /> : total}</div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Active</p>
        <div className="numbers__number">{loading ? <Loader /> : active}</div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Engaged</p>
        <div className="numbers__number">{loading ? <Loader /> : engaged}</div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Clients</p>
        <div className="numbers__number">{loading ? <Loader /> : clients}</div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Admin</p>
        <div className="numbers__number">{loading ? <Loader /> : admins}</div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import Loader from '@/components/loader/Loader';

export default function Email() {
  const [formValues, setFormValues] = useState({
    subject: '',
    htmlBody: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
    setValidForm(target.form.checkValidity());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = 'e';
    try {
      if (result) {
        setFormValues({
          htmlBody: '',
          subject: '',
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Ahh, algo salió mal, por favor vuelve a intentarlo.');
    }
  };

  return (
    <form action="" className="admin__mail" onSubmit={handleSubmit}>
      <div className="admin__element">
        <p className="admin__form-label">Email</p>
        <div className="admin__element">
          <p className="admin__label">Asunto</p>
          <input
            type="text"
            className="admin__input"
            id="subject"
            onChange={handleChange}
            required
          />
        </div>
        <div className="admin__element">
          <p className="admin__label">Html</p>
          <textarea
            className="admin__input"
            id="htmlBody"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`admin__btn ${isValidForm || 'admin__btn-inactive'}`}
          disabled={!isValidForm}
        >
          {loading ? <Loader /> : 'APARTA MI LUGAR'}
        </button>
      </div>
    </form>
  );
}

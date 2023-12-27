import Loader from '@/components/loader/Loader';
import './email.css';

export default function Email({
  emailLoading,
  isValidForm,
  onChange,
  onSubmit,
  mailSent,
  mailSuccesfullySent,
  setMailSent,
}) {
  const RenderBtn = function () {
    if (!mailSent) {
      return (
        <button
          type="submit"
          className={`email__btn ${isValidForm || 'email__btn-inactive'}`}
          disabled={!isValidForm}
        >
          {emailLoading ? <Loader /> : 'ENVIAR MAIL'}
        </button>
      );
    }
    if (mailSent && mailSuccesfullySent) {
      window.setTimeout(() => {
        setMailSent(false);
      }, 5000);
      return <p className="email__message">Mensaje enviado</p>;
    }
    if (mailSent && !mailSuccesfullySent) {
      window.setTimeout(() => {
        setMailSent(false);
      }, 5000);
      return (
        <p className="email__mesage email__message_failed">
          Mensaje no enviado
        </p>
      );
    }
  };

  return (
    <form action="" className="email" onSubmit={onSubmit}>
      <div className="email__element">
        <p className="email__form-label">EMAIL</p>
        <div className="email__element">
          <p className="email__label">Asunto</p>
          <input
            type="text"
            className="email__input"
            id="subject"
            onChange={onChange}
            required
          />
        </div>
        <div className="email__element">
          <p className="email__label">Html</p>
          <textarea
            className="email__input"
            id="htmlBody"
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="email__element">
        <RenderBtn />
      </div>
    </form>
  );
}

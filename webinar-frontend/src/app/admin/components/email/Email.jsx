import Loader from '@/components/loader/Loader';

export default function Email({
  emailLoading,
  isValidForm,
  onChange,
  onSubmit,
}) {
  return (
    <form action="" className="admin__mail" onSubmit={onSubmit}>
      <div className="admin__element">
        <p className="admin__form-label">Email</p>
        <div className="admin__element">
          <p className="admin__label">Asunto</p>
          <input
            type="text"
            className="admin__input"
            id="subject"
            onChange={onChange}
            required
          />
        </div>
        <div className="admin__element">
          <p className="admin__label">Html</p>
          <textarea
            className="admin__input"
            id="htmlBody"
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`admin__btn ${isValidForm || 'admin__btn-inactive'}`}
          disabled={!isValidForm}
        >
          {emailLoading ? <Loader /> : 'ENVIAR MAIL'}
        </button>
      </div>
    </form>
  );
}

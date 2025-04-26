import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Oops, something went wrong...</p>
      <span className={css.message}>Please reload page!</span>
    </div>
  );
};

export default ErrorMessage;

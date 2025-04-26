import toast, { Toaster } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {

  const handleSearchSubmit = evt => {
    evt.preventDefault();

    const query = evt.currentTarget.elements.query.value.trim();

    if (query.length === 0) {
      toast.error('Please enter something in the field', { icon: '❕️' });
      return;
    }
    onSearch(query);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a className={css.logo}>Gallery</a>

        <form className={css.wrapper} onSubmit={handleSearchSubmit}>
          <input
            className={css.field}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          
          <button className={css.btn} type="submit">
            <BsSearch className={css.icon} size="16" />
          </button>
        </form>
      </div>

      <Toaster position="top-right" />
    </header>
  );
}

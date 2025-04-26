import { FaHeart } from 'react-icons/fa6';
import css from './ImageCard.module.css';

export default function ImageCard({ picture }) {
  return (
    <>
      <div className={css.img_wrapper}>
        <img src={picture.urls.small} alt={picture.alt_description} />
      </div>

      <div className={css.description_wrapper}>
        <div className={css.title_wrapper}>
          <h3 className={css.title}>{picture.alt_description}</h3>
          <span className={css.name}>{picture.user.name}</span>
        </div>

        <span className={css.static}>
          <FaHeart className={css.icon} />
          {picture.likes}
        </span>
      </div>
    </>
  );
}

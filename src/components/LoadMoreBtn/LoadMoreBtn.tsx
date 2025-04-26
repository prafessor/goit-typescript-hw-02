import { FC } from 'react';
import css from './LoadMoreBtn.module.css';

interface loadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<loadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

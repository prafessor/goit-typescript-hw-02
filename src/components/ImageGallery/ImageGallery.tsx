import { FC } from 'react';
import { Image } from '../../common-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Image[];
  onOpenModal: (imgUrl: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onOpenModal }) => {
  console.log(items);
  return (
    <ul className={css.list}>
      {items.map(picture => (
        <li
          className={css.item}
          key={picture.id}
          onClick={() => {
            onOpenModal(picture.urls.regular);
          }}
        >
          <ImageCard picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

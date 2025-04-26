import { useState, useEffect } from 'react';
import searchImage from '../../unsplash-api';
import { Image } from '../../common-types';
import MoonLoader from 'react-spinners/MoonLoader';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [image, setImage] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // modal action functions
  function openModal(imgUrl: string): void {
    setModalImage(imgUrl);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
    setModalImage(null);
  }

  // search image functions
  const handleImgSearch = (queryImg: string): void => {
    setSearchQuery(queryImg);
    setPage(1);
    setImage([]);
  };

  const hadleBtnMoreClick = (): void => {
    setPage(page + 1);
  };

  useEffect((): void => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const data = await searchImage(searchQuery, page);
        setImage(prevImage => [...prevImage, ...data.results]);
        setTotalPage(data.total_pages);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  return (
    <>
      <SearchBar onSearch={handleImgSearch} />

      <div className={css.container}>
        {image.length > 0 && (
          <ImageGallery items={image} onOpenModal={openModal} />
        )}

        <MoonLoader loading={loading} size="40px" className={css.loader} />

        {error && <ErrorMessage />}

        {image.length > 0 && !loading && page < totalPage && (
          <LoadMoreBtn onClick={hadleBtnMoreClick} />
        )}
      </div>

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={modalImage ? modalImage : ''}
      />
    </>
  );
}

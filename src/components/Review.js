import { useState } from 'react';
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
// importing data
import reviews from '../data';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = reviews[index];

  const randomUserHandler = () => {
    const randomNumber = Math.trunc(Math.random() * reviews.length);
    setIndex(randomNumber);
  };
  let lastIndex = reviews.length - 1;
  const nextUserHandler = () => {
    if (index === lastIndex) {
      setIndex(0);
      return;
    }

    setIndex((index) => index + 1);
  };
  const prevUserHandler = () => {
    if (index === 0) {
      setIndex(lastIndex);
      return;
    }

    setIndex((index) => index - 1);
  };

  return (
    <article className='review'>
      <div className='img-container' key={id}>
        <img src={image} alt='' className='person-img' />
      </div>
      <div className='author'>{name}</div>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevUserHandler}>
          <MdArrowBackIosNew />
        </button>
        <button className='next-btn' onClick={nextUserHandler}>
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      <button className='random-btn' onClick={randomUserHandler}>
        Random user
      </button>
    </article>
  );
};

export default Review;

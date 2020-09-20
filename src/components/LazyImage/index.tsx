import React, { useState, useEffect } from 'react';

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

// lazy image
export const LazyImage = ({ src, alt }: any) => {
  const [ imageSrc, setImageSrc ] = useState(placeHolder);
  const [ imageRef, setImageRef ]: any = useState('');

  // on load
  const onLoad = (event: any) => {
    event.target.classList.add('loaded')
  };

  // on error
  const onError = (event: any) => {
    event.target.classList.add('has-error')
  };

  // use effect
  useEffect(() => {
    let observer: any;
    let didCancel: boolean = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            })
          }, {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(imageRef);
      } else {
        setImageSrc(src); // Old browsers fallback
      }
    }

    return () => {
      didCancel = true;

      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    }
  }, [src, imageSrc, imageRef]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
}
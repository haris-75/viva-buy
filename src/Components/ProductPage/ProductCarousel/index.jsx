import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function ProductCarousel() {
  const properties = {
    thumbnailPosition: 'left',
    useBrowserFullscreen: false,
    showFullscreenButton: false,
    showPlayButton: false,
    items: [
      {
        original: '/assets/featured/original/1.png',
        thumbnail: '/assets/featured/thumbnail/1.png'
      },
      {
        original: '/assets/featured/original/2.png',
        thumbnail: '/assets/featured/thumbnail/2.png'
      },
      {
        original: '/assets/featured/original/3.png',
        thumbnail: '/assets/featured/thumbnail/3.png'
      },
      {
        original: '/assets/featured/original/4.png',
        thumbnail: '/assets/featured/thumbnail/4.png'
      },
      {
        original: '/assets/featured/original/5.png',
        thumbnail: '/assets/featured/thumbnail/5.png'
      },
      {
        original: '/assets/featured/original/6.png',
        thumbnail: '/assets/featured/thumbnail/6.png'
      },
      {
        original: '/assets/featured/original/7.png',
        thumbnail: '/assets/featured/thumbnail/7.png'
      },
      { original: '/assets/featured/original/8.png', thumbnail: '/assets/featured/thumbnail/8.png' }
    ]
  };
  return (
    <div className="flex flex-row gap-5">
      <div className="w-full rounded-[5px] lg:rounded-[20px]">
        <ImageGallery {...properties} />
      </div>
    </div>
  );
}

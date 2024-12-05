import React, { useState, MouseEvent } from 'react';
import styles from './zoomImage.module.css';

interface ZoomImageProps {
  src: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const zoomLevel = 4;

  const handleMouseEnter = () => setIsZooming(true);

  const handleMouseLeave = () => setIsZooming(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // recuperamos las propiedades del elemento en el que hacemos zoom
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    //usamos las cordenadas del mouse que son relativas al viewport y hacemos calculos para que sean relativas a la imagen
    let x = ((e.clientX - left) / width) * 100;
    let y = ((e.clientY - top) / height) * 100;
    
    x = Math.max(0, Math.min(x, 100));
    y = Math.max(0, Math.min(y, 100));

    setPosition({ x, y });
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={styles.imageWrapper}
      >
        <img src={src} alt="Imagen principal" className={styles.img} />

        {isZooming && (
          <div className={styles.zoomedContainer}>
            <div
              className={styles.zoomedImage}
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
                backgroundSize: `${100 * zoomLevel}%`,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZoomImage;

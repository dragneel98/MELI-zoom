import React from 'react';
import styles from './ProductPage.module.css';
import ZoomImage from '../zoomImg';

interface ProductProps {
  imageUrl: string;
  thumbnails: string[];
  title: string;
  price: number;
  description: string;
  stockAvailable: boolean;
}

const ProductPage: React.FC<ProductProps> = ({ imageUrl, thumbnails, title, price, description, stockAvailable }) => {
  return (
    <div className={styles.container}>
      {/* Columna de imágenes */}
      <div className={styles.leftColumn}>
        <div className={styles.thumbnailContainer}>
          {thumbnails.map((thumb, index) => (
            <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} className={styles.thumbnail} />
          ))}
        </div>
        <div className={styles.imagePreview}>
          <ZoomImage src={imageUrl}></ZoomImage>
        </div>
      </div>

      {/* Columna de descripción del producto */}
      <div className={styles.middleColumn}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>${price.toLocaleString()}</p>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Columna de botones y disponibilidad */}
      <div className={styles.rightColumn}>
        <p className={styles.stock}>{stockAvailable ? 'Stock disponible' : 'Sin stock'}</p>
        <button className={styles.buyButton} disabled={!stockAvailable}>
          Comprar ahora
        </button>
        <button className={styles.addToCartButton} disabled={!stockAvailable}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

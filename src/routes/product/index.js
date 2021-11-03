import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Select } from '../../components/select/Select';
import getProduct from '../../service/Api/GetProduct';
import style from './style.css';

const items = [
  'brand',
  'model',
  'cpu',
  'ram',
  'os',
  'displayResolution',
  'battery',
  'dimentions',
  'weight',
];

const Profile = ({ id }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    getProduct(id).then((data) => {
      setCurrentProduct(data);
      localStorage.setItem('currentModel', data.model);
    });
  };

  const getItemDescription = (item) => {
    return (
      currentProduct[item] && (
        <div class={style.inLine}>
          <img
            src='../../assets/check.png'
            alt='Check'
            style={{ marginRight: '0.5rem' }}
          />
          <span>{currentProduct[item]}</span>
        </div>
      )
    );
  };

  return (
    <div class={style.product}>
      <h1>{currentProduct && currentProduct.model}</h1>
      {currentProduct && (
        <div class={style.productDetail}>
          <div>
            <img
              src={currentProduct.imgUrl}
              alt={'Imagen del producto'}
              width='350'
            />
          </div>
          <div class={style.card}>
            <h2>Descripción</h2>
            <div>
              {items.map((item) => getItemDescription(item))}
              <div class={style.inLine}>
                <img
                  src='../../assets/check.png'
                  alt='Check'
                  style={{ marginRight: '0.5rem' }}
                />
                <span>{currentProduct.primaryCamera.join(' ')}</span>
              </div>
            </div>
            <span
              className={style.productPrice}
            >{`Є${currentProduct.price}`}</span>
          </div>
          <div class={style.card}>
            <h2>Comprar</h2>
            <div>
              {currentProduct.options.colors && (
                <Select
                  options={currentProduct.options.colors}
                  labelText='Color: '
                  placeHolder='Escoja un Color'
                />
              )}
              {currentProduct.options.storages && (
                <Select
                  options={currentProduct.options.storages}
                  labelText='Almacenamiento: '
                  placeHolder='Escoja el almacenamiento'
                />
              )}
            </div>
            <button>Agregar al carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

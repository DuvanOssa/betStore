import { h } from 'preact';
import { useCallback, useContext, useEffect, useState } from 'preact/hooks';
import { Select } from '../../components/select/Select';
import { HeaderContext } from '../../context/headerContext';
import AddToCartService from '../../service/Api/AddToCart';
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
  const [, headerDispatch] = useContext(HeaderContext);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState('');
  const [storage, setStorage] = useState('');

  useEffect(() => {
    const getProductData = () => {
      getProduct(id).then((data) => {
        setCurrentProduct(data);
        if (data.options.colors.length === 1)
          setColor(data.options.colors[0].code);
        if (data.options.storages.length === 1)
          setStorage(data.options.storages[0].code);
        localStorage.setItem('currentModel', data.model);
      });
    };
    getProductData();
  }, [id]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleStorageChange = (e) => {
    setStorage(e.target.value);
  };

  const isDisable = () => {
    return !color || !storage || isLoading;
  };

  const getItemDescription = useCallback(
    (item) =>
      currentProduct[item] && (
        <div class={style.inLine}>
          <img
            src='../../assets/check.png'
            alt='Check'
            style={{ marginRight: '0.5rem' }}
          />
          <span>{currentProduct[item]}</span>
        </div>
      ),
    [currentProduct]
  );

  const addToCart = useCallback(() => {
    const paylod = {
      id: currentProduct.id,
      colorCode: color,
      storageCode: storage,
    };
    setIsLoading(true);
    AddToCartService(paylod).then((response) => {
      setIsLoading(false);
      headerDispatch({
        type: 'ADDTOCART',
        payload: {
          cartCount: response.count,
        },
      });
    });
  }, [color, currentProduct, headerDispatch, storage]);

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
            <h2>Descripci??n</h2>
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
            >{`??${currentProduct.price}`}</span>
          </div>
          <div class={style.card}>
            <h2>Comprar</h2>
            <div>
              {currentProduct.options.colors && (
                <Select
                  options={currentProduct.options.colors}
                  labelText='Color: '
                  placeHolder='Escoja un Color'
                  value={color}
                  handleChange={handleColorChange}
                />
              )}
              {currentProduct.options.storages && (
                <Select
                  options={currentProduct.options.storages}
                  labelText='Almacenamiento: '
                  placeHolder='Escoja el almacenamiento'
                  value={storage}
                  handleChange={handleStorageChange}
                />
              )}
            </div>
            <button disabled={isDisable()} onClick={addToCart}>
              {isLoading ? 'Agregando...' : 'Agregar al carrito'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

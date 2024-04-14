import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/product';
import { IProduct } from '../models';
import Loader from '../components/Loader';
import ErrorMesage from '../components/ErrorMesage';
import Product from '../components/Product';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';

const ProductsPage = () => {
  const { isLoading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className=" container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {error && <ErrorMesage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          {' '}
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className=" px-4 py-2 fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};
export default ProductsPage;

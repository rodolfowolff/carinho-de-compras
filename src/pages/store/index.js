import Layout from '../../components/Layout';
import Products from './Products';

const Store = () => {
  return (
    <Layout title="Minha loja" description="Minha loja" >
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Minha loja
      </h1>
      <div>
        <p className="mt-4 text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, quisquam.
        </p>
        <Products />
      </div>
    </Layout>
  );
};

export default Store;
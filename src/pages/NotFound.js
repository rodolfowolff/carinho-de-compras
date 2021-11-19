import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {

  return (
    <Layout title="Not Found" description="Página não encontrada">
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Desculpe, não conseguimos encontrar esta página.
          </p>
          <p className="mb-8">
            Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.
          </p>
          <Link to="/">
            <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
              Voltar à página inicial
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

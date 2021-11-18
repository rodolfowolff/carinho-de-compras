import { Helmet } from 'react-helmet-async';

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{ title ? title + " - Minha loja" : "Minha loja" }</title>
        <meta name="description" content={ description || "Descrição da minha loja" } />
      </Helmet>
      <main className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          { children }
        </div>
      </main>
    </>
  );
};

export default Layout;
import { Helmet } from 'react-helmet-async';

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{ title ? title + " - Minha loja" : "Minha loja" }</title>
        <meta name="description" content={ description || "Minha loja" } />
      </Helmet>
      <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        { children }
      </main>
    </>
  );
};

export default Layout;
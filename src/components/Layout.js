import { Helmet } from 'react-helmet-async';

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{ title ? title + " - Minha loja" : "Minha loja" }</title>
        <meta name="description" content={ description || "Descrição da minha loja" } />
      </Helmet>
      <Header />
      <main className="bg-white">
        <div className="max-w-2xl mx-auto py-1 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          { children }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import Head from 'next/head';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>home page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Banner />
      <ProductFeed products={products} />
    </div>
  );
}

export const getServerSideProps = async ({ context }) => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return {
    props: { products },
  };
};

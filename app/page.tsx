import Banner from './components/home/Banner';
import Category from './components/home/Category';
import Products from './components/home/Products';

export default function Home() {
  return (
    <main>
      <Category />
      <Banner />
      <Products />
    </main>
  );
}

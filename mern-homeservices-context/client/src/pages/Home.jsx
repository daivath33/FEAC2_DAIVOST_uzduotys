import Hero from "../components/home/Hero";
import CategoryList from "../components/home/CategoryList";
import PopularServices from "../components/home/PopularServices";
import { categories } from "../data/data";
import { popularServices } from '../data/data'

function Home() {
  return (
    <>
      <Hero />
      <CategoryList categories={categories} />
      <PopularServices services={popularServices} title="Popular Services"/>
    </>
  );
}

export default Home;

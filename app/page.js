import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {

  const categoryList=await GlobalApi.getCategoryList();
  const productList=await GlobalApi.getALlProduct();

  return (
    <div className="p-5 md:p-12 px-16">
      <Slider/>
      <CategoryList categoryList={categoryList}/>
      <ProductList productList={productList} />
    </div>
  );
}

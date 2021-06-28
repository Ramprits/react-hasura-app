import { useProductsQuery } from "../../generated/graphql";

function ProductPage() {
  const products = useProductsQuery();

  return <div>{JSON.stringify(products.data?.products)};</div>;
}

export default ProductPage;

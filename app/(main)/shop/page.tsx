import CardList from "@/components/shop/CardList";
import { Pagination } from "@/components/shop/Pagination";
import { Search } from "@/components/shop/Search";
import { getProducts } from "@/useCases/getproducts";
import React from "react";

const Shop = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    name: string;
  };
}) => {
  let nameProduct = searchParams.name ?? "";
  let page = searchParams.page ? Number(searchParams.page) : 1;
  const numberOfProducts = 8;
  let startIndex = page * numberOfProducts - numberOfProducts;
  let finalIndex = page * numberOfProducts;
  const products = await getProducts(
    "https://sheets.googleapis.com/v4/spreadsheets/10sOnHEoRdLrukcpTbT10M8JeOEAUXJMhcsYgIvTl2i4/values/sheet1?alt=json&key=AIzaSyCQZWSatvg7FiHlPQo34JPbuXuPWRAU4Vw"
  );

  let filterProducts = nameProduct
    ? products.filter((product) =>
        product.title.toLowerCase().includes(nameProduct.toLowerCase())
      )
    : products;
  let productsToShow = filterProducts.slice(startIndex, finalIndex);

  return (
    <div className="pt-24 mb-[80px] lg:min-h-[600px]">
    
      <Search name={nameProduct} />
      <CardList products={productsToShow} />
      <Pagination
        productsNumber={filterProducts.length}
        productInPages={numberOfProducts}
        page={page}
      />
    </div>
  );
};

export default Shop;

"use client";

import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/interface/products";
import { addProduct } from "@/lib/actions";
import Motion from "../framer/Motion";

interface Props {
  product: Product;
}

export const CardProduct = ({ product }: Props) => {
  const { description, id, title, img } = product;

  const addProductBind = addProduct.bind(null, product);

  return (
    <Motion initial={{opacity:0}} animate={{opacity:1}}>
    <Card className="box-border h-[280px] border-gray-200 shadow-md  border overflow-hidden">
      <div className="w-full h-[200px] relative ">
        <Image
          src={img}
          alt={title}
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <CardHeader className="py-2 px-4 flex">
        <CardTitle className="text-[20px]">{title}</CardTitle>
        <div className="flex justify-between items-center">
          <CardDescription className="text-base">
            {description}$
          </CardDescription>
          <form action={addProductBind}>
            <button>
              <i className="fa-solid fa-circle-plus fa-xl cursor-pointer text-primary"></i>
            </button>
          </form>
        </div>
      </CardHeader>
    </Card>
    </Motion>
  );
};

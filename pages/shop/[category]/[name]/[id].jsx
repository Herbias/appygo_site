import MainLayout from "../../../../layouts/MainLayout";
import { useRouter } from "next/router";
import { useGetProductDetailsHook } from "../../../../hooks/getProductDetailsHook";
import CustomButton from "../../../../components/CustomButton";
import { useIconHook } from "../../../../hooks/iconHook";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddToCart } from "../../../../redux/actions/CartAction";
import { useAddToCartHook } from "../../../../hooks/addToCartHook";

const ProductPage = (props) => {
  const heartIcon = useIconHook("heart");
  const [quantity, setQuantity] = useState(1);

  const dispatach = useDispatch();
  const cart = useSelector((state) => state.CartReducer);
  const [loading, success] = useAddToCartHook(props.product);

  return (
    <MainLayout>
      <div className="flex items-center border-b border-teal-400 bg-gray-200">
        <CustomButton
          classNames="flex w-16 h-10 p-full ml-6 bg-teal-300 text-white cursor-pointer"
          size="5"
          view="20"
          icon={heartIcon}
        />
        <div className="flex items-center w-full pl-4">
          {" "}
          <a className="text-teal-400 capitalize" href="/">
            Shop &#8594; &nbsp;
          </a>
          <a className="text-teal-400 capitalize">
            {props.product.categoryName} &#8594; &nbsp;
          </a>
          <a className="text-teal-400 capitalize">{`${props.product.brand} ${props.product.name}`}</a>
        </div>
      </div>
      <div className="flex m-10">
        <div className="w-1/2 p-10">
          <img src={`/product/${props.product["image"]}`} />
        </div>
        <div className="w-1/2 border border-teal-400">
          <div className="w-full px-10 border-teal-400 border-b bg-teal-400 text-white">
            <h3 className="font-bold text-3xl">{props.product["name"]}</h3>
          </div>
          <br />
          <div className="px-10">
            <h4 className="text-xl font-bold">Specification</h4>
            <ul>
              <br />
              {props.filters.map((elm, index) => {
                return (
                  <li className="capitalize ml-2" key={index}>
                    <span className="mr-2 font-bold">{`${elm.table}:`}</span>
                    {` ${props.product[elm.table]}`}
                  </li>
                );
              })}
            </ul>
            <br />
            <h3 className="text-xl font-bold">
              Price: &#8369;{props.product["price"].toFixed(2)}
            </h3>
            <br />
            <div className="flex items-center">
              <p className="font-bold mr-2">Quantity: </p>
              <input
                className="w-16 h-8 px-2 mr-2 border border-gray-500"
                type="text"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <div
                className="flex items-center border border-teal-300 cursor-pointer"
                onClick={(e) => {
                  dispatach(AddToCart(true, quantity, props.product));
                }}
              >
                {" "}
                <CustomButton
                  classNames="flex w-12 h-8 p-full bg-teal-300 text-white cursor-pointer"
                  size="5"
                  view="20"
                  icon={heartIcon}
                  data={props.product}
                />
                <span className="text-teal-400 mx-2">Add To Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

ProductPage.getInitialProps = async (ctx) => {
  let keys = [];
  Object.keys(ctx.query).forEach((elm) => {
    keys.push(elm);
  });

  let query = [];
  keys.forEach((elm) => {
    query.push(`${elm}=${ctx.query[elm]}`);
  });

  let str = `http://localhost:3001/get/product/detail?${query.join("&")}`;

  const res = await fetch(str);
  const json = await res.json();

  const path = ctx.asPath.trim("").split("/");
  const product = json.product[0];
  const filters = json.filters;

  return { path, product, filters };
};

export default ProductPage;
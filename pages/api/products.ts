import { products } from "constants/products";
import { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};

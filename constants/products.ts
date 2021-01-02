export interface Product {
  key: string;
  title: string;
  price: number;
}

export const products: Product[] = [
  {
    key: "Bananas",
    title: "Bananas, each",
    price: 0.22,
  },
  {
    key: "Cilantro",
    title: "Cilantro, bunch",
    price: 0.48,
  },
  {
    key: "RomaTomatoes",
    title: "Roma Tomatoes, each",
    price: 0.29,
  },
  {
    key: "WhiteEggs",
    title: "Great Value Large White Eggs, 18 Count",
    price: 1.6,
  },
];

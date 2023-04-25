export const productos = [
  {
    id: 1,
    title: "Short Argentina",
    price: 15000,
    stock: 2,
    description: "Modelo 2022",
    category: "Short",
    img: "https://res.cloudinary.com/da2zg5p95/image/upload/v1667347615/5dc42cfb-7062-49a0-b73f-72707372af19_k7rgcy.jpg",
  },
  {
    id: 2,
    title: "Chomba Boca",
    price: 13000,
    stock: 2,
    description: "Remera Chomba",
    category: "Remeras",
    img: "https://res.cloudinary.com/da2zg5p95/image/upload/v1667347615/1c252fa9-9908-4cbb-8355-184fef401908_euxqh7.jpg",
  },
  {
    id: 3,
    title: "Buzo Boca",
    price: 17000,
    stock: 5,
    description: "Camiseta Boca jr Retro",
    category: "Buzos",
    img: "https://res.cloudinary.com/da2zg5p95/image/upload/v1682383185/13e955f1-611f-4033-931b-4dc2584cb512_i0fzgk.jpg",
  },
  {
    id: 4,
    title: "Short Puma",
    price: 6000,
    stock: 5,
    description: "Short Puma",
    category: "Short",
    img: "https://res.cloudinary.com/da2zg5p95/image/upload/v1682383053/4ff90aa7-a75b-4a07-bdaf-f18e921ad855_vslexq.jpg",
  },
];

export const obtenerProductosById = (productosId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.find((prod) => prod.id === productosId),
        500
      );
    });
  });
};

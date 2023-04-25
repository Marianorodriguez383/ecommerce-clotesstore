export const productos = [
  {
    id: 1,
    title: "Short Argentina",
    price: 15000,
    stock: 2,
    description: "Modelo 2022",
    category: "Remeras",
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
    title: "Camiseta Boca",
    price: 17000,
    stock: 5,
    description: "Camiseta Boca jr Retro",
    category: "Buzos",
    img: "https://res.cloudinary.com/da2zg5p95/image/upload/v1667347616/4b7b968b-0382-47ae-8bf9-d31e92fc0d27_ljtzkv.jpg",
  },
  {
    id: 4,
    title: "Camiseta Argentina 1994",
    price: 15000,
    stock: 5,
    description: " mejores zapatillas",
    category: "Short",
    img: "https://res.cloudinary.com/da2zg5p95/image/upload/v1667347615/1c892a50-4f91-4cad-99e5-bc59acd536ab_t4hvhp.jpg",
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

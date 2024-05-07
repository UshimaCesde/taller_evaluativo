import React from "react";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import "./assets/style.css";

const products = [
  {
    id: 1,
    image:
      "https://www.bavaria.co/sites/g/files/seuoyk1666/files/2023-10/AGUILA330_1.png",
    name: "Cerveza Águila",
    description:
      "Aguila Original, cerveza lager clásica, sabrosa y refrescante que ha sido disfrutada durante más de un siglo. Refleja el verdadero espíritu de la alegría colombiana. Ha sido patrocinadora oficial de las celebraciones más importantes de Colombia, como sus carnavales, juegos locales y equipos locales y la Selección Colombia.",
    price: 2.5,
  },
  {
    id: 2,
    image:
      "https://www.bavaria.co/sites/g/files/seuoyk1666/files/2023-10/budweiser.png",
    name: "Cerveza Budweiser",
    description:
      "El rey de las cervezas, Budweiser fue introducido por Adolphus Busch en 1876 y todavía se elabora con el mismo cuidado y alta calidad, estándares exigentes. Lo que comenzó como una cerveza original de Estados Unidos, hoy es una marca global, disfrutada en 85 países. De acuerdo con su receta original, esta gran lager americana es añejada en chips de madera por 21 días, lo que da como resultado un sabor perfectamente equilibrado y fresco.",
    price: 5.0,
  },
  {
    id: 3,
    image:
      "https://www.bavaria.co/sites/g/files/seuoyk1666/files/2023-10/BAV_WEB_CERVEZAS-2%20%281%29.png",
    name: "Club Colombia",
    description:
      "Club Colombia nació en 1949 en Colombia con el nombre de Club Sesenta, en conmemoración a los sesenta años de la fundación Bavaria y fue la primera cerveza premium de la compañía. Al inicio de la década de los años sesenta, cambió de nombre por el de Club Colombia. Esta Club Colombia tiene el color dorado de las cervezas elaboradas con cebada malteada y malta caramelo. Club Colombia Dorada ha acompañado a los colombianos desde el año 1962.",
    price: 3.5,
  },
  {
    id: 4,
    image:
      "https://www.bavaria.co/sites/g/files/seuoyk1666/files/2023-10/corona.png",
    name: "Corona",
    description:
      "Corona es una invitación para salir y relajarse. Su líquido dorado se elabora 100% en México y es la cerveza mexicana más popular del mundo. Corona ha estado complementando los momentos sencillos de la vida desde 1925, y ahora se disfruta en más de 180 países alrededor del mundo.",
    price: 6.0,
  },
  {
    id: 5,
    image:
      "https://www.bavaria.co/sites/g/files/seuoyk1666/files/2023-10/StellaGlobalBottle-NoReflection_master-rev-1%20%282%29_0.png",
    name: "Stella Artois",
    description:
      "Stella Artois hace parte de una rica herencia cervecera belga que data de 1366. Su legado de calidad y sofisticación se refleja en el cáliz icónico, especialmente diseñado para elevar todos los sentidos - con una forma única que realza el aroma y un tallo que mantiene la cerveza más fría por más tiempo. Stella Artois todavía se prepara usando los ingredientes naturales más finos. Hoy en día, Stella Artois es la cerveza belga número uno del mundo y la cuarta cerveza más valorada a nivel mundial.",
    price: 7.0,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <div className="product-list container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

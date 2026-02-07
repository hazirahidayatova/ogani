import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Meat from "../../../../public/products/meat.png";
import Banana from "../../../../public/products/banana.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';

export default function FeaturedProduct() {
  const [selectedCategory, setSelectedCategory] = useState(5);

  const categories = [
    {
      title: "All",
      code: 5
    },
    {
      title: "Oranges",
      code: 1
    }, {
      title: "Fresh Meat",
      code: 2
    }, {
      title: "Vegetables",
      code: 3
    }, {
      title: "Fast Food",
      code: 4
    }
  ];

  const products = [
    {
      title: "Crab pool security",
      price: 30,
      category: 2,
      image: Meat
    }, {
      title: "Crab pool security",
      price: 30,
      category: 1,
      image: Banana
    }, {
      title: "Crab pool security",
      price: 30,
      category: 3,
      image: Meat
    }, {
      title: "Crab pool security",
      price: 30,
      category: 1,
      image: Banana
    }, {
      title: "Crab pool security",
      price: 30,
      category: 2,
      image: Meat
    }, {
      title: "Crab pool security",
      price: 30,
      category: 4,
      image: Banana
    }, {
      title: "Crab pool security",
      price: 30,
      category: 4,
      image: Meat
    }, {
      title: "Crab pool security",
      price: 30,
      category: 2,
      image: Banana
    }
  ];

  const handleCategoryChange = (value: number) => {
    setSelectedCategory(value);
  }

  console.log(selectedCategory);


  // ? - if | : - else

  const filteredProducts = selectedCategory === 5 ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h2 className="font-bold text-[30px] mb-[10px]">Featured Product</h2>
      </div>
      <div>
        <ul className="flex items-center justify-between">
          {categories.map((category, _) => {
            return (
              <li key={category.code} className={`mx-[20px] font-extralight cursor-pointer border-b-2 ${selectedCategory === category.code ? "border-green-500" : "border-transparent"}`} onClick={() => handleCategoryChange(category.code)}>{category.title}</li>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-center w-[70%] mt-[30px]">
        {filteredProducts.map((product, idx) => {
          return (
            <div className="mx-[20px] my-[20px] group relative overflow-hidden" key={idx}>
              <div style={{
                backgroundImage: `url(${product.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }} className="w-[250px] h-[250px] mb-[20px]">
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <h3>{product.title}</h3>
                <p className="font-bold">{product.price} $</p>
              </div>
              <div className="absolute bottom-20 left-0 gap-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center w-full justify-center">
                <div className="border border-gray-200 bg-gray-300 p-[5px] rounded-full transition-all duration-300 hover:bg-[#7fad39] cursor-pointer mx-[10px] hover:rotate-180">
                  <FavoriteIcon sx={{ color: "white" }} />
                </div>
                <div className="border border-gray-200 bg-gray-300 p-[5px] rounded-full transition-all duration-300 hover:bg-[#7fad39] cursor-pointer mx-[10px] hover:rotate-180">
                  <ScreenRotationAltIcon sx={{ color: "white" }} />
                </div>
                <div className="border border-gray-200 bg-gray-300 p-[5px] rounded-full transition-all duration-300 hover:bg-[#7fad39] cursor-pointer mx-[10px] hover:rotate-180">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

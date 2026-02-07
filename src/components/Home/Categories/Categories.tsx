import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Photo1 from "../../../../public/photo1.jpg";
import Photo2 from "../../../../public/photo2.jpg";
import Photo3 from "../../../../public/photo3.jpg";
import Photo4 from "../../../../public/photo4.jpg";
import { Pagination, Navigation } from "swiper/modules";

export default function Categories() {
    const categoriesArr = [
        {
            text: "Fresh Fruit",
            image: Photo2
        },
        {
            text: "Drink Fruits",
            image: Photo2
        },
        {
            text: "Vegetables",
            image: Photo1
        },
        {
            text: "Dried Fruit",
            image: Photo3
        },
        {
            text: "Vegetables",
            image: Photo1
        },
        {
            text: "Fresh Fruit",
            image: Photo4
        }
    ]
    return (
        <section className="mt-[30px] p-[100px]">
            <div>
                <Swiper 
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {categoriesArr.map((category, idx) => {
                        return (
                            <SwiperSlide>
                                <div className="h-[300px] flex items-end justify-center p-[40px]" style={{
                                    backgroundImage: `url(${category.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center"
                                }}>
                                    <p className="bg-white font-bold p-[10px]">
                                        {category.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

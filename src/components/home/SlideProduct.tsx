import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../product/ProductCard';
import { IProductItemDetail, ProductDetail } from '../../interfaces/ProductItem';

export type IProduct = {
  Id: number;
  Images: { Id: number; Link: string }[];
  Name: string;
  Price: number;
  Quantity: string;
  ShortDescription?: string;
};

const SlideProduct = (props: { products: ProductDetail[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      freeMode={true}
      spaceBetween={20}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
          pagination: true,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="topsell-swiper"
    >
      {props.products.map((item, index) => (
        <SwiperSlide key={`product-${index}`}>
          <ProductCard
            image={item.image[0]}
            name={item.name}
            price={Number(item.price)}
            id={Number(item.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideProduct;

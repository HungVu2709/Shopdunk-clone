import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlider = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="home-swiper"
    >
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner1.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner2.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner3.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner4.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner5.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner6.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image-cover" src={require('../../assets/banner-img/banner7.png')} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

import axios from "axios";
import { useEffect, useState } from "react";




// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// images impoort


export default function MovieDekho() {


  let FetchMovies = () => {
    let api = "http://localhost:3000/movies";

    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchMovies();
  }, []);


  const sliderImages = [
   
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1765883058083_popdesjan.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1768554429929_webbanner.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1766992961872_lumineersticketingbannerwebcarousel1240x300.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1769066515990_offeroftheweekstreamsaveandroidwebnew.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1766994183963_iccmenst20worldcup2026bannercrreativesmaingrouppagewebshowcasebanner1240x300.jpg"


    
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Book Movie Tickets Instantly 🎬
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Watch latest movies in your nearest theatres. Easy booking, best
          offers & instant confirmation.
        </p>

      </section>

      {/* Image Slider */}
      <section className="px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6">🎞 Featured</h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl"
              />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </div>
  );
}
import Paragraph from "../Paragraph";
import SecondTitle from "../SecondTitle";
import {
  CardReview,
  ContainerReviews,
  ConteinerCardReview,
} from "./ReviewsStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ThirdTitle from "../ThirdTitle";

const Reviews = () => {
  const data = [
    {
      id: "1",
      imgProfile: "/perfil-profile1.png",
      namePerson: "Dennis Ficco",
      coment:
        "The workers were super friendly and cooperative. My wife has a super critical eye and not only did they respond to all her requests, but they did everything above her expectations. Just a great experience.",
    },

    {
      id: "2",
      imgProfile: "/perfil-profile2.png",
      namePerson: "Beth Kelley",
      coment:
        "I had a repair that was needing to be done, because of water damage. The guys came right when they said they were and did a fantastic job! I was very impressed. Thanks Georgia Top Floors.",
    },

    {
      id: "3",
      imgProfile: "/perfil-profile1.png",
      namePerson: "Dennis Ficco",
      coment:
        "The workers were super friendly and cooperative. My wife has a super critical eye and not only did they respond to all her requests, but they did everything above her expectations. Just a great experience.",
    },

    {
      id: "4",
      imgProfile: "/perfil-profile2.png",
      namePerson: "Beth Kelley",
      coment:
        "I had a repair that was needing to be done, because of water damage. The guys came right when they said they were and did a fantastic job! I was very impressed. Thanks Georgia Top Floors.",
    },
  ];
  return (
    <ContainerReviews>
      <SecondTitle textSecondTitle="Reviews" />
      <Paragraph textParagraph="We service all of Metro Atlanta & North Georgia" />
      <ConteinerCardReview>
        <Swiper
          loop={true}
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={30}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <CardReview>
                <div>
                  <img src={card.imgProfile} alt="" />
                  <ThirdTitle textThirdTitle={card.namePerson} />
                </div>
                <Paragraph textParagraph={card.coment} />
              </CardReview>
            </SwiperSlide>
          ))}
        </Swiper>
      </ConteinerCardReview>
    </ContainerReviews>
  );
};

export default Reviews;
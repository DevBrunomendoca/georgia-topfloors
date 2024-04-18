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
import { useEffect, useState } from "react";

const Reviews = () => {

  const [sliderPerview, setSliderPerview] = useState(2)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768
      ? setSliderPerview(1)
      : setSliderPerview(2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const data = [
    {
      id: "1",
      namePerson: "Saurabh Dhawan",
      coment:
        "Cristiano and Team were ABSOLUTELY AWESOME! They were very timely in service, great to work with and we found their work in refinishing the hardwood floors of our home very professional and thorough! GREAT COMPANY! HIGHLY RECOMMENDED!!! 😊",
    },

    {
      id: "2",
      namePerson: "Cesar “Melds” S",
      coment:
        "I've known Cristiano for almost 10 years now. He is one of the most client oriented and knowledge and professional person in this industry hands down. Everyone at Georgia Top Floors are extremely professional and have amazing work ethics, from the office workers to the guys on the ground. There's no one else I'd even think about using for any flooring work.",
    },

    {
      id: "3",
      namePerson: "Maegan",
      coment:
        "Can’t say enough great things about GA Top Floors. Scheduled a next day consultation to take measurements of my home and went out of their way to make sure they matched my current floors perfectly. Pricing was reasonable and set at market value. They started the job within a week and finished within a few days. I’m absolutely impressed by their work and the attention to detail. Would use them again and again! Highly recommend.",
    },

    {
      id: "4",
      namePerson: "Dennis Ficco",
      coment:
        "The workers were super friendly and cooperative. My wife has a super critical eye and not only did they respond to all her requests, but they did everything above her expectations. Just a great experience. We are going to have them do my wife’s mother’s house next.",
    },
    {
      id: "5",
      namePerson: "Tracy Sardelli",
      coment:
        "This is a fabulous company. They are on time, professional and nice to have in your home. They installed beautiful hardwoods that are finished to perfection. I highly recommend them.",
    },
    {
      id: "6",
      namePerson: "Karen Samples",
      coment:
        "My experience with Georgia Top Floors has been great. I was referred to them by my general contractor and within 24 hours of contacting them, they were out at my house to show me some flooring samples and to take initial measurements. The work was efficient and the project managers were in constant communication with me throughout the process. I can be a bit picky and particular about colors/finishes and they were so patient  and worked with me to get my stairs matched to my floors to my liking. I would definitely use Georgia Top Floors in the future!",
    },
    {
      id: "7",
      namePerson: "Choclo Marketing",
      coment:
        "Cristiano and his team are extremely professional, and the level of work they perform is beyond 5-stars! They are priced very competitively and are also very accessible when you want to communicate with them at all times. They put floors in our recently purchased home, they arrived on-time and did exactly what they quoted. We are very happy with the results! We strongly recommend them!",
    },
  ];
  return (
    <ContainerReviews id="container-reviews">
      <SecondTitle textSecondTitle="Reviews" />
      <Paragraph textParagraph="We service all of Metro Atlanta & North Georgia" />
      <ConteinerCardReview>
        <Swiper
          loop={true}
          slidesPerView={sliderPerview}
          centeredSlides={false}
          spaceBetween={10}
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
                  <img src='icon-profile.png' alt="" />
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

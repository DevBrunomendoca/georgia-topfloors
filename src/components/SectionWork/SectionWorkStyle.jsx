import styled from 'styled-components'

export const ContainerWork = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 10rem 1rem 5rem;

  .swiper.swiper-initialized.swiper-horizontal.swiper-backface-hidden.mySwiper{
  padding: 5rem 0 !important;
}
.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal{
  top: 450px !important;
}
.swiper-pagination-bullet,  .swiper-pagination-bullet-active{
  background-color: #CF9642;
}
`

export const ContentTextWork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
export const ContainerSliderWork = styled.div`
  width: 100%;
`
export const ContentSliderWork = styled.div`
  width: 100%;
  img{ 
    width: 100%;
    cursor: pointer;
  }
`
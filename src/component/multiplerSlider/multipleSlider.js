//npm install slick-carousel
//npm install react-slick --save


import React from "react";
import "slick-carousel/slick/slick.css";        //import or copy this import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";    //import or copy this import "slick-carousel/slick/slick-theme.css"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Slider from "react-slick";

let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let Rough = () => {
  var settings = {}
  
if(window.innerWidth<768){
  settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
  }
}else{
  settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
  }
}
  return (
    <Slider {...settings}>
      {p.map((arg) => {
        return (
          <Card>
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
      })}
    </Slider>
  );
};

export default Rough;

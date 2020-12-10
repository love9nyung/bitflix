import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 450px;
  width: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const SubContainer = styled.div`
  width: 250px;
`;

const FavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  font-size: 20px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  font-size: 30px;
`;

const Year = styled.span`
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);
`;

const Fav = styled.span`
  display: block;
  font-size: 50px;
  color: red;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <FavContainer>
        <SubContainer>
          <Title>
            {title.length > 15 ? `${title.substring(0, 15)}...` : title}
          </Title>
          <Year>{year}</Year>
        </SubContainer>
        <Fav>
          <AiOutlineHeart />
        </Fav>
      </FavContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;

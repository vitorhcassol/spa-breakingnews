import PropTypes from "prop-types";
import { CardBody, CardContainer, CardFooter } from "./CardStyle";

export function Card({ news }) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="Imagem" />
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.likes}</span>
        </div>

        <div>
          <i className="bi bi-chat"></i>
          <span>{news.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

Card.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
};

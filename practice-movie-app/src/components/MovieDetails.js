import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function MovieDetails(props) {

    return (
        <div>
          <h1>{props.title}</h1>
          <Link to="/">home</Link>
          <br />
          <img src={props.image} alt="" />
          <br />
          <span>Rating: {props.rating}</span>
          <br />
          <span>{props.dateUploaded}</span>
          <br />
          <ul>
            {props.genres.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{props.desc}</p>
        </div>
    );
}

MovieDetails.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    dateUploaded: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default MovieDetails;
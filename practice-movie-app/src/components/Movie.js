import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie(props) {
  return (
    <div>
      <h2>
        <Link to="/movie">{props.title_long}</Link>
      </h2>
      <img src={props.medium_cover_image} alt={props.title_long} />
      <ul>
        {props.genres &&
          props.genres.map((g, index) => (
            <li key={index}>{g}</li>
          ))}
      </ul>
      <p>{props.summary}</p>
    </div>
  );
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    // genres는 없을 수도 있다.
}

export default Movie;

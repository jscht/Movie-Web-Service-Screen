import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

function Detail() {
  // const {id} = useParams()
  // console.log(id)
  // parameter의 이름을 바로 사용하는 경우 {id}로 사용해주면 json 형태(key:value)가 아닌 value 값을 바로 반환해준다.
  // 그래서 사용할 때는 변수명만 사용해도 된다.
  const param = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`
      )
    ).json();
    //console.log(json.data.movie)
    setDetails(json.data.movie);
    setLoading((current) => !current)
  };
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Details Loading...</h2>
      ) : (
        <MovieDetails 
            title={details.title}
            image={details.medium_cover_image}
            rating={details.rating}
            dateUploaded={details.date_uploaded}
            genres={details.genres}
            desc={details.description_intro}
        />
      )}
    </div>
  );
}

export default Detail;

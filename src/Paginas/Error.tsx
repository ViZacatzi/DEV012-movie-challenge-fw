import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  function handleGoBackE() {
    navigate(-1);
  }
  return (
    <section className="movie-error">
      <h1 className="movie-error">ERROR 404</h1>
      <img src={"./src/Images/icon.jpeg"} className="img-error" />
      <h3 className="movie-error">PAGE NOT FOUND</h3>
      <button className="button-error" onClick={handleGoBackE}>
        ◁◁◁ BACK TO MOVE LIST
      </button>
    </section>
  );
}

export default Error;

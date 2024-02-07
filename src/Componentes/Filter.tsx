

function Filter ({ onGenreChange }) {
    const handleGenreChange = (event) => {
      const selectedGenre = event.target.value;
      onGenreChange(selectedGenre);
    };
    return (
        <div className="filter-by-gender">
            <select className="selection" onChange={handleGenreChange}>
              <option value=" ">FILTRAR POR GENERO:</option>
              <option value="28">ACCIÓN</option>
              <option value="16">ANIMACIÓN</option>
              <option value="12">AVENTURA</option>
              <option value="53">SUSPENSO</option>
            </select>
        </div>
    )
}

export default Filter


function SortBy ({ onSortByChange }){
    const handleSortByChange = (event) => {
        const selectedSortBy = event.target.value;
        onSortByChange(selectedSortBy);
    }
    return (
        <div className="sort-by">
            <select className="selection" onChange={handleSortByChange}>
              <option value=" ">ORDENAR:</option>
              <option value="release_date.asc">FECHA DE LANZAMIENTO ASC</option>
              <option value="release_date.desc">FECHA DE LANZAMIENTO DESC</option>
              <option value="vote_average.desc">MÁS VOTADAS</option>
            </select>
        </div>
    )
}

export default SortBy
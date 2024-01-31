

function SortBy ({}){
    return (
        <div className="sort-by">
            <select className="selection">
              <option value="seleccion">ORDENAR:</option>
              <option value="ascendente">A - Z</option>
              <option value="descendente">Z - A</option>
            </select>
        </div>
    )
}

export default SortBy
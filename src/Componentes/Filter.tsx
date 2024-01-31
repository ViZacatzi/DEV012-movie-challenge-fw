

function Filter ({gender}: gender){
    return (
        <div className="sort-by-gender">
            <select className="selection">
              <option value="seleccion">FILTRAR POR GENERO:</option>
              <option value="Accion">ACCIÓN</option>
              <option value="Ciencia-Ficción">CIENCIA FICCIÓN</option>
              <option value="Comedia">COMEDIA</option>
              <option value="Drama">DRAMA</option>
              <option value="Suspenso">SUSPENSO</option>
              <option value="Terror">TERROR</option>
            </select>
        </div>
    )
}

export default Filter
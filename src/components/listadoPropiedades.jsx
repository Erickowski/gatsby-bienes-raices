import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"

import usePropiedades from "../hooks/usePropiedades"
import useFiltro from "../hooks/useFiltro"

import PropiedadPreview from "./propiedadPreview"

import listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const { categoria, FiltroUI } = useFiltro()

  const [propiedades] = useState(resultado)
  const [filtradas, guardarFiltradas] = useState([])

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.categoria.nombre === categoria
      )
      guardarFiltradas(filtro)
    } else {
      guardarFiltradas(propiedades)
    }
  }, [categoria])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades

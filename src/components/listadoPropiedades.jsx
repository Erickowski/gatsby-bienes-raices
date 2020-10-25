import React from "react"
import { css } from "@emotion/core"
import usePropiedades from "../hooks/usePropiedades"

const ListadoPropiedades = () => {
  const dato = usePropiedades()
  console.log(dato)
  return (
    <h2
      css={css`
        margin-top: 5rem;
      `}
    >
      Nuestras propiedades
    </h2>
  )
}

export default ListadoPropiedades

import React from "react"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { Link } from "gatsby"
import useSlug from "url-slug"

import Iconos from "./iconos"

const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`

const Contenido = styled.div`
  padding: 2rem;
  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 2rem 0;
    font-size: 1.4rem;
  }
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
`

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`

const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    descripcion,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
  } = propiedad

  return (
    <Card>
      <Image fluid={imagen.sharp.fluid} alt={descripcion} />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">$ {precio}</p>
        <Iconos
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
        <Boton to={useSlug(nombre)}>Visitar propiedad</Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview

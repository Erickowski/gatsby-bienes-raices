import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"

import heroCSS from "../css/hero.module.css"

const ImageBackground = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const inicio = useInicio()

  const { nombre, contenido, imagen } = inicio[0]

  return (
    <Layout>
      <ImageBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
        <div className={heroCSS.imagenbd}>
          <h1 className={heroCSS.titulo}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </ImageBackground>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Index

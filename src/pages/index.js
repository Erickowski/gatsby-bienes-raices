import React from "react"
import Layout from "../components/layout"

import useInicio from "../hooks/useInicio"

const Index = () => {
  const resultado = useInicio()
  console.log(resultado)
  return (
    <Layout>
      <h1>Hola mundo</h1>
    </Layout>
  )
}

export default Index

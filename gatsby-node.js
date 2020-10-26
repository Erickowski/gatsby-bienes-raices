const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  const paginas = resultado.data.allStrapiPaginas.nodes
  const propiedades = resultado.data.allStrapiPropiedades.nodes

  // Crear los templates de las paginas
  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/paginas.jsx"),
      context: {
        id: pagina.id,
      },
    })
  })

  // Crear los templates de las propiedades
  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.jsx"),
      context: {
        id: propiedad.id,
      },
    })
  })
}

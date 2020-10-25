const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
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

  const propiedades = resultado.data.allStrapiPropiedades.nodes

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.jsx"),
    })
  })
}

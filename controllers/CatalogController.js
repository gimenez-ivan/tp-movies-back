import { Catalog } from "../models/index.js"

// https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
class CatalogController {
  constructor() {
    this.catalog = Catalog;
  }
  getCatalogMovies = async (req, res) => {
    // Metodo que devuelva las peliculas que tiene el Catalog -> Con lo que armamos la UI  
  }

  addMovieToCatalog = async (req, res) => {
    // Metodo que agregue una pelicula en el Catalog
  
  }

  removeMovieToCatalog = async (req, res) => {
    // Metodo que elimine una pelicula de su Catalog
  }





}

export default CatalogController;

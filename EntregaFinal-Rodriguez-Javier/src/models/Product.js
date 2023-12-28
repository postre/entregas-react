export class Product {
    constructor(product) {
      this.id = product.id,
      this.title = product.data().title,
      this.brand = product.data().brand,
      this.description = product.data().description,
      this.price = product.data().price,
      this.thumbnail = product.data().thumbnail,
      this.category = product.data().category,
      this.images = product.data().images,
      this.discountPercentage = product.data().discountPercentage,
      this.priceOld = 150,
      this.rating = product.data().rating,
      this.stock = product.data().stock
    }
  
    
  }
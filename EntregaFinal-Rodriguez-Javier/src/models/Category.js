
export class Category {
  constructor(category) {
    this.id = category.id
    this.name = category.data().name
    this.slug = category.data().slug
  }
}

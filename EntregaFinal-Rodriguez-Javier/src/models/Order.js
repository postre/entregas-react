export class Order {
    constructor(order) {
      this.id = order.id,
      this.items = order.data().items,
      this.total = order.data().items.total,
      this.date = order.data().date.toDate()
    }

  }
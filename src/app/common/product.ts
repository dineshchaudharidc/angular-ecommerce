// product.ts
export class Product {
  constructor(
    public _links?: {
      self: { href: string },
      product: { href: string },
      category: { href: string }
    },
    public sku?: string,
    public name?: string,
    public description?: string,
    public unitPrice?: number,
    public imageUrl?: string,
    public active?: boolean,
    public unitsInStock?: number,
    public dateCreated?: Date,
    public lastUpdated?: Date
  ) {}
}
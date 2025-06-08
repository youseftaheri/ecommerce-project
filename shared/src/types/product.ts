// Shared interface for frontend and backend
export interface Product {
    id: string;       // Will map from MongoDB's _id
    name: string;
    description?: string;
    price: number;
    stock: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // For creating new products (excludes auto-generated fields)
  export type CreateProductDto = Pick<Product, 'name' | 'description' | 'price' | 'stock'>;
  
  // For updating products
  export type UpdateProductDto = Partial<CreateProductDto>;
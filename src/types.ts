export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    
    // Option 1: Mark them as optional using '?'
    // This means the property might not exist on the product object.
    sizes?: string[]; 
    colors?: string[];

    // Images is typically always required, even for a single image,
    // as it holds the mapping.
    images: Record<string, string>;
};


export type ProductsType = ProductType[];
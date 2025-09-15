export interface ProductType {
    id: number,
    title: string,
    description: string,
    images: string[],
    price: number,
    creationAt: string,
    category: {
        id: number,
        name: string,
        image: string
    }
}
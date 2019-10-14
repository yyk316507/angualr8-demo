import { Product, ImageSlider } from 'src/app/shared/domain';

export interface ProductVariant {
    id: number;
    name: string;
    product: Product;
    price: number;
    listPrice: number;
    productVariantImages:ImageSlider[]
}
export interface GroupOrder {
    id: number;
    productId: number;
    startBy: string;
    avatar: string;
    startAt: Date;
    remainingNumber:number
}
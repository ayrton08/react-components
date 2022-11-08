/// <reference types="react" />
import "./card.css";
export interface CardProps {
    price: number;
    description: string;
    onEvent?: (args: any) => any;
    image: string;
    title: string;
    category?: string;
}
export declare const Card: ({ price, description, image, title, category, onEvent, }: CardProps) => JSX.Element;
export default Card;

import "./card.css";

export interface CardProps {
  price: number;
  description: string;
  onEvent?: (args: any) => any;
  image: string;
  title: string;
  category?: string;
  dark?: "dark" | "light";
}

export const Card = ({
  price,
  description,
  image,
  title,
  category,
  onEvent,
  dark = "dark",
}: CardProps) => {
  return (
    <div className={dark}>
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <h4>
          <a>{title}</a>
        </h4>
        <p>{description}</p>
        <div className="product-bottom-details">
          <div className="product-price">${price}</div>
          <button className="button-buy">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

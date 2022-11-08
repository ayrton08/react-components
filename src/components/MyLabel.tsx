import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Label contents
   */
  label: string;
  /**
   * How large should the button be?
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * What color to use
   */
  color?: "normal" | "red" | "blue";
  /**
   * If you want all Capitalized
   */
  allCaps?: boolean;

  /**
   * Custom background
   */
  backgroundCustom: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "normal",
  allCaps = false,
  backgroundCustom,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} ${color}`}
      style={{ backgroundColor: `${backgroundCustom}` }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};

export default MyLabel;

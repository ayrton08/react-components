/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, color, allCaps, backgroundCustom, }: MyLabelProps) => JSX.Element;
export default MyLabel;

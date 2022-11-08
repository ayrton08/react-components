/// <reference types="react" />
import "./login.css";
export interface LoginProps {
    icon?: string;
    dark?: boolean;
    google?: string;
    facebook?: string;
    onRegister?: string;
    onEvent: (args: any) => any;
    schema?: any;
}
export declare const Login: ({ google, facebook, icon, dark, onRegister, onEvent, schema, }: LoginProps) => JSX.Element;
export default Login;

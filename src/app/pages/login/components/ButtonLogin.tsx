import { ReactNode } from "react";


interface IButtonLoginProp {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProp> = ({ type, onClick, children }) => {
    return (
        <button
            type={ type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
import { ReactNode, createContext } from "react";


interface IUsuarioLogadoContextData {
    nameUsuario: string;
}

interface IUsuarioLogadoProps {
    children: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProps> = ({ children }) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nameUsuario: 'Welison' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}
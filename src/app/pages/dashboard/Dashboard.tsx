import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0});

    //const usuarioLogadoContext = useContext(UsuarioLogadoContext);
    //const { nameUsuario } = useContext(UsuarioLogadoContext)
    const { nameUsuario } = useUsuarioLogado();

    return (
        <div>

        <p>Dashboard</p>
        <p>{nameUsuario}</p>

        <p>Contador: {counterRef.current.counter}</p>

        <button onClick={() => counterRef.current.counter++}>Add</button>
        <button onClick={() => console.log(counterRef.current.counter)}>Add</button>

        <Link to="/login">Login</Link>
        </div>
    );
}
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0});


    return (
        <div>

        <p>Dashboard</p>

        <p>Contador: {counterRef.current.counter}</p>

        <button onClick={() => counterRef.current.counter++}>Add</button>
        <button onClick={() => console.log(counterRef.current.counter)}>Add</button>

        <Link to="/login">Login</Link>
        </div>
    );
}
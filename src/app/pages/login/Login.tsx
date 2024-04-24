import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        return email.length;
    }, [email.length]);

    const handleClick = () => {
        navigate('/dashboard')
    }

    const handleEnter = useCallback(() =>{
        console.log(email)
        console.log(password)
    }, [email, password]);

    return(
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin 
                    label="Email"
                    type="email"
                    value={email}

                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => {inputPasswordRef.current?.focus()}}
                />
                <InputLogin 
                    label="Password"
                    type="password"
                    value={password}

                    onChange={newValue => setPassword(newValue)}
                />

                <button type="button" onClick={handleEnter}>
                    Enter
                </button>
            </form>

            <button onClick={handleClick}>Dashboard</button>

        </div>
    )
}
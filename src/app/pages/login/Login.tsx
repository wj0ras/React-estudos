import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

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

                <label>
                    <span>Email</span>
                    <input type="email" 
                           value={email} 
                           onChange={e => setEmail(e.target.value)}
                           onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                           />
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" 
                           value={password}
                           ref={inputPasswordRef}
                           onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEnter}>
                    Enter
                </button>
            </form>

            <button onClick={handleClick}>Dashboard</button>

        </div>
    )
}
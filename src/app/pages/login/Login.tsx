import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        console.log('executou')
        return email.length;
    }, [email.length]);

    const handleClick = () => {
        navigate('/dashboard')
    }

    const handleEnter = () => {
        alert(`Email:${email} \n Password:${password}`)
    }

    return(
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <label>
                    <span>Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEnter}>
                    Enter
                </button>
            </form>

            <button onClick={handleClick}>Dashboard</button>

        </div>
    )
}
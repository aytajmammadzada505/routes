import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            <input type="text" placeholder="buraya yazin..." />
            <button onClick={handleLogin}>Daxil ol</button>
        </div>
    );
}

export default Login;
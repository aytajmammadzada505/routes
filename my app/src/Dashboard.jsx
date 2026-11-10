//task 2
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => navigate('/')}>Cixis Et</button>
        </div>
    );
}

export default Dashboard;

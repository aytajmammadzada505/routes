import { useNavigate } from 'react-router-dom';

function Users() {
    const navigate = useNavigate();
    const users = [
        { id: 1, name: "Scott Summers", role: 'Admin' },
        { id: 2, name: "Bucky Barnes", role: "Moderator" },
        { id: 3, name: "Loki Laufeyson", role: "istifadeci" }
    ];

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.role}
                        <button onClick={() => navigate(`/users/${user.id}`)}>Profile Kec</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
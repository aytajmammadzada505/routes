//task 4
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Ugurlu Sifaris</h1>
            <button onClick={() => navigate("/")}>
                Ana sehifeye qayit
            </button>
        </div>
    );
}
export default Success;

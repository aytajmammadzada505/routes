import { useParams, useNavigate } from "react-router-dom";

function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div style={{ padding: "20px" }}>
            <h2>istifadecinin ID-si:{id}</h2>
            <button onClick={() => navigate(-1)}>geri qayit </button>
            <button onClick={() => navigate('/users')}> Ana Sehifeye qayit</button>
        </div>
    );
}
export default Detail
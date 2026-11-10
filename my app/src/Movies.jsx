import { useNavigate } from "react-router-dom";

function Movies() {
    const navigate = useNavigate();
    const movies = [
        { id: 1, title: "Iron man", genre: "Action" },
        { id: 2, title: "The Dark Knight", genre: "Action" },
        { id: 3, title: "Project Hail Mary", genre: "Science Fiction" },
    ]
    return (
        <div>
            <h1>Detallar</h1>
            <ul>
                {movies.map((movie) => (
                    <li style={{ marginBottom: '10px' }} key={movie.id}>
                        {movie.title} - {movie.genre}
                        <button style={{ marginLeft: '10px' }} onClick={() => navigate(`/movie/${movie.id}`)}>
                            Detallara bax
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Movies;
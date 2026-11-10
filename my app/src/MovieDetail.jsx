//task 3
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const { id } = useParams();
    return (
        <div>
            <h1>six ID-si {id} olan kinoya baxirsiniz.</h1>
        </div>
    );
}
export default MovieDetail;

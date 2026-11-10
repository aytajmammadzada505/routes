//task 1
import { useParams } from 'react-router-dom';

function Welcome() {
    const { name } = useParams();

    return (
        <div>
            <h1>Xoş gəlmisiniz, {name}!</h1>
        </div>
    );
}

export default Welcome;

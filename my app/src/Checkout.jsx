//task 4
import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();

    const handleCheckout = () => {
        setTimeout(() => {
            navigate('/success');
        }, 1500);
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleCheckout}>
                Sifarisi Tesdiq Et
            </button>
        </div>
    );
}
export default Checkout;

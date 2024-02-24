import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type SignoutProps = {
    socket: any;
    children?: React.ReactNode;

}

const Signout: React.FC<SignoutProps> = ({socket, children}) => {
    const navigate = useNavigate();
    const handleSignout = () => {
        let lSKey = sessionStorage.getItem('userName');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem(JSON.stringify(lSKey));
        socket.emit("signout")
        navigate("/")
    }

    return (
        <Button onClick={handleSignout}>{children || 'Log out'}</Button>
    );
}

export default Signout;
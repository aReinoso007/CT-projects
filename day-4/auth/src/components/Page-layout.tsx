import { Container } from "react-bootstrap";

type PageLayoutProps = {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container>
        <h1>My App</h1>
        {children}
        </Container>
    );
}

export default PageLayout;
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/Page-layout";

const CallbackPage: React.FC = () => {

    const { error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

  return (
    <PageLayout>

    </PageLayout>
  );
};
export default CallbackPage;
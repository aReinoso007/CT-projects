import { Button, Col } from "react-bootstrap";

type WriteToSessionStorageProps = {
  storageKey: string;
  value: string;
};

const WriteToSessionStorage: React.FC<WriteToSessionStorageProps> = (
  props
) => {
    console.log(props.storageKey, props.value);
  const handleWriteToSessionStorage = () => {
    sessionStorage.setItem(props.storageKey, props.value);
  };

  const handleReadFromSessionStorage = () => {
    console.log('key: ' , props.storageKey,', value: ',sessionStorage.getItem(props.storageKey));
  };

  const handleRemoveFromSessionStorage = () => {
    sessionStorage.removeItem(props.storageKey);
  };

  return (
    <div>
      <h1>Write to Session Storage</h1>
      <p>storageKey: {props.storageKey}</p>
      <p>Value: {props.value}</p>
      <br />
      <Col>
        <Button
          variant="primary"
          className="m-2"
          type="submit"
          onClick={handleWriteToSessionStorage}
        >
          Write to session storage
        </Button>
        <Button className="m-2" onClick={handleReadFromSessionStorage}>
          Read from session storage
        </Button>
        <Button className="m-2" onClick={handleRemoveFromSessionStorage}>
          Remove from session storage
        </Button>
      </Col>
    </div>
  );
};

export default WriteToSessionStorage;

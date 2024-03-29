import { Card, Col, Container, Row } from "react-bootstrap";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const CharactersPage: React.FC = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <h1>Character List</h1>
      <Row>
        {data.characters.results.map((character: any) => {
          return (
            <Col>
              <Link to={`/${character.id}`}>
                <Card id={character.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CharactersPage;

/**
 *  return (
		data.characters.results.map(({ id, name, image }) => (
    <div key={id}>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  ));	
	)
 */


  /**
   *  <h1>Character List</h1>
      <Row>
        {data.characters.results.map((character: any) => {
          return (
            <Col>
              <Link to={`/${character.id}`}>
                <Card id={character.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
   */

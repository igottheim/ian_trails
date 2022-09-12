import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HikingForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of Hike</Form.Label>
        <Form.Control type="hike" placeholder="Enter Hike Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location of Hike</Form.Label>
        <Form.Control type="password" placeholder="Name of Hike" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Hike Distance</Form.Label>
        <Form.Control type="password" placeholder="Hike Distance" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Hike URL</Form.Label>
        <Form.Control type="password" placeholder="Hiking URL" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default HikingForm;
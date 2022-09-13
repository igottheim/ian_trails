import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HikingForm({handleSubmit}) {

  return (
    <Form className='Form' onSubmit={(e)=> handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of Hike</Form.Label>
        <Form.Control type="hike" placeholder="Enter Hike Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location of Hike</Form.Label>
        <Form.Control type="hike" placeholder="City,State" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Hike Distance</Form.Label>
        <Form.Control type="hike" placeholder="Distance in Miles" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Hike Image URL</Form.Label>
        <Form.Control type="hike" placeholder="Hiking URL" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit New Hike!
      </Button>
    </Form>
  );
}

export default HikingForm;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CheckBox } from '@mui/icons-material';

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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Hike Description</Form.Label>
        <Form.Control type="hike" placeholder="Description of Hike" />
      </Form.Group>
      <input type="checkbox" value="Dog"/>
      <label> Dog Friendly?</label>
      <Button className= "button" variant="primary" type="submit">
        Submit New Hike!
      </Button>
      
    </Form>
  );
}

export default HikingForm;
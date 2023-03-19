import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Age from '../shared/Age';
import Country from '../shared/Country';
import Name from '../shared/Name';

function ProfileCard({greeting,img}) {
    const SayHello=()=>{
        greeting('chiheb')
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title > <Name name='chiheb' /></Card.Title>
        <Card.Text>
          <Age age={27} /> <br />
          <Country country="Tunisia" />
        </Card.Text>

        <Button onClick={SayHello} variant="primary">say hello</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
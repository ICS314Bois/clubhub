import React from 'react';
import { Button, Card, Image, Header, Container } from 'semantic-ui-react';
import BottomLanding from '../components/BottomLanding';

class Approval extends React.Component {
  render() {
    const padding = { paddingTop: '10px' };
    return (
        <div className='approval-page'>
          <div className={'landing-background'}>
          <Container style={padding}>
            <Header as='h4'>Requests</Header>
            <hr/>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Description>
                  <strong>Add Club Request</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Container>
        </div>
          <BottomLanding/>
        </div>
    );
  }
}

export default Approval;

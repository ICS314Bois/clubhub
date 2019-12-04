import React from 'react';
import { Grid, Image, Icon, Card, Search } from 'semantic-ui-react';
import BottomLanding from '../components/BottomLanding';

 let clubs =  {
    "ClubName": "Accounting Club at UH Manoa",
    "Type": "Academic/Professional",
    "ContactName": "Chelsi Morishige",
    "ContactEmail": "chelsicm@hawaii.edu",
    "Website": "acuhmanoa.com",
    "Email": "chelsicm@hawaii.edu",
    "Description": "chelsicm@hawaii.edu",
    "Image" : "/images/meteor-logo.png"
  }
/** A simple static component to render some text for the landing page. */
class SearchPage extends React.Component {
  render() {
    const padding = { paddingTop: '10px', paddingBottom: '10px' };
    return (
        <div className={'sunset-background'} style={padding}>
        <Grid verticalAlign='middle'container>
	<Grid.Row>
	<Search/>
	</Grid.Row>
	<Grid.Row>
	<Card.Group itemsPerRow={4}>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
</Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
</Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
</Card>
<Card>
    <Image fluid src={clubs.Image}/>
    <Card.Content>
      <Card.Header>{clubs.ClubName}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {clubs.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
            </Card>
              </Card.Group>
	          </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default SearchPage;

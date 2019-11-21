import React from 'react';
import { Card, Feed, Grid, Header, Icon, Image, List } from 'semantic-ui-react';
import BottomLanding from '../components/BottomLanding';

/** A simple static component to render some text for the landing page. */
class ProfilePage extends React.Component {
  render() {
    return (
        <div className={'landing-background'}>
        <Grid padded={'horizontally'} relaxed={'very'} columns={3}>
            <Grid.Column width={3}>
            <Header inverted as={'h2'} >Interests</Header>
            <hr/>
            <List bulleted size={'large'}>
              <List.Item>Music</List.Item>
              <List.Item>Media</List.Item>
              <List.Item>Art</List.Item>
            </List>
            <Header inverted as={'h2'}>Recommendations</Header>
            <hr/>
            <Card.Group>
              <Card>
                <Card.Content>
                  <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>Mock Club</Card.Header>
                  <Card.Description>
                    This is a <strong>club</strong>!
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
              <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>Mock Club</Card.Header>
                <Card.Description>
                  This is a <strong>club</strong>!
                </Card.Description>
              </Card.Content>
            </Card>
              <Card>
                <Card.Content>
                  <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>Mock Club</Card.Header>
                  <Card.Description>
                    This is a <strong>club</strong>!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>

          <Grid.Column width={9}>
            <Header inverted as={'h2'}>Clubs</Header>
            <hr/>
            <Card.Group>
              <Card color={'red'}>
                <Card.Content>
                  <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>Mock Club</Card.Header>
                  <Card.Description>
                    This is a <strong>club</strong>!
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>Mock Club</Card.Header>
                  <Card.Description>
                    This is a <strong>club</strong>!
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>Mock Club</Card.Header>
                  <Card.Description>
                    This is a <strong>club</strong>!
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>Mock Club</Card.Header>
                  <Card.Description>
                    This is a <strong>club</strong>!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>

          <Grid.Column width={4}>
            <Card>
              <Card.Content>
                <Card.Header>Club Notifications</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Label image='/images/meteor-logo.png' />
                    <Feed.Content>
                      <Feed.Date content='1 day ago' />
                      <Feed.Summary>
                        <a>Anime Club</a> meeting to be held on September 27 in Kyukendall Hall 305.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='/images/meteor-logo.png' />
                    <Feed.Content>
                      <Feed.Date content='3 days ago' />
                      <Feed.Summary>
                        <a>Archery Club</a> meeting on October 22 is CANCELLED.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='/images/meteor-logo.png' />
                    <Feed.Content>
                      <Feed.Date content='4 days ago' />
                      <Feed.Summary>
                        <a>Music Club</a> meeting to be held on April 22 in the auditorium.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
          <BottomLanding/>
        </div>
    );
  }
}

export default ProfilePage;
import React from 'react';
import { Grid, Image, Header, Card, Feed } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class ProfilePage extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container column={3}>

          <Grid.Column width={4}>
            <Image src="/images/meteor-logo.png"/>
            <Header as={'h1'}>Rusty Jacinto</Header>
            <Header as={'h3'}>This is a bio!</Header>
          </Grid.Column>

          <Grid.Column width={8}>
            <h2>Interests</h2>
            <hr/>
            <h2>Clubs</h2>
            <hr/>
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
    );
  }
}

export default ProfilePage;
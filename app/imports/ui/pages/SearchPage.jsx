import React from 'react';
import { Grid, Image, Icon, Card, } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class SearchPage extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>
	<Search/>
		<Card>
			hello
		</Card>
        </Grid>
    );
  }
}

export default SearchPage;

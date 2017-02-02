import React, {PropTypes} from 'react'
import { Dimmer, Loader, Image, Segment, Reveal } from 'semantic-ui-react'

/*<Reveal animated='small fade'>
  <Reveal.Content visible>
  <Dimmer active inverted>
    <Loader inverted content='Loading'/>
  </Dimmer>
  <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png'/>
  </Reveal.Content>
  <Reveal.Content hidden>*/
  /*</Reveal.Content>
</Reveal>*/

const RevealList = (content) => (
  <div>
        <Segment>
          {JSON.stringify(content)}
        </Segment>
  </div>
);
RevealList.propTypes = {
  content: PropTypes.any.isRequired
};
export default RevealList

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchEvents } from '../../actions';
import { Segment, Icon, Button } from 'semantic-ui-react';

export class GroupEvents extends Component {
  constructor(props) {
    super(props);
    console.log('constructor is running');
    this.props.fetchEvents(props.groupdId);
    console.log('events', this.props.events);

    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(eventId) {
    console.log('handle event click... event id: ', eventId);
    this.props.handleEventDetails(eventId);
  }

  renderEvents() {
    return _.map(this.props.events, event => {
      console.log('event', event);
      return (
        <Segment key={event.id}>
          <Button onClick={ () => { this.handleEventClick(event.id); } }>
            {event.name}
          </Button>
        </Segment>
      );
    });
  }

  render() {
    return (
      <div>
        <Segment.Group>
          {this.renderEvents()}
        </Segment.Group>
        <button>
          <Icon name='plus circle' size='big'/>        
        </button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { events: state.events };
};

export default connect(mapStateToProps, { fetchEvents })(GroupEvents);
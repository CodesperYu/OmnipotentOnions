import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions';
import _ from 'lodash';

import { Segment, Icon, Button, Header, Image, Modal, Input } from 'semantic-ui-react';

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      location: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      detail: '',
    };
    this.eventNameChange = this.eventNameChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.startTimeChange = this.startTimeChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.endTimeChange = this.endTimeChange.bind(this);
    this.detailChange = this.detailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  eventNameChange(e) {
    var eventName = e.target.value;
    this.setState({
      eventName: eventName
    });
  }
  locationChange(e) {
    var location = e.target.value;
    this.setState({
      location: location
    });
  }
  startDateChange(e) {
    var startDate = e.target.value;
    this.setState({
      startDate: startDate
    });
  }
  startTimeChange(e) {
    var startTime = e.target.value;
    this.setState({
      startTime: startTime
    });
  }
  endDateChange(e) {
    var endDate = e.target.value;
    this.setState({
      endDate: endDate
    });
  }
  endTimeChange(e) {
    var endTime = e.target.value;
    this.setState({
      endTime: endTime
    });
  }
  detailChange(e) {
    var detail = e.target.value;
    this.setState({
      detail: detail
    });
  }

  onSubmit(e) {
    console.log(this.state.eventName);
    console.log(this.state.location);
    console.log(this.state.startDate);
    console.log(this.state.startTime);
    console.log(this.state.detail);
  }

  render() {
    return (
      <Modal.Content>
        <Input className='eventName' value={this.state.eventNameChange} onChange={this.eventNameChange}/>
        <label>Event Name</label>
        <div className="ui form">
          <Input value={this.state.locationChange} onChange={this.locationChange}/>
          <label>Location</label>
        </div>
        <div className="ui form">
          <Input type='date' onChange={this.startDateChange}/> <Input type='time' onChange={this.startTimeChange}/> <label> Start</label>
        </div>
        <div className="ui form">
          <Input type='date' onChange={this.endDateChange}/> <Input type='time' onChange={this.endTimeChange}/> <label> End</label>
        </div>
        <div className="ui form">
          <div className="field">
            <label>Details</label>
            <textarea rows="3" onChange={this.detailChange}></textarea>
          </div>
        </div>
        <button className="ui button" type="submit" onClick={this.onSubmit}>Submit</button>
      </Modal.Content>
    );
  }

}

const mapStateToProps = function(state) {
  return { };
};

export default connect(mapStateToProps, {})(CreateEvent);
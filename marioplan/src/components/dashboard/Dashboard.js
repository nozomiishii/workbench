import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    // const { projects } = this.props;
    return (
      <div className='dashboad container'>
        <div className='row'>
          <div className='col s12 m6'>
            {/* <ProjectList projects={projects} /> */}
            <ProjectList />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.orderd.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([{ collection: 'projects' }])
)(Dashboard);

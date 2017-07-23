import React from 'react';
// import VideosTemp from '../components/VideosTemp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import VideoList from '../components/VideoList';
import VideoModal from '../components/VideoModal';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';

// App is sent to the main index.js
class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestVideos} />
        <VideoList videos={this.props.videos} onVideoSelect={ selectedVideo => this.props.actions.openModal({selectedVideo}) }/>
        <VideoModal modalIsOpen={ this.props.modalIsOpen }
                    selectedVideo={ this.props.selectedVideo }
                    onRequestClose={ () => this.props.actions.closeModal() } />
      </div>
    );
  }
}

// this gets called on every update
function mapStateToProps(state) {
  return {
    videos: state.videos.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedVideo: state.modal.selectedVideo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

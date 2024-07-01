import React from 'react';
import './Track.css';
import ReactPlayer from 'react-player';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playPreview = this.playPreview.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  playPreview() {
    if (this.state.isPlaying) {
      this.setState({ isPlaying: false, trackPreviewUrl: '' });
    } else {
      this.setState({ isPlaying: true, trackPreviewUrl: this.props.track.preview_url });
    }
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action" onClick={this.removeTrack}>-</button>
    } else {
      return <button className="Track-action" onClick={this.addTrack}>+</button>
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.props.isRemoval ?
          <button className="Track-action" onClick={this.removeTrack}>-</button>
          :
          <button className="Track-action" onClick={this.addTrack}>+</button>
        }
          <button className="Track-preview" onClick={this.playPreview}>
            {this.state.isPlaying && this.props.track.preview_url ? 'pause' : this.state.isPlaying ? 'Preview-unavailable' : 'Preview'}
          </button>
        {this.state.isPlaying && this.props.track.preview_url &&
          <ReactPlayer url={this.props.track.preview_url} playing />
        }
      </div>
    )
  }
}

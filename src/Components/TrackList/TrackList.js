import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';


export class TrackList extends React.Component {
    render() {
        return (
            <div class="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track}
                                        key={track.id}
                                        onAdd={this.props.onAdd}
                                        onRemove={this.props.onRemove}
                                        isRemoval={this.props.isRemoval}
                                        previewUrl={this.props.previewUrl} />
                    })
                }
            </div>
        )
    }
}
import React from 'react';
import NpProj from './npProj';
import TwitterProj from './twitProj';
import DrawingRecorder from './recProj';
export default class Project extends React.Component {
    render() {
        return (
            <div>
                <div style={{ padding: '5em', float:'left' }}>
                    <NpProj></NpProj>
                    <br></br>
                    <DrawingRecorder></DrawingRecorder>
                </div>
                <div style={{ padding: '5em' }}>
                    <TwitterProj></TwitterProj>
                    <br></br>
                    <NpProj></NpProj>
                </div>
            </div>
        )
    }
}
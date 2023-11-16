import { AudioPlayer } from '../AudioPlayer';
import { Avatar } from '../Avatar';
import { MissedCallIcon } from '../MissedCallIcon';
import './AudioMessage.css';

export const AudioMessage = () => {
  return (
    <div className="audio-message-container">
      <div>
        <Avatar size={40} />
      </div>
      <div className="audio-message-body">
        <div className="missed-call">
          <div className="icon-col">
            <MissedCallIcon size={40} />
          </div>
          <div>
            <div className="call-title">Missed call</div>
            <div className="call-subtitle">No one answered</div>
          </div>
        </div>
        <div className="player-container">
          <AudioPlayer src="file_example_MP3_2MG.mp3" />
        </div>
        <div className="audio-transcription">
          <div className="label-text">Transcript</div>
          <div className="audio-text">
            Hi there. Just checking in to see when the proposal will be ready.
            Please call me back when you have a chance. Thanks.
          </div>
        </div>
      </div>
    </div>
  );
};

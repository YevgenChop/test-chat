import { Audio, User } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { MissedCallIcon } from '../MissedCallIcon';
import './AudioMessage.css';

type AudioMessageProps = {
  audio: Audio;
  user: User;
};

export const AudioMessage = ({ audio, user }: AudioMessageProps) => {
  const { src, transcript } = audio;
  const { avatar } = user;

  return (
    <div className="audio-message-container">
      <div className="audio-message-avatar">
        <img className="audio-message-avatar-img" src={avatar} alt="" />
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
          <AudioPlayer src={src} />
        </div>
        <div className="audio-transcription">
          <div className="label-text">Transcript</div>
          <div className="audio-text">{transcript}</div>
        </div>
      </div>
    </div>
  );
};

import { useRef, useState } from 'react';
import './AudioPlayer.css';
import { IconButton } from '../IconButton';
import { PauseIcon } from '../icons/PauseIcon';
import { PlayIcon } from '../icons/PlayIcon';
import { SpinnerIcon } from '../icons/SpinnerIcon';
import { AudioProgressBar } from '../AudioProgressBar';
import { VolumeInput } from '../VolumeInput';
import { VolumeUpIcon } from '../icons/VolumeUpIcon';
import { VolumeOffIcon } from '../icons/VolumeOffIcon';
import { formatDurationDisplay } from '../../helpers/playerHelper';
import { DotsThree } from '../icons/DotsThree';

interface AudioPlayerProps {
  src: string;
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [volume, setVolume] = useState(0.2);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currentProgress);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;
    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const playerControlIcon = isPlaying ? <PauseIcon /> : <PlayIcon />;

  return (
    <div className="player">
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
          setIsReady(true);
        }}
        onTimeUpdate={(e) => {
          setCurrentProgress(e.currentTarget.currentTime);
          handleBufferProgress(e);
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onProgress={handleBufferProgress}
        onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
      >
        <source type="audio/mpeg" src={src} />
      </audio>
      <div className="controls">
        <div>
          <IconButton onClick={togglePlayPause}>
            {isReady ? (
              playerControlIcon
            ) : (
              <SpinnerIcon className="spin-icon" />
            )}
          </IconButton>
        </div>
        <div>
          <AudioProgressBar
            duration={duration}
            currentProgress={currentProgress}
            buffered={buffered}
            onChange={(e) => {
              if (!audioRef.current) return;
              audioRef.current.currentTime = e.currentTarget.valueAsNumber;
              setCurrentProgress(e.currentTarget.valueAsNumber);
            }}
          />
        </div>
        <div className="audio-duration">
          {currentProgress === 0 ? durationDisplay : elapsedDisplay}
        </div>
        <div className="volume-control">
          <IconButton onClick={handleMuteUnmute}>
            {volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
        <div>
          <IconButton onClick={() => {}}>
            <DotsThree />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

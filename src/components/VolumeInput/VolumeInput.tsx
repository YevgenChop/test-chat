import './VolumeInput.css';

interface VolumeInputProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}
export const VolumeInput = ({ volume, onVolumeChange }: VolumeInputProps) => {
  return (
    <div className="volume-input-container">
      <input
        aria-label="volume"
        name="volume"
        type="range"
        min={0}
        step={0.05}
        max={1}
        value={volume}
        className="volume-input"
        onChange={(e) => {
          onVolumeChange(e.currentTarget.valueAsNumber);
        }}
      />
    </div>
  );
};

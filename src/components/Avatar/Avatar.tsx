import { AvatarIcon } from '../icons/AvatarIcon';
import './Avatar.css';

type AvatarProps = {
  size: number;
  style?: Record<string, string | number>;
};

export const Avatar = ({ size, style }: AvatarProps) => (
  <div className="avatar-container" style={style || {}}>
    {/* <div className="avatar-icon-bg" style={{ height: size, width: size }}> */}
    <AvatarIcon width={size} height={size} />
    {/* </div> */}
  </div>
);

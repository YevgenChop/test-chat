import { Reply } from '../../types';
import { IconButton } from '../IconButton';
import './ReplyMessage.css';

type ReplyMessageProps = {
  data: Reply;
};

export const ReplyMessage = ({ data }: ReplyMessageProps) => {
  const { text, user } = data;

  return (
    <div className="reply-message-container">
      <div className="reply-message-avatar">
        <IconButton onClick={() => {}}>
          <img className="reply-message-avatar-img" src={user.avatar} alt="" />
        </IconButton>
      </div>
      <div className="message-body-wrapper">
        <div className="reply-message-body">
          {text}
          <div className="message-emotions">
            <button className="emotion-block-button">
              <div className="emotion-block-emoji">&#128513;</div>
              <div className="emotion-block-count">10</div>
            </button>
            <button className="emotion-block-button">
              <div className="emotion-block-emoji">&#128515;</div>
              <div className="emotion-block-count">4</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

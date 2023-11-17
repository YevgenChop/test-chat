import { Fragment } from 'react';
import { Message } from '../../types';
import { AudioMessage } from '../AudioMessage';
import { ReplyBlock } from '../ReplyBlock';
import './Chat.css';

type ChatProps = {
  data: Message[];
};

export const Chat = ({ data }: ChatProps) => (
  <div className="chat-container">
    {data.map(({ id, audio, replies, user }: Message) => (
      <Fragment key={id}>
        {audio && <AudioMessage key={audio.src} user={user} audio={audio} />}
        {replies?.length && <ReplyBlock replies={replies} />}
      </Fragment>
    ))}
  </div>
);

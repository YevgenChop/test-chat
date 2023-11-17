export type User = {
  avatar: string;
};

export type Audio = {
  src: string;
  transcript: string;
};

export type Reply = {
  text: string;
  emotions?: [];
  user: User;
};

export type Message = {
  audio?: Audio;
  replies?: Reply[];
  user: User;
};

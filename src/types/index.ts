export type User = {
  avatar: string;
};

export type Audio = {
  src: string;
  transcript: string;
};

export type Reply = {
  id: string;
  text: string;
  emotions?: [];
  user: User;
};

export type Message = {
  id: string;
  audio?: Audio;
  replies?: Reply[];
  user: User;
};

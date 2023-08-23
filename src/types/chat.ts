export interface Message {
  id: string;
  name: string;
  text: string;
  uid: string;
  createdAt: MessageCreatedAt;
}

interface MessageCreatedAt {
  nanoseconds: number;
  seconds: number
}
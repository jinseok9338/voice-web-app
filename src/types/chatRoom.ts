export type ChatRoom = {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
  name: string;
  last_message: string;
  chat_type: string;
  id: string;
  last_sent_user_id: string;
  avatar?: string;
};

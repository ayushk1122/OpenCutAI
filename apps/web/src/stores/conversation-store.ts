import { create } from "zustand";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ConversationState {
  messages: Message[];
  isStreaming: boolean;
  
  addMessage: (message: Omit<Message, "id" | "timestamp">) => void;
  clearMessages: () => void;
  setIsStreaming: (isStreaming: boolean) => void;
}

export const useConversationStore = create<ConversationState>((set) => ({
  messages: [],
  isStreaming: false,

  addMessage: ({ role, content }) => {
    const message: Message = {
      id: crypto.randomUUID(),
      role,
      content,
      timestamp: Date.now(),
    };
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },

  clearMessages: () => {
    set({ messages: [] });
  },

  setIsStreaming: (isStreaming: boolean) => {
    set({ isStreaming });
  },
}));


"use client";

import { Message as MessageType } from "@/stores/conversation-store";
import { cn } from "@/lib/utils";

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2.5 text-sm whitespace-pre-wrap break-words leading-relaxed",
          isUser
            ? "bg-black text-white dark:bg-zinc-700 dark:text-white"
            : "bg-muted text-foreground dark:bg-zinc-800 dark:text-white"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}


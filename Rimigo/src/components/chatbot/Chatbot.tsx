'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hello! I am Rimigo Bot. How can I help you plan your next adventure?',
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessages = [
      ...messages,
      { id: messages.length + 1, sender: 'user', text: inputValue },
    ];
    setMessages(newMessages);
    setInputValue('');

    // Dummy bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'bot',
          text: 'That sounds amazing! Let me find some options for you.',
        },
      ]);
    }, 1000);
  };
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to the bottom of the content in the scroll area
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="icon"
            className="rounded-full w-14 h-14 shadow-lg animate-pulse"
            onClick={() => setIsOpen(true)}
          >
            <MessageSquare className="h-6 w-6" />
            <span className="sr-only">Open Chat</span>
          </Button>
        </div>

        <SheetContent className="flex flex-col p-0" side="right">
          <SheetHeader className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarFallback>
                  <Bot />
                </AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle>Rimigo Bot</SheetTitle>
                <SheetDescription>Your AI Travel Assistant</SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-end gap-2 animate-slide-in-bottom',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                  style={{ animationDelay: `${Math.min(index * 0.1, 0.5)}s`, animationFillMode: 'backwards' }}
                >
                  {message.sender === 'bot' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-[75%] rounded-lg px-4 py-2 text-sm',
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <SheetFooter className="p-4 border-t">
            <form
              className="flex w-full items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <Input
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

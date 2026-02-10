import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface WhatsAppQuickMessagesProps {
  whatsappNumber: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
  label?: string;
}

export function WhatsAppQuickMessages({
  whatsappNumber,
  variant = 'outline',
  size = 'lg',
  className = '',
  showIcon = true,
  label = 'WhatsApp',
}: WhatsAppQuickMessagesProps) {
  const messages = [
    "Hi, I'm looking to buy a new mobile.",
    "Hi, I need mobile service or repair.",
    "Hi, I want to know about accessories.",
  ];

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {showIcon && <MessageCircle className="mr-2 h-5 w-5" />}
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-3" align="center">
        <div className="space-y-2">
          <p className="text-sm font-medium mb-3">Choose a message:</p>
          {messages.map((message, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              size="sm"
              className="w-full justify-start text-left h-auto py-3 px-3 font-normal"
            >
              <a
                href={createWhatsAppLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{message}</span>
              </a>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

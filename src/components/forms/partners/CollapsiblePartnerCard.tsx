import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CollapsiblePartnerCardProps {
    title: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}

const CollapsiblePartnerCard: React.FC<CollapsiblePartnerCardProps> = ({
    title,
    isOpen,
    onOpenChange,
    children,
}) => {
    return (
        <Collapsible open={isOpen} onOpenChange={onOpenChange} className="w-full flex flex-col">
            <div className="flex items-center justify-between">
                <Label className="text-base font-semibold">{title}</Label>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-current focus-visible:ring-0">
                        {isOpen ? (
                            <ChevronUp className="size-8 p-0" />
                        ) : (
                            <ChevronDown className="size-8 p-0" />
                        )}
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div
                    className="border-t my-6"
                    style={{ borderColor: 'var(--global-section-divider-color)' }}
                />
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
};

export default CollapsiblePartnerCard;

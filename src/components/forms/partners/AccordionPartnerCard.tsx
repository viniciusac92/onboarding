import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Label } from '@/components/ui/label';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface AccordionPartnerCardProps {
    title: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    role: string;
    children: React.ReactNode;
}

const AccordionPartnerCard: React.FC<AccordionPartnerCardProps> = ({
    title,
    isOpen,
    onOpenChange,
    role,
    children,
}) => {
    const value = isOpen ? 'item-1' : '';

    const handleValueChange = (val: string) => {
        onOpenChange(val === 'item-1');
    };

    return (
        <Accordion
            type="single"
            value={value}
            onValueChange={handleValueChange}
            className="w-full"
            collapsible
        >
            <AccordionItem value="item-1" className="border-none">
                <div className="flex items-center justify-between my-5">
                    <Label className="text-base font-semibold">{title}</Label>
                    <div className="flex items-center gap-4">
                        {role === 'admin' && (
                            <Label className="text-sm font-semibold w-[131px] px-4 py-1 rounded-md bg-blue-100 text-blue-600">
                                Administrador
                            </Label>
                        )}
                        <AccordionTrigger className="h-10 w-8 p-0 flex-none" />
                    </div>
                </div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="accordion-motion-content"
                            style={{ overflow: 'hidden' }}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div
                                className="border-t my-6"
                                style={{ borderColor: 'var(--global-section-divider-color)' }}
                            />
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionPartnerCard;

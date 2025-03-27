import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/forms/InfoDialog';
import { Button } from '@/components/ui/button';
import { InfoNoCircle } from '@/assets/icons/InfoNoCircle';

interface InfoDialogProps {
    title: string;
    description: string;
    onClose?: () => void;
}

const InfoDialog: React.FC<InfoDialogProps> = ({ title, description, onClose }) => {
    return (
        <Dialog modal={true}>
            <DialogTrigger asChild>
                <span className="flex items-center justify-center bg-blue-100 rounded-full h-4 w-4 mt-[2px] cursor-pointer">
                    <InfoNoCircle />
                </span>
            </DialogTrigger>
            <DialogContent
                className="p-4 bg-white shadow-none rounded-lg"
                onPointerDownOutside={event => event.preventDefault()}
            >
                <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
                <DialogDescription className="text-sm font-normal text-gray-600 mt-2">
                    {description}
                </DialogDescription>
                <div className="flex justify-end mt-4">
                    <DialogPrimitive.Close asChild>
                        <Button
                            className="text-white text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md focus:outline-none focus-visible:ring-0"
                            onClick={onClose}
                        >
                            OK
                        </Button>
                    </DialogPrimitive.Close>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default InfoDialog;

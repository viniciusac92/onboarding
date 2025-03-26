import React from 'react';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';
import { Label } from '../ui/label';
import { FileUploadArea } from '../uploadArea';
import { Card, CardContent } from '../ui/card';

interface EnterpriseRightColumnProps {
    handleNext: () => void;
}

const EnterpriseRightColumn: React.FC<EnterpriseRightColumnProps> = ({ handleNext }) => {
    return (
        <div className="responsive-column flex flex-col pt-12 pr-20 space-y-4 md:space-y-6 min-h-screen max-w-[360px]">
            <Card className="rounded-sm p-6 border-none">
                <CardContent className="p-0">
                    <Label className="text-base font-medium pb-1.5">IPTU</Label>
                    <Label className="font-normal pb-1.5 leading-5">
                        Indique o número do IPTU do local da empresa.
                    </Label>
                    <Input className="text-sm font-normal border-none" placeholder="Ex: 125.008" />
                    <div
                        className="border-t my-4"
                        style={{ borderColor: 'var(--global-section-divider-color)' }}
                    />
                    <FileUploadArea title="Anexar cópia do IPTU" description="Arraste e solte" />
                </CardContent>
            </Card>
            <div className="mt-auto">
                <Button
                    variant="default"
                    onClick={handleNext}
                    className="flex items-center justify-between w-full normal-case bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
                >
                    <span className="relative top-[1px]">Avançar</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default EnterpriseRightColumn;

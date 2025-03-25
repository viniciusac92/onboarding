import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

interface CompanyCardProps {
    companyName: string;
    status: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ companyName, status }) => {
    return (
        <Card className="rounded-sm border-none">
            <CardContent className="pt-0 mt-0 flex-1">
                <div className="flex items-center justify-between">
                    <Label className="font-semibold text-base">[{companyName}]</Label>
                    <Button
                        className={`w-[131px] rounded-md text-sm ${status === 'concluido' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                    >
                        {status === 'concluido' ? 'Concluído' : 'Pendente'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default CompanyCard;

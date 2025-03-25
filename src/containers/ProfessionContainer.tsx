import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CustomDataLabel } from '@/components/ui/customDataLabel';

const ProfessionContainer: React.FC = () => {
    return (
        <Card className="rounded-sm p-6 border-none">
            <CardContent className="p-0">
                <CustomDataLabel className="mb-2">Profissão</CustomDataLabel>
                <Label className="font-normal pb-3.5">Informe sua profissão</Label>
                <Input className="border-none" placeholder="Ex: Contador" />
            </CardContent>
        </Card>
    );
};

export default ProfessionContainer;

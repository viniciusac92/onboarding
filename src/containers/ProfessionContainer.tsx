import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const ProfessionContainer: React.FC = () => {
    return (
        <Card className="relative rounded p-6 border-none">
            <CardContent className="p-0">
                <div>
                    <Label className="block font-bold pb-1.5">Profissão</Label>
                    <Label className="block pb-3.5">Informe sua profissão</Label>
                    <Input placeholder="Ex: Contador" />
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfessionContainer;

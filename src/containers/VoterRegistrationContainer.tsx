import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CustomDataLabel } from '@/components/ui/customDataLabel';

const VoterRegistrationContainer: React.FC = () => {
    return (
        <Card className="rounded-sm p-6 border-none">
            <CardContent className="p-0">
                <CustomDataLabel className="mb-2">Título de Eleitor</CustomDataLabel>
                <Label className="font-normal pb-3.5">
                    Informe o número do seu título de eleitor.
                </Label>
                <Input className="text-sm font-normal border-none" placeholder="xxxxxxxxx/xx" />
            </CardContent>
        </Card>
    );
};

export default VoterRegistrationContainer;

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CustomDataLabel } from '@/components/ui/customDataLabel';

const CorporateInterestContainer: React.FC = () => {
    return (
        <Card className="rounded-sm p-6 border-none">
            <CardContent className="p-0">
                <CustomDataLabel className="mb-2">Pró-labore</CustomDataLabel>
                <Label className="font-normal pb-3.5 leading-5">
                    Informe o valor em percentual da participação do sócio.
                </Label>
                <Input className="text-sm font-normal border-none" placeholder="R$ 45.000,00" />
            </CardContent>
        </Card>
    );
};

export default CorporateInterestContainer;

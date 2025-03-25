import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CustomDataLabel } from '@/components/ui/customDataLabel';

const CorporateInterestContainer: React.FC = () => {
    return (
        <Card className="rounded-sm p-6 border-none">
            <CardContent className="p-0">
                <CustomDataLabel className="mb-2">Participação societária</CustomDataLabel>
                <Label className="font-normal pb-3.5">
                    Informe o valor em percentual da participação do sócio.
                </Label>
                <Input className="border-none" placeholder="45%" />
            </CardContent>
        </Card>
    );
};

export default CorporateInterestContainer;

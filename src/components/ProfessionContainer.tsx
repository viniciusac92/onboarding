import { Card, CardContent } from '@/components/ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

const ProfessionContainer: React.FC = () => {
  return (
    <Card className="relative rounded p-6">
      <CardContent className="p-0">
        <div>
          <Label className="block font-bold pb-1.5">Profissão</Label>
          <Label className="block pb-3.5">Informe sua profissão</Label>
          <Input placeholder="Ex: Contador" className="w-full focus-visible:ring-0 bg-gray-100" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionContainer;
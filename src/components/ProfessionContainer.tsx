import { Card, CardContent } from '@/components/ui/card';
import { Input } from './ui/input';

const ProfessionContainer = () => {
  return (
    <Card className="relative rounded h-full">
      <CardContent className="pt-0 mt-0">
        <div className="mb-4">
          <label className="block text-base font-bold font-medium text-black-500">Profissão</label>
          <label className="block text-base font-medium text-gray-700">Informe sua profissão</label>
          <Input placeholder="Ex: Contador" className="w-full mt-1 focus-visible:ring-0  bg-gray-100" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionContainer;
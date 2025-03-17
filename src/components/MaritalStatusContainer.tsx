import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const MaritalStatusContainer = () => {
  return (
    <Card className="relative rounded">
      <CardContent className="pt-0 mt-0 flex-1">
        <div className="mb-4 border-b border-[#F5F5F5]">
          <label className="block font-bold mb-3.5">Estado Civil</label>
          <Select>
            <SelectTrigger className="w-full focus-visible:ring-0 bg-gray-100">Solteiro</SelectTrigger>
            <SelectContent>
              <SelectItem value="solteiro">Solteiro</SelectItem>
              <SelectItem value="casado">Casado</SelectItem>
              <SelectItem value="divorciado">Divorciado</SelectItem>
              <SelectItem value="viuvo">Viúvo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border-t border-[#F5F5F5] mt-4 mb-2"></div>
        <div className="mb-4">
          <label className="block font-bold mb-3.5">Regime patrimonial</label>
          <Select>
            <SelectTrigger className="w-full focus-visible:ring-0 bg-gray-100">Comunhão parcial de bens</SelectTrigger>
            <SelectContent>
              <SelectItem value="comunhao-parcial">Comunhão parcial de bens</SelectItem>
              <SelectItem value="comunhao-universal">Comunhão universal de bens</SelectItem>
              <SelectItem value="separacao-total">Separação total de bens</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaritalStatusContainer;
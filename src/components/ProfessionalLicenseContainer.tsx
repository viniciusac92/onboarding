import { Card, CardContent } from '@/components/ui/card';
import { Input } from './ui/input';
import { Upload } from 'lucide-react';

const ProfessionalLicenseContainer = () => {
  return (
    <Card className="relative rounded h-full">
      <CardContent className="pt-0 mt-0">
        <div className="mb-4">
          <label className="block text-base font-bold font-medium text-black-500">Anexar Carteira Profissional</label>
        </div>
        <div className="mt-1 flex justify-center items-center gap-8 px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
          <Upload className="h-5 w-5 text-indigo-600" />
          <div className="flex flex-col items-left">
            <div className="flex flex-row text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none">
                <span>Arraste e solte</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">ou selecione um arquivo</p>
            </div>
            <p className="text-xs text-gray-500">Limite de arquivo 25 MB</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalLicenseContainer;
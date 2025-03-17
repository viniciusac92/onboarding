import { Card, CardContent } from '@/components/ui/card';
import { Input } from './ui/input';
import { Upload } from 'lucide-react';

const ProfessionalLicenseContainer = () => {
  return (
    <Card className="relative rounded">
      <CardContent className="pt-0 mt-0">
        <div className="mb-4">
          <label className="block font-bold">Anexar Carteira Profissional</label>
        </div>
        <div className="flex justify-center items-center gap-6 px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
          <div className="text-indigo-600">
            <Upload className="h-5 w-5" />
          </div>
          <div className="flex flex-col items-left">
            <div className="flex flex-row text-xs text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer text-indigo-600 hover:text-indigo-500 focus:outline-none text-[10px]">
                <span>Arraste e solte</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1 text-[10px]">o arquivo aqui</p>
            </div>
            <p className="text-xs text-gray-500 text-[8px]">Limite de arquivo 25 MB</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalLicenseContainer;
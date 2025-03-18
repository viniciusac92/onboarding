import React from 'react';
import { Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DataLabel } from '@/components/DataLabel';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '../ui/label';

const UserInfoContainer: React.FC = () => {
  const name = "Pietro Schirano";
  const cpf = "xxx.xxx.xxx-xx";
  const rg = "xx.xxx-xxx";
  const orgao = "SSPMG";

  return (
    <div className="flex flex-col">
      <Card className="relative rounded h-full flex-1 border-none">
        <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
            <div className="mb-4">
              <DataLabel>Nome</DataLabel>
              <Input value={name} />
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex-1 max-w-[400px]">
                <DataLabel>CPF</DataLabel>
                <Input value={cpf} />
              </div>
              <div className="flex-1 max-w-33.5">
                <DataLabel>RG</DataLabel>
                <Input value={rg} />
              </div>
              <div className="flex-1 max-w-19">
                <DataLabel>Órgão</DataLabel>
                <Input value={orgao} />
              </div>
            </div>
            <div className="mt-4">
              <Label className="block font-bold pb-3.5">Anexar CNH ou RG</Label>
              <div className="flex justify-center items-center gap-8 px-6 pt-5 pb-6 border-2 border-dashed rounded-md bg-gray-100">
                <Upload className="h-5 w-5 text-indigo-600" />
                <div className="flex flex-col items-left">
                  <div className="flex flex-row text-gray-600">
                    <Label htmlFor="file-upload" className="relative cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-[10px]">
                      <span>Arraste e solte</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </Label>
                    <p className="pl-1 text-[10px]">o arquivo aqui</p>
                  </div>
                  <p className="text-xs text-gray-500 text-[8px]">Limite de arquivo 25 MB</p>
                </div>
              </div>
            </div>
          </CardContent>
      </Card>
    </div>
  );
};

export default UserInfoContainer;

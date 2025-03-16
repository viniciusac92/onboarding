import React, { useState } from 'react';
import { Upload, ChevronUp, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const UserInfoContainer: React.FC = () => {
  const name = "Pietro Schirano";
  const cpf = "xxx.xxx.xxx-xx";
  const rg = "xx.xxx-xxx";
  const orgao = "SSPMG";

  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Seus dados</h1>
      <Card className="relative rounded h-full flex-1">
        <CardHeader onClick={toggleOpen} className="cursor-pointer flex justify-between items-center h-8">
          {isOpen ? <ChevronUp className="absolute right-4 top-4" /> : <ChevronDown className="absolute right-4 top-4" />}
        </CardHeader>
        {isOpen && (
          <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
            <div className="mb-2">
              <Label className="block text-base font-medium text-gray-700">Nome</Label>
              <Input readOnly value={name} className="mt-1 focus-visible:ring-0 bg-gray-100" />
            </div>
            <div className="flex gap-4 mb-2">
              <div className="flex-2">
                <Label className="block text-base font-medium text-gray-700">CPF</Label>
                <Input readOnly value={cpf} className="mt-1 focus-visible:ring-0 w-full bg-gray-100" />
              </div>
              <div className="flex-1">
                <Label className="block text-base font-medium text-gray-700">RG</Label>
                <Input readOnly value={rg} className="mt-1 focus-visible:ring-0 w-full bg-gray-100" />
              </div>
              <div className="w-1/6">
                <Label className="block text-base font-medium text-gray-700">Órgão</Label>
                <Input readOnly value={orgao} className="mt-1 focus-visible:ring-0 w-full bg-gray-100" />
              </div>
            </div>
            <div className="mt-4 ">
              <Label className="block text-base font-medium text-gray-700">Anexar CNH ou RG</Label>
              <div className="mt-1 flex justify-center items-center gap-8 px-6 pt-5 pb-6 border-2 border-dashed rounded-md bg-gray-100">
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
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default UserInfoContainer;

import React from 'react';
import { Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const AddressContainer: React.FC = () => {
  const cep = "00000-000";
  const cidade = "São Paulo";
  const estado = "SP";
  const logradouro = "Rua 1";
  const bairro = "Bairro 1";
  const numero = "1";
  const complemento = "Complemento 1";

  return (
    <div className="flex flex-col mt-8">
      <Card className="relative rounded  border-none">
        <CardHeader className="font-bold text-[16px]">Meu endereço</CardHeader>
          <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex-1 max-w-[128px]">
                <Label className="block font-bold mb-1.5">CEP</Label>
                <Input value={cep} />
              </div>
              <div className="flex-1 ">
                <Label className="block font-bold mb-1.5">Cidade</Label>
                <Input value={cidade} />
              </div>
              <div className="flex-1 max-w-[47px]">
                <Label className="block font-bold mb-1.5">Estado</Label>
                <Input value={estado} />
              </div>
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex-1">
                <Label className="block font-bold mb-1.5">Logradouro</Label>
                <Input value={logradouro} />
              </div>
              <div className="flex-1 max-w-[205px]">
                <Label className="block font-bold mb-1.5">Bairro</Label>
                <Input value={bairro} />
              </div>
              <div className="flex-1 max-w-[53px]">
                <Label className="block font-bold mb-1.5">Número</Label>
                <Input value={numero} />
              </div>
            </div>
            <div className="flex-1 max-w-[262px]">
              <Label className="block font-bold mb-1.5">Complemento</Label>
              <Input value={complemento} />
            </div>
            <div className="mt-4">
              <Label className="block font-bold pb-1.5">Anexar Comprovante de Endereço</Label>
              <Label className="block pb-3.5">Se a sua empresa atua nesse local, utilize o IPTU como comprovante.</Label>
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

export default AddressContainer;

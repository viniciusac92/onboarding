import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const AddressContainer: React.FC = () => {
  const login = "E-mail";
  const password = "Senha";

  return (
    <div className="flex flex-col mt-8">
      <Card className="relative rounded  border-none">
        <CardHeader className="font-bold text-[16px]">Acesso ao Gov.br</CardHeader>
        <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
          <div className="mb-4">
            <Label className="block font-bold mb-1.5">Login</Label>
            <Input readOnly value={login} />
          </div>
          <div className="mb-4">
            <Label className="block font-bold mb-1.5">Senha</Label>
            <Input readOnly value={password} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddressContainer;

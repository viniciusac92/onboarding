import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import FileUploadArea from '@/components/uploadArea/FileUploadArea';
import { Info } from 'lucide-react';

const NewPartnerMiddleColumn: React.FC = () => {
    return (
        <div className="responsive-column px-4 space-y-4 md:space-y-6">
            {/* Info Card */}
            <Card className="relative rounded border-none mb-8 bg-blue-50">
                <CardContent className="p-4 flex items-start gap-3">
                    <div className="text-blue-500 mt-0.5">
                        <Info size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1 text-blue-900">S&oacute;cio administrador</h3>
                        <p className="text-sm text-blue-800">
                            &Eacute; a pessoa respons&aacute;vel pelo contato com a gente. S&oacute; uma pessoa pode ser administrador.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                {/* Personal Info */}
                <div>
                    <Label className="font-bold mb-2 block">Nome</Label>
                    <Input placeholder="Pietro Schiriano" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label className="font-bold mb-2 block">Data de nascimento</Label>
                        <Input placeholder="xx/xx/xxxx" />
                    </div>
                    <div className="flex items-center gap-2 mt-8">
                        <input type="checkbox" id="isAdmin" className="rounded" />
                        <Label htmlFor="isAdmin" className="text-sm">Administrador</Label>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label className="font-bold mb-2 block">CPF</Label>
                        <Input placeholder="xxx.xxx.xxx-xx" />
                    </div>
                    <div>
                        <Label className="font-bold mb-2 block">RG</Label>
                        <Input placeholder="xx.xxx-xxx" />
                    </div>
                    <div>
                        <Label className="font-bold mb-2 block">Órgão</Label>
                        <Input placeholder="SSPMG" />
                    </div>
                </div>

                <div>
                    <Label className="font-bold mb-2 block">Anexar CNH ou RG</Label>
                    <FileUploadArea 
                        title="Anexar CNH ou RG" 
                        description="Arraste e solte o arquivo aqui" 
                        limitInfo="Limite do arquivo: 25 MB" 
                    />
                </div>
            </div>

            {/* Address section */}
            <Card className="relative rounded border-none mt-8">
                <CardHeader className="font-bold text-[16px]">Endereço</CardHeader>
                <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <Label className="font-bold mb-2 block">CEP</Label>
                            <Input placeholder="30431191" />
                        </div>
                        <div>
                            <Label className="font-bold mb-2 block">Cidade</Label>
                            <Input placeholder="Pietro Schiriano" />
                        </div>
                        <div>
                            <Label className="font-bold mb-2 block">Estado</Label>
                            <Input placeholder="MG" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <Label className="font-bold mb-2 block">Logradouro</Label>
                            <Input placeholder="Pietro Schiriano" />
                        </div>
                        <div>
                            <Label className="font-bold mb-2 block">Bairro</Label>
                            <Input placeholder="Pietro Schiriano" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <Label className="font-bold mb-2 block">Número</Label>
                            <Input placeholder="2473" />
                        </div>
                        <div className="col-span-2">
                            <Label className="font-bold mb-2 block">Complemento</Label>
                            <Input placeholder="Pietro Schiriano" />
                        </div>
                    </div>

                    <div>
                        <Label className="font-bold mb-2 block">Anexar Comprovante de Endereço</Label>
                        <FileUploadArea 
                            title="Anexar Comprovante de Endereço" 
                            description="Arraste e solte o arquivo aqui" 
                            limitInfo="Limite do arquivo: 25 MB" 
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default NewPartnerMiddleColumn;

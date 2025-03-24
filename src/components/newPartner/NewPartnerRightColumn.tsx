import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight } from 'lucide-react';

interface NewPartnerRightColumnProps {
    handleSave: () => void;
}

const NewPartnerRightColumn: React.FC<NewPartnerRightColumnProps> = ({ handleSave }) => {
    return (
        <div className="responsive-column flex flex-col pt-12 pb-24 pr-20 space-y-6 max-w-[340px]">
            {/* Estado Civil */}
            <div>
                <Label className="font-bold mb-2 block">Estado Civil</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Solteiro" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="solteiro">Solteiro</SelectItem>
                        <SelectItem value="casado">Casado</SelectItem>
                        <SelectItem value="divorciado">Divorciado</SelectItem>
                        <SelectItem value="viuvo">Viúvo</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Regime patrimonial */}
            <div>
                <Label className="font-bold mb-2 block">Regime patrimonial</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Comunhão parcial de bens" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="comunhao-parcial">Comunhão parcial de bens</SelectItem>
                        <SelectItem value="comunhao-universal">Comunhão universal de bens</SelectItem>
                        <SelectItem value="separacao-total">Separação total de bens</SelectItem>
                        <SelectItem value="participacao-final">Participação final nos aquestos</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Profissão */}
            <div>
                <Label className="font-bold mb-2 block">Profissão</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Contador" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="contador">Contador</SelectItem>
                        <SelectItem value="engenheiro">Engenheiro</SelectItem>
                        <SelectItem value="advogado">Advogado</SelectItem>
                        <SelectItem value="medico">Médico</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Participação societária */}
            <div>
                <Label className="font-bold mb-2 block">Participação societária</Label>
                <p className="text-sm text-gray-600 mb-2">Informe o valor em percentual da participação do sócio.</p>
                <Input placeholder="45%" />
            </div>

            {/* Save Button */}
            <div className="mt-auto">
                <Button
                    variant="default"
                    onClick={handleSave}
                    className="flex items-center justify-between w-full normal-case bg-blue-500 hover:bg-blue-600"
                >
                    <span className="relative">Salvar alterações</span>
                    <ChevronRight size={16} />
                </Button>
            </div>
        </div>
    );
};

export default NewPartnerRightColumn;

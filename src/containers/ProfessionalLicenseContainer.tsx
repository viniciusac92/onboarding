import { FileUploadArea } from '@/components/uploadArea';
import { Card, CardContent } from '@/components/ui/card';

const ProfessionalLicenseContainer = () => {
    return (
        <Card className="rounded-sm border-none gap-0">
            <CardContent className="rounded-sm pt-0 mt-0">
                <FileUploadArea
                    title="Anexar Carteira Profissional"
                    subtitle="Caso possua registro profissional, anexe a sua carteira aqui."
                    description="Arraste e solte"
                />
            </CardContent>
        </Card>
    );
};

export default ProfessionalLicenseContainer;

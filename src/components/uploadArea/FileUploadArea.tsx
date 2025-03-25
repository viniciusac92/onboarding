import { Upload } from 'lucide-react';
import { Label } from '../ui/label';
import { CustomDataLabel } from '../ui/customDataLabel';
import { Input } from '../ui/input';

interface FileUploadAreaProps {
    title: string;
    subtitle?: string;
    description?: string;
    limitInfo?: string;
}

const FileUploadArea: React.FC<FileUploadAreaProps> = ({
    title,
    subtitle,
    description,
    limitInfo = 'Limite de arquivo 25 MB',
}) => {
    return (
        <>
            <CustomDataLabel>{title}</CustomDataLabel>
            {subtitle && <Label className="text-sm font-normal pb-1.5">{subtitle}</Label>}
            <div className="flex flex-row justify-center items-center border-2 border-dashed rounded-sm bg-gray-100 py-4">
                <Upload className="h-5 w-5 text-indigo-600 mr-6" />
                <div className="flex flex-col text-gray-600 justify-center">
                    <div className="flex flex-row justify-center items-center">
                        <span className="h-4 cursor-pointer text-[10px] font-medium text-indigo-600 hover:text-indigo-500">
                            <label htmlFor="file-upload">{description ?? 'Arraste e solte'}</label>
                            <Input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                            />
                        </span>
                        <span className="h-4 pl-1 text-[10px] font-normal">o arquivo aqui</span>
                    </div>
                    <p className="text-[8px] text-gray-500">{limitInfo}</p>
                </div>
            </div>
        </>
    );
};

export default FileUploadArea;

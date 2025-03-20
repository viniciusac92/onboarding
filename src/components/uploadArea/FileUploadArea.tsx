import { Upload } from 'lucide-react';
import { Label } from '../ui/label';

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
        <div className="mt-4">
            <Label className="block font-bold pb-1.5">{title}</Label>
            {subtitle && <Label className="block pb-3.5">{subtitle}</Label>}

            <div className="flex justify-center items-center gap-8 px-6 pt-5 pb-6 border-2 border-dashed rounded-md bg-gray-100">
                <Upload className="h-5 w-5 text-indigo-600" />
                <div className="flex flex-col items-left">
                    <div className="flex flex-row text-gray-600">
                        <Label
                            htmlFor="file-upload"
                            className="relative cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-[10px]"
                        >
                            <span>{description ?? 'Arraste e solte'}</span>
                            <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                            />
                        </Label>
                        <p className="pl-1 text-[10px]">o arquivo aqui</p>
                    </div>
                    <p className="text-xs text-gray-500 text-[8px]">{limitInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default FileUploadArea;

import { Upload } from 'lucide-react';
import { Label } from '../ui/label';
import { CustomDataLabel } from '../ui/customDataLabel';

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
        <div>
            <CustomDataLabel>{title}</CustomDataLabel>
            {subtitle && <Label className="font-normal pb-1.5">{subtitle}</Label>}
            <div className="flex gap-8 px-6 pt-5 pb-6 border-2 border-dashed rounded-sm bg-gray-100">
                <Upload className="h-5 w-5 text-indigo-600" />
                <div className="flex flex-col text-gray-600">
                    <Label
                        htmlFor="file-upload"
                        className="relative cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-[10px]"
                    >
                        <span className="w-32">
                            {description ?? 'Arraste e solte'}
                            <p className="pl-1 font-size">o arquivo aqui</p>
                        </span>
                        <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                        />
                    </Label>
                </div>
                <p className="text-[8px] text-gray-500">{limitInfo}</p>
            </div>
        </div>
    );
};

export default FileUploadArea;

import React from 'react';
import PasswordEnabledInput from '@/components/forms/PasswordEnabledInput';

interface GovCredentialsProps {
    cpf: string;
    password: string;
    showPassword: boolean;
    onToggleVisibility: () => void;
}

const GovCredentials: React.FC<GovCredentialsProps> = ({
    cpf,
    password,
    showPassword,
    onToggleVisibility,
}) => {
    return (
        <div className="space-y-2">
            <PasswordEnabledInput label="CPF" value={cpf} type="text" />
            <PasswordEnabledInput
                label="Senha"
                value={password}
                type={showPassword ? 'text' : 'password'}
                onToggleVisibility={onToggleVisibility}
                showVisibilityToggle
            />
        </div>
    );
};

export default GovCredentials;

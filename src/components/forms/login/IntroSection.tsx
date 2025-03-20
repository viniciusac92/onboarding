const IntroSection: React.FC = () => {
    return (
        <div className="hidden sm:flex sm:flex-1 items-center">
            <div className="text-white max-w-[600px] ml-20">
                <h1 className="text-[64px] leading-[1.5] font-thin mb-0">
                    Contabilidade não é
                    <br />
                    fácil pra ninguém.
                </h1>
                <h2 className="text-[64px] leading-[1.15] font-thin mt-0">
                    Pra gente, é <span className="font-bold">Obvia</span>.
                </h2>
            </div>
        </div>
    );
};

export default IntroSection;

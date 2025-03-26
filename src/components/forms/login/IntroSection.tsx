const IntroSection: React.FC = () => {
    return (
        <div className="hidden sm:flex sm:flex-1 items-center">
            <div className="text-white max-w-[600px] ml-20">
                <h1 className="text-[64px] leading-12.5 font-light">Contabilidade não é</h1>
                <br />
                <h1 className="text-[64px] leading-12.5 font-light">fácil pra ninguém.</h1>
                <h2 className="text-[64px] leading-12.5 font-light">
                    Pra gente, é <span className="font-semibold">Obvia</span>
                    <span className="text-9xl leading-12.5">.</span>
                </h2>
            </div>
        </div>
    );
};

export default IntroSection;

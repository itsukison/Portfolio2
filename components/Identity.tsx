import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Identity: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-[#F9F9F6] text-deep-black min-h-[100dvh] md:min-h-0 md:h-[calc(100vh-5rem)] relative flex flex-col border-t border-black/10 overflow-hidden">
            <div className="container mx-auto w-full h-full flex flex-col border-l border-r border-black/10">

                {/* Top Half: Huge Quote */}
                <div className="w-full p-6 md:p-8 lg:p-12 flex flex-col justify-center border-b border-black/10 shrink-0">
                    <div className="max-w-5xl">
                        <h2 className="font-serif text-[1.5rem] leading-[1.3] md:text-4xl lg:text-[2.6rem] lg:leading-[1.2] italic opacity-90 mb-4 lg:mb-6">
                            {t.quote.sartre}
                        </h2>
                        <p className="font-mono text-xs md:text-sm opacity-60">
                            {t.quote.author}
                        </p>
                    </div>
                </div>

                {/* Bottom Half: Image (Left) + Reflection (Right) */}
                <div className="w-full flex flex-col md:flex-row flex-1 min-h-0">

                    {/* Image Area */}
                    <div className="w-full h-[35vh] md:h-auto md:w-1/3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black/10 flex items-center justify-center relative bg-black/5 shrink-0">
                        <img
                            src="/mouth.png"
                            alt="Surreal mouth artwork"
                            className="w-[50%] md:w-[70%] max-h-full object-contain grayscale contrast-125 mix-blend-multiply opacity-80 -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out"
                        />
                    </div>

                    {/* Reflection Text Area */}
                    <div className="w-full md:w-2/3 p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-[#F9F9F6]">
                        <div className="max-w-2xl space-y-3 lg:space-y-4 font-sans text-base md:text-[1rem] lg:text-[1.2rem] leading-[1.4] font-light">
                            <p>{t.quote.reflection1}</p>
                            <p>{t.quote.reflection2}</p>
                            <p>{t.quote.reflection3}</p>
                            <p className="font-medium opacity-90">{t.quote.reflection4}</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

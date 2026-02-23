import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface Translations {
    hero: {
        floatingText1: string[];
        floatingText2: string[];
        title1: string;
        title2: string;
        subtitle: string;
        cta: string;
    };
    philosophy: {
        headingDesktop: string;
        headingMobile: string;
        headingHighlight: string;
        label: string;
        mainText: string;
        paragraph1: string;
        paragraph2: string;
        paragraphMobile: string;
    };
    projects: {
        headerProject: string;
        headerDescription: string;
        headerYear: string;
        items: {
            name: string;
            title: string;
            description: string;
        }[];
    };
    about: {
        title: string;
        label: string;
        textDesktop: string;
        textMobile: string;
        tagline: string;
        cta: string;
        ctaLink: string;
    };
    footer: {
        name: string;
        links: string[];
        tagline: string;
        cta: string;
        copyright: string;
        location: string;
        localTime: string;
    };
    header: {
        location: string;
        vat: string;
        hours: string;
    };
}

const translations: Record<Language, Translations> = {
    en: {
        hero: {
            floatingText1: ['LOGIC', 'CAN', 'WAIT'],
            floatingText2: ['TOKYO', 'NOW'],
            title1: 'Aesthetics &',
            title2: 'Algorithms.',
            subtitle: 'Itsuki Son — Creative engineer based in Tokyo.',
            cta: 'Initialize Contact',
        },
        philosophy: {
            headingDesktop: 'I create scalable systems and natural interfaces that unify design, engineering, and user experience.',
            headingMobile: 'I create scalable systems that unify design and experience.',
            headingHighlight: 'scalable',
            label: '(Approach)',
            mainText: 'My work is the architecture behind how products move.',
            paragraph1: "I'm obsessed with the \"feel\" of a digital product—the way a scroll feels snappy or a transition provides just enough feedback to keep you curious.",
            paragraph2: "My work unifies design and engineering to create that specific kind of excitement that makes people want to keep exploring. By grounding everything in clean SQL and Supabase backends, I ensure that the beauty isn't just skin deep, but built on a foundation that can handle growth.",
            paragraphMobile: "I'm obsessed with the \"feel\" of a product. My work unifies design and engineering to create experiences that are both beautiful and built on a solid foundation.",
        },
        projects: {
            headerProject: 'Project',
            headerDescription: 'Description',
            headerYear: 'Year',
            items: [
                {
                    name: 'Chrono',
                    title: 'The True AI Employee',
                    description: 'Bridging context, workflows, and execution. An intelligence that understands your company\'s deepest context to delegate tasks autonomously.',
                },
                {
                    name: 'Hearsay',
                    title: 'Social Network Mobile App',
                    description: 'The exclusive social network that ends at 50 feet. No influencers. Just the chaos around you.',
                },
                {
                    name: 'Flowly',
                    title: 'CRM Lead Management',
                    description: 'Modern CRM solution designed to automate data enrichment and lead management.',
                },
                {
                    name: 'Cueme',
                    title: 'Meeting assistant AI agent',
                    description: 'A meeting assistant AI agent that provides realtime insights and analysis for you.',
                },
            ],
        },
        about: {
            title: 'About Me',
            label: '(Design + Engineering)',
            textDesktop: "A developer and designer based in Tokyo. I spend my days bridging the gap between what a product looks like and how it actually lives in the hands of a user. Whether I'm tinkering with Framer for animations or Vite for performance, I'm always searching for that \"aha!\" moment where code becomes an experience.",
            textMobile: 'A developer and designer based in Tokyo, bridging the gap between design and code to create experiences that feel alive.',
            tagline: 'Solutions shaped by structure and restraint.',
            cta: "Don't hesitate to",
            ctaLink: 'get in touch',
        },
        footer: {
            name: 'Itsuki Son',
            links: ['Info', 'Case Studies', 'Photography'],
            tagline: 'I turn coffee into code and brands into cultural forces.',
            cta: "Let's build.",
            copyright: '© 2025 Itsuki Son. All rights reserved.',
            location: 'Tokyo, Japan',
            localTime: 'Local Time:',
        },
        header: {
            location: 'Based in Tokyo',
            vat: 'VAT JP88920192',
            hours: 'M-F 10-19',
        },
    },
    ja: {
        hero: {
            floatingText1: ['LOGIC', 'CAN', 'WAIT'],
            floatingText2: ['TOKYO', 'NOW'],
            title1: 'Aesthetics &',
            title2: 'Algorithms.',
            subtitle: 'Itsuki Son — 東京拠点のクリエイティブエンジニア',
            cta: 'お問い合わせ',
        },
        philosophy: {
            headingDesktop: 'デザイン・エンジニアリング・ユーザー体験を一つに繋げる、スケーラブルなシステムと自然なインターフェースを創造します。',
            headingMobile: 'デザインと体験を融合させる、スケーラブルなシステムを構築します。',
            headingHighlight: 'スケーラブル',
            label: '(アプローチ)',
            mainText: 'プロダクトがどう動くか - その裏側を設計するのが私の仕事です。',
            paragraph1: 'スクロールの気持ちよさ、トランジションの絶妙なフィードバック。デジタルプロダクトの「手触り」に、私はこだわり抜きます。',
            paragraph2: 'デザインとエンジニアリングを融合させ、「もっと触りたい」と思わせる体験を生み出す。SQLとSupabaseによる堅牢なバックエンドで、見た目だけでなく成長にも耐えうる土台を築きます。',
            paragraphMobile: 'プロダクトの「手触り」にこだわり、デザインとエンジニアリングを融合。美しく、かつ確かな基盤の上に成り立つ体験を創ります。',
        },
        projects: {
            headerProject: 'プロジェクト',
            headerDescription: '概要',
            headerYear: '年',
            items: [
                {
                    name: 'Chrono',
                    title: '真のAI従業員',
                    description: 'コンテキスト、ワークフロー、実行の架け橋。会社の深いコンテキストを理解し、自律的にタスクを処理するAI従業員。',
                },
                {
                    name: 'Hearsay',
                    title: 'SNSモバイルアプリ',
                    description: '半径15メートルで完結するSNS。インフルエンサーなし。あるのは、あなたの周りの出来事だけ。',
                },
                {
                    name: 'Flowly',
                    title: 'CRMリード管理',
                    description: 'データエンリッチメントとリード管理を自動化する、現代的なCRMソリューション。',
                },
                {
                    name: 'Cueme',
                    title: 'ミーティングAIアシスタント',
                    description: 'リアルタイムでインサイトと分析を提供する、あなた専用のミーティングAIエージェント。',
                },
            ],
        },
        about: {
            title: '自己紹介',
            label: '(デザイン + エンジニアリング)',
            textDesktop: '東京を拠点に活動するデベロッパー兼デザイナー。プロダクトの「見た目」と「実際に使われる姿」のギャップを埋めることに日々取り組んでいます。Framerでアニメーションを調整するときも、Viteでパフォーマンスを追求するときも、コードが「体験」に変わる瞬間を常に探しています。',
            textMobile: '東京拠点のデベロッパー兼デザイナー。デザインとコードの間を繋ぎ、生きた体験を生み出します。',
            tagline: '構造と抑制が形づくるソリューション。',
            cta: 'お気軽に',
            ctaLink: 'ご連絡ください',
        },
        footer: {
            name: 'Itsuki Son',
            links: ['情報', 'ケーススタディ', '写真'],
            tagline: 'チャットをコードに、ブランドをカルチャーに変える。',
            cta: '一緒に創ろう。',
            copyright: '© 2025 Itsuki Son. All rights reserved.',
            location: '東京',
            localTime: '現地時間:',
        },
        header: {
            location: '東京拠点',
            vat: 'VAT JP88920192',
            hours: '月-金 10-19時',
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

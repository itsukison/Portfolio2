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
    quote: {
        sartre: string;
        author: string;
        reflection1: string;
        reflection2: string;
        reflection3: string;
        reflection4: string;
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
            headingDesktop: "Most AI products are built for people who know how to use AI. I build for the ones who don't.",
            headingMobile: "I build AI products for the ones who don't already know how to use them.",
            headingHighlight: "ones who don't",
            label: '(Approach)',
            mainText: 'The raw capability is already out there.',
            paragraph1: "I build for the person who would benefit most from a smarter tool but would never think to search for one. What is missing is the interface that takes this complex technology and makes it feel like it was always meant for you.",
            paragraph2: "That gap between the user and the product is almost never technical. It is a design problem, and it is the most important one of the decade. By focusing on how natural an interaction feels, I try to turn complex systems into accessible tools for everyday people.",
            paragraphMobile: "I build for the person who would benefit most from a smarter tool but wouldn't search for one. The gap isn't technical. It's a design problem, and the most important one of the decade.",
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
                    name: 'Core7',
                    title: 'Enterprise AI & Product Studio',
                    description: 'The company site for Core7, Inc.—my studio building internal AI tools and bespoke software for enterprise teams, alongside products of our own such as Keigo Button, now at 5,000+ downloads.',
                },
                {
                    name: 'Studio On',
                    title: 'Tokyo Photography Agency',
                    description: 'A photo agency creating cinematic shoots for travelers in Japan, grown to 300K+ views across TikTok and Instagram and more than ¥500K in monthly revenue.',
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
            textDesktop: "I'm Itsuki Son, a design engineer based in Tokyo. I let layout, proportion, and negative space do the guiding so a first-time user moves through a product like someone moving through a well-designed room. Unhurried. Like they've been here before. I'm drawn to work where technology changes someone's actual circumstances. Projects like bitchat, which gives political voice to the suppressed, or tools that do what decades of microfinance policy couldn't.",
            textMobile: "I'm Itsuki Son, a design engineer based in Tokyo. I let layout and negative space do the guiding so users move through a product unhurried. I'm drawn to work where technology changes actual circumstances.",
            tagline: "If you're thinking about a startup at that intersection, I'd love to talk.",
            cta: "Don't hesitate to",
            ctaLink: 'get in touch',
        },
        quote: {
            sartre: "\"I have led a toothless life, he thought. A toothless life. I have never bitten into anything. I was waiting. I was reserving myself for later on — and I have just noticed that my teeth have gone.\"",
            author: "— Jean-Paul Sartre",
            reflection1: "I think about this passage more than I'd like to admit.",
            reflection2: "There is a version of a life that is spent in careful preparation. Accumulating the right credentials, waiting for the right moment, building toward something that never quite arrives because the waiting becomes the habit.",
            reflection3: "I don't want that life. I want to be someone who bites. Who takes on problems that are too large and treats the present moment as the only one that's actually available.",
            reflection4: "Becoming a better, kinder, and more honest person is not a background goal for me. It's the whole point. The products are how I practice.",
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
            headingDesktop: '多くのAIプロダクトは、すでにAIの使い方を知っている人向けに作られています。私は、そうでない人のために創ります。',
            headingMobile: '私は、AIの使い方を知らない人のためにプロダクトを創ります。',
            headingHighlight: 'そうでない人',
            label: '(アプローチ)',
            mainText: '技術はすでにそこにあります。',
            paragraph1: 'より賢いツールから最大の恩恵を受けるはずなのに、それを自ら探そうとはしない人。私がデザインするのは、そんな人たちのためのプロダクトです。今欠けているのは、まるで最初から自分のために用意されていたかのように感じさせるインターフェースなのです。',
            paragraph2: 'ユーザーとプロダクトの間にあるそのギャップは、技術的な問題であることはほとんどありません。それは根本的にデザインの問題であり、この10年で最も重要な課題です。自然な使い心地にこだわることで、複雑なシステムを日常のツールへと変えていきます。',
            paragraphMobile: 'より賢いツールを最も必要としているのに、探そうとしない人のために創ります。そのギャップは技術ではなくデザインの問題であり、今最も重要な課題です。',
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
                    name: 'Core7',
                    title: 'エンタープライズAI＆プロダクトスタジオ',
                    description: 'Core7, Inc.のコーポレートサイト。企業向けの社内AIツールや業務システムを開発する一方、自社プロダクトも展開。「敬語ボタン」は累計5,000ダウンロードを突破。',
                },
                {
                    name: 'Studio On',
                    title: '東京発フォトエージェンシー',
                    description: '訪日旅行者の旅をシネマティックに残すフォトエージェンシー。TikTok・Instagramで累計30万回以上再生、月商50万円超まで成長。',
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
            textDesktop: '東京を拠点に活動するデザインエンジニア、Itsuki Sonです。レイアウト、プロポーション、そして余白による誘導を大切にしています。初めてのユーザーでも、デザインの行き届いた部屋を歩くように、焦らず、まるで以前にも来たことがあるかのようにプロダクトを使えるように。抑圧された人々に政治的な声を与えるbitchatや、何十年ものマイクロファイナンス政策が成し得なかったことを実現するツールなど、テクノロジーが人々の実際の境遇を変えるような仕事に強く惹かれます。',
            textMobile: '東京拠点のデザインエンジニア。レイアウトと余白による誘導で、初めてのユーザーでも迷わない体験を創ります。テクノロジーが人々の実際の境遇を変えるような仕事に惹かれます。',
            tagline: 'その交差点にあるスタートアップをお考えなら、ぜひお話ししましょう。',
            cta: 'お気軽に',
            ctaLink: 'ご連絡ください',
        },
        quote: {
            sartre: "「自分は歯のない人生を送ってきた」と彼は思った。「歯の抜け落ちた人生だ。一度も何かに噛みついたことがない。ただ待っていたのだ。後になってから本気を出すつもりで自分を温存していた。そして今、すっかり歯がなくなっていることに気がついた」",
            author: "— ジャン＝ポール・サルトル",
            reflection1: "正直、認めたくないほどよくこの一節のことを考えます。",
            reflection2: "念入りな準備だけで終わってしまう人生があります。正しい肩書きを集め、ふさわしい時期を待って、待つこと自体が習慣になってしまうせいで、決して辿り着かない何かを築き上げようとする人生です。",
            reflection3: "私はそんな風には生きたくありません。「噛みつく人間」でありたいのです。自分には大きすぎる問題に立ち向かい、今この瞬間だけが本当に手に入る唯一の時間だと信じて動く人間でありたい。",
            reflection4: "より良く、優しく、そして誠実な人間になることは、私にとってただの目標ではありません。それこそが全てなのです。そしてプロダクトメイキングは、私にとってそのための実践です。",
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

import React from 'react';

export const HERO_TEXT = {
  title: "Happy Chinese New Year",
  subtitle: "aka. Spring Festival / Chunjie",
  intro: "Welcome the year of the Fire Horse (Bing-Wu)"
};

// Data for the 10 random horses with images and wishes
const WISHES = [
  { cn: "心似草原，自在如马。", en: "May your heart be wide open, as free as a horse." },
  { cn: "笔下生风，马到功成。", en: "Write like the wind - success is just ahead." },
  { cn: "愿遇良人，并马同行。", en: "May you find true love and ride side by side." },
  { cn: "阖家安乐，马跃福门。", en: "Joy fills your home as the horse leaps through." },
  { cn: "身如骏马，无病无忧。", en: "May you be as strong as a horse - healthy and carefree." },
  { cn: "金马报喜，财源滚滚。", en: "A golden horse brings fortune and abundance." },
  { cn: "马到成功，旗开得胜。", en: "Win at the start, succeed at once." }
];

export const HORSE_RESULTS = Array.from({ length: 10 }, (_, i) => {
  const wish = WISHES[i % WISHES.length];
  return {
    id: i + 1,
    name: `Lucky Horse #${i + 1}`,
    imageUrl: `https://github.com/iqnuxul/CNY-Lucky-Horse-Fun-Facts/blob/8da00c7345fe9a0b8c2dab71f7e02a7e72e037b1/h${i + 1}.png?raw=true`,
    desc: `${wish.cn}\n${wish.en}`
  };
});

export const RITUALS = [
  {
    title: "The Reunion Dinner",
    desc: "The most important meal (Tuan Yuan Fan). Families travel from all over to eat Fish (surplus), Dumplings (wealth), and Niangao (rising higher).",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Hongbao (Red Envelopes)",
    desc: "Elders give envelopes with 'lucky money' to the younger generation, passing on protection and blessings for the year ahead.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Spring Couplets",
    desc: "Vibrant red strips (Chunlian) framing doorways. A unique blend of calligraphy and poetry praying for health, prosperity, and peace.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export const CALENDAR_FACTS = [
  {
    title: "Lunisolar, Not Just Lunar",
    content: "The Chinese Calendar tracks moon phases but incorporates the '24 Solar Terms' to align with the sun's position for agriculture. A purely Lunar calendar (like the Hijri) drifts across seasons."
  },
  {
    title: "Imperial Authority",
    content: "In ancient China, calculating the calendar was the Emperor's prerogative. Today, the Purple Mountain Observatory (Chinese Academy of Sciences) is the official authority."
  },
  {
    title: "The Ganzhi System",
    content: "It pairs 10 Heavenly Stems with 12 Earthly Branches for a 60-year cycle. 2026 is Bing-Wu (Fire Horse). 2027 is Ding-Wei (Fire Goat)."
  }
];

export const COMPARISON_DETAILS = [
  {
    id: 'science',
    title: "The Science: Lunisolar vs. Lunar",
    headerBg: "bg-cny-red",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    ),
    content: [
      {
        subtitle: "Lunisolar (Chinese) vs. Pure Lunar",
        text: "The Chinese Calendar (Nongli) is Lunisolar. It uses the Moon for months but anchors to the Sun via '24 Solar Terms' and leap months to align with agriculture and seasons. A pure Lunar calendar (like the Islamic/Hijri) has ~354 days and drifts 11 days every year."
      },
      {
        subtitle: "The 2026 Proof",
        text: "Chinese New Year 2026 is February 17th. If we used a pure Lunar Calendar (no solar correction), the New Year would drift to June 27th, 2026. The fact that it stays in Spring proves it is not 'Lunar New Year'."
      }
    ]
  },
  {
    id: 'observatory',
    title: "Scientific Authority: Purple Mountain",
    headerBg: "bg-indigo-900",
    icon: (
       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
    content: [
      {
        subtitle: "Calculated in Nanjing",
        text: "The official calendar is scientifically calculated by the Purple Mountain Observatory in Nanjing, based on China's geography (120° East). The exact moment of the new moon is determined by China Standard Time."
      },
      {
        subtitle: "One Moon, Different Days",
        text: "Because time zones differ, the new moon can fall on different dates in other countries. If another country celebrates on the same date calculated by China, they are following the Chinese Calendar."
      }
    ]
  },
  {
    id: 'history',
    title: "The History: Colonial Legacy",
    headerBg: "bg-cny-gold",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
    content: [
      {
        subtitle: "The 1968 Shift",
        text: "In Hong Kong, the Holidays (Amendment) Ordinance No 19 of 1967 officially used 'Chinese New Year'. Just one year later, British colonial authorities changed it to 'Lunar New Year' in the 1968 Ordinance (Bill No. 11), published on April 11, 1968 within the Legal Supplement No. 3 to the Hong Kong Government Gazette."
      },
      {
        subtitle: "Bureaucratic Erasure",
        text: "This shift was not accidental. Following political unrest, colonial authorities systematically downplayed Chinese cultural and political identity. Replacing the specific cultural name with a generic term served to weaken the festival's connection to its Chinese origins."
      },
      {
        subtitle: "Decolonization",
        text: "Reinstating 'Chinese New Year' today aligns with broader global efforts toward decolonization and the recognition of historically marginalised identities. It restores the festival's proper name and honors its specific cultural source."
      }
    ],
    image: "https://github.com/iqnuxul/CNY-Lucky-Horse-Fun-Facts/blob/4ad4b53228c210f5b2dbab69a097212913e36e41/IMG_0382.jpg?raw=true",
    imageCaption: "Proof: The 1968 Ordinance change document."
  },
  {
    id: 'culture',
    title: "Respect & Accuracy",
    headerBg: "bg-gray-800",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
    content: [
      {
        subtitle: "INCLUSIVITY MEANS RECOGNITION",
        text: "'Chinese New Year' honors the Lunisolar system developed in China. Using 'Lunar' flattens this complex system into a generic 'moon holiday', erasing centuries of scientific history."
      },
      {
        subtitle: "AVOIDING APPROPRIATION",
        text: "Renaming the festival 'Lunar New Year' for convenience often inadvertently appropriates the culture by stripping away its name and history. True inclusivity respects the source."
      }
    ]
  }
];

export const GREETINGS = [
  { phrase: "Happy New Year", pinyin: "Xīn Nián Kuài Lè", chinese: "新年快乐" },
  { phrase: "Wishing you wealth", pinyin: "Gōng Xǐ Fā Cái", chinese: "恭喜发财" },
  { phrase: "Good health", pinyin: "Shēn Tǐ Jiàn Kāng", chinese: "身体健康" },
  { phrase: "May all your wishes come true", pinyin: "Wàn Shì Rú Yì", chinese: "万事如意" },
];

export const GANZHI_STEMS = [
  { name: 'Jiǎ', element: 'Wood', char: '甲' },
  { name: 'Yǐ', element: 'Wood', char: '乙' },
  { name: 'Bǐng', element: 'Fire', char: '丙' },
  { name: 'Dīng', element: 'Fire', char: '丁' },
  { name: 'Wù', element: 'Earth', char: '戊' },
  { name: 'Jǐ', element: 'Earth', char: '己' },
  { name: 'Gēng', element: 'Metal', char: '庚' },
  { name: 'Xīn', element: 'Metal', char: '辛' },
  { name: 'Rén', element: 'Water', char: '壬' },
  { name: 'Guǐ', element: 'Water', char: '癸' },
];

export const GANZHI_BRANCHES = [
  { name: 'Rat', char: '子', pinyin: 'Zǐ', year: 2020 },
  { name: 'Ox', char: '丑', pinyin: 'Chǒu', year: 2021 },
  { name: 'Tiger', char: '寅', pinyin: 'Yín', year: 2022 },
  { name: 'Rabbit', char: '卯', pinyin: 'Mǎo', year: 2023 },
  { name: 'Dragon', char: '辰', pinyin: 'Chén', year: 2024 },
  { name: 'Snake', char: '巳', pinyin: 'Sì', year: 2025 },
  { name: 'Horse', char: '午', pinyin: 'Wǔ', year: 2026 },
  { name: 'Goat', char: '未', pinyin: 'Wèi', year: 2027 },
  { name: 'Monkey', char: '申', pinyin: 'Shēn', year: 2028 },
  { name: 'Rooster', char: '酉', pinyin: 'Yǒu', year: 2029 },
  { name: 'Dog', char: '戌', pinyin: 'Xū', year: 2030 },
  { name: 'Pig', char: '亥', pinyin: 'Hài', year: 2031 },
];
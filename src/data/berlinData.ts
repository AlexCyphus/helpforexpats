type TLanguage = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar' | 'hi' | 'tr';

export const languages: ILanguageData[] = [
  { languageId: 'en', languageName: 'English', languageEmoji: '🇬🇧' },
  { languageId: 'de', languageName: 'German', languageEmoji: '🇩🇪' },
  { languageId: 'es', languageName: 'Spanish', languageEmoji: '🇪🇸' },
  { languageId: 'fr', languageName: 'French', languageEmoji: '🇫🇷' },
  { languageId: 'it', languageName: 'Italian', languageEmoji: '🇮🇹' },
  { languageId: 'pt', languageName: 'Portuguese', languageEmoji: '🇵🇹' },
  { languageId: 'ru', languageName: 'Russian', languageEmoji: '🇷🇺' },
  { languageId: 'zh', languageName: 'Chinese', languageEmoji: '🇨🇳' },
  { languageId: 'ja', languageName: 'Japanese', languageEmoji: '🇯🇵' },
  { languageId: 'ko', languageName: 'Korean', languageEmoji: '🇰🇷' },
  { languageId: 'ar', languageName: 'Arabic', languageEmoji: '🇸🇦' },
  { languageId: 'hi', languageName: 'Hindi', languageEmoji: '🇮🇳' },
  { languageId: 'tr', languageName: 'Turkish', languageEmoji: '🇹🇷' },
];

interface ILanguageData {
  languageId: TLanguage;
  languageName: string;
  languageEmoji: string;
}

export interface IServiceData {
  name: string;
  description: string;
  languages: TLanguage[];
  website: string;
  email: string;
  phone: string;
}

export const berlinData: IServiceData[] = [
  {
    name: "Berlin City Tours",
    description: "Guided tours of Berlin's most famous landmarks and historical sites.",
    languages: ['en', 'de', 'es', 'fr'],
    website: "www.berlincitytours.com",
    email: "info@berlincitytours.com",
    phone: "+49 30 1234 5678"
  },
  {
    name: "Spree River Cruise",
    description: "Scenic boat tours along the Spree River, showcasing Berlin's architecture.",
    languages: ['en', 'de', 'zh'],
    website: "www.spreerivercruise.de",
    email: "booking@spreerivercruise.de",
    phone: "+49 30 2345 6789"
  },
  {
    name: "Museum Island Pass",
    description: "Access to all museums on Museum Island, including audio guides.",
    languages: ['en', 'de', 'fr', 'it', 'ru'],
    website: "www.museumislandpass.berlin",
    email: "support@museumislandpass.berlin",
    phone: "+49 30 3456 7890"
  },
  {
    name: "Berlin Wall Bike Tour",
    description: "Bicycle tour along the former Berlin Wall, with stops at key historical points.",
    languages: ['en', 'de', 'es'],
    website: "www.berlinwallbiketour.com",
    email: "rides@berlinwallbiketour.com",
    phone: "+49 30 4567 8901"
  },
  {
    name: "Currywurst Cooking Class",
    description: "Learn to make Berlin's famous currywurst in a hands-on cooking class.",
    languages: ['en', 'de'],
    website: "www.currywurstclass.berlin",
    email: "cook@currywurstclass.berlin",
    phone: "+49 30 5678 9012"
  }
];

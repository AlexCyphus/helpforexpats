import { IServiceData, languages } from '../data/berlinData';
import { Badge } from './ui/badge';

interface ServiceCardProps {
  service: IServiceData
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="
    bg-gray-50
    border rounded-lg p-4 bg-white flex flex-col gap-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Placeholder for icon */}
          <span className="text-xl font-bold">{service.name[0]}</span>
        </div>
        <h3 className="font-bold text-lg">{service.name}</h3>
      </div>
      <p className="text-sm text-gray-600">{service.description}</p>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 flex-wrap">
          {service.languages.map(lang => {
            const language = languages.find(l => l.languageId === lang);

            return (
              <Badge variant={"outline"} key={lang} className='min-w-fit'>{language?.languageEmoji} {lang.toUpperCase()}</Badge>
            )
          })}
        </div>
        <a href={service.website} className="text-blue-600 hover:underline">{service.website}</a>
        <a href={`mailto:${service.email}`} className="text-blue-600 hover:underline">{service.email}</a>
        <a href={`tel:${service.phone}`} className="text-blue-600 hover:underline">{service.phone}</a>
      </div>
    </div>
  );
}

export interface IService {
  id: string;
  name: string;
}

export const services: IService[] = [
  { id: 'cleaner', name: '🧹 Cleaner' },
  { id: 'plumber', name: '🔧 Plumber' },
  { id: 'painter', name: '🎨 Painter' },
  { id: 'moving-company', name: '🚚 Moving Company' },
  { id: 'electrician', name: '💡 Electrician' },
  { id: 'language-tutor', name: '📚 Language Tutor' },
  { id: 'tax-advisor', name: '💼 Tax Advisor' },
  { id: 'real-estate-agent', name: '🏠 Real Estate Agent' },
]

export function ServiceSelector() {
  return (
    <select className="flex-grow p-2 border rounded appearance-none bg-white">
      <option value="">Select a service...</option>
      {services.map((service) => (
        <option key={service.id} value={service.id}>{service.name}</option>
      ))}
    </select>
  );
}

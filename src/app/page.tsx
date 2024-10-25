import globeImage from "@/app/images/rotating-globe.gif";
import { LanguageSelector } from '@/components/LanguageSelector';
import Layout from '@/components/Layout';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceSelector } from '@/components/ServiceSelector';
import { Badge } from "@/components/ui/badge";
import { Globe2 } from 'lucide-react';
import Image from 'next/image';
import { berlinData } from '../data/berlinData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Layout className="py-1 shadow-lg">
        <header className="flex gap-2 items-center">
          <Globe2 className='w-5 h-5 sm:w-6 sm:h-6' />
          <h1 className="text-sm sm:text-md font-bold">helpforexpats</h1>
        </header>
      </Layout>

      <Layout bgColorClass='bg-purple-50' className='min-h-[60vh'>
        <main className='px-4 sm:px-0'>
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between sm:h-[50vh] py-8 sm:py-0">
            <div className="flex flex-col gap-4 mt-6 items-center sm:items-start">
              <Badge variant={"white"} className='font-normal rounded-sm'>🆕 Currently only live in Berlin</Badge>
              <h2 className="
                text-2xl
                font-bold
                text-center
                sm:text-3xl
                sm:text-left
              ">
                Find verified<br />
                services in your<br />
                language<br />
                anywhere in the<br />
                world
              </h2>
            </div>
            <Image
              src={globeImage}
              alt="Rotating Globe"
              width={300}
              height={300}
              className="w-36 h-36 sm:w-[300px] sm:h-[300px] mb-6 sm:mb-0"
            />
          </div>
        </main>
      </Layout>
      <Layout>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <ServiceSelector />
            <LanguageSelector />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {berlinData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </Layout>
    </div >
  );
}

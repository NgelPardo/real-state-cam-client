import Image from 'next/image';
import FeatureItem from './FeatureItem';
import Link from 'next/link';

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white md:px-30">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda */}
        <div className="border rounded-xl shadow-sm max-w-md bg-[#F7F7FD]">
          <h2 className="text-2xl font-bold text-blue-950 mb-3 pt-7 px-10">
            La nueva forma de encontrar tu hogar
          </h2>
          <p className="text-gray-600 mb-4 px-10">
            Encuentra el lugar ideal para vivir entre más de 10.000 propiedades listadas.
          </p>
          <Link href="/properties">
            <button className="bg-blue-950 text-white px-10 py-2 rounded-lg hover:bg-blue-800 transition ml-10">
              Ver propiedades
            </button>
          </Link>

          <div className="mt-6 relative overflow-hidden rounded-xl">
            <Image
              src="/imgs/illustration.png"
              alt="ilustración casa"
              width={1000}
              height={1000}
              className="w-full object-contain transform translate-x-5 translate-y-5"
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FeatureItem
            icon="🛡️"
            title="Seguro de propiedad"
            text="Protección y cobertura para una mejor vida con nuestro seguro de responsabilidad."
          />
          <FeatureItem
            icon="💲"
            title="Mejor precio"
            text="¿No sabes cuánto cobrar por tu propiedad? Nosotros hacemos los cálculos por ti."
          />
          <FeatureItem
            icon="📉"
            title="Comisión más baja"
            text="Negocia menos y evita regateos: nuestra comisión es solo del 2%."
          />
          <FeatureItem
            icon="🔒"
            title="Control total"
            text="Haz un recorrido virtual y agenda visitas antes de rentar o comprar."
          />
        </div>
      </div>
    </section>
  )
}

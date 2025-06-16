import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-25 sm:pt-40">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>

      <div className="flex flex-col">

        <label htmlFor="email">Usuario</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />


        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />

        <button
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Ingresar
        </button>

      </div>
    </div>
  );
}
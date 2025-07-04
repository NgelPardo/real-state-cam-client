import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-25 sm:pt-40">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>

      <LoginForm/>
    </div>
  );
}
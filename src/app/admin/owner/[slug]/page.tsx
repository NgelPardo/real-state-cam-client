import { getOwnerById } from "@/services";
import OwnerForm from './ui/OwnerForm';

interface Props {
  params: {
    slug: string;
  }
}


export default async function OwnerPage({ params }: Props) {

    const { slug } = params;
    
    let owner = null;
    if (slug !== 'new') {
        owner = await getOwnerById(slug);
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">
            <OwnerForm owner={owner} />
        </div>
    </div>
  )
}

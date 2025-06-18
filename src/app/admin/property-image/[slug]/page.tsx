import { getPropertyImageByIdProperty } from "@/services";

interface Props {
  params: {
    slug: string;
  }
}

export default async function PropertyImagePage({ params }: Props) {

    const { slug } = params;
    
    let propertyImage = null;
    if (slug !== 'new') {
        propertyImage = await getPropertyImageByIdProperty(slug);
    }

  return (
    <div>page</div>
  )
}

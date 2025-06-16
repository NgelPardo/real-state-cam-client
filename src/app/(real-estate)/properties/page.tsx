import SearchBar from "@/components/properties/SearchBar";
import SearchTabs from "@/components/hero/SearchTabs";
import { initialData } from "@/seed";
import { PropertyGrid } from "@/components";

const properties = initialData.properties;

export default function() {
  return (
    <div className="relative min-h-screen overflow-hidden p-8">
      <SearchTabs />
      <SearchBar />
      <PropertyGrid properties={properties} />
    </div>
  );
}
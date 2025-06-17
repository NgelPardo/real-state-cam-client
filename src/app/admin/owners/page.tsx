'use client';

import { Owner } from "@/interfaces";
import { useEffect, useState } from "react";

export default function page() {
  const [owners, setOwners] = useState<Owner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOwners = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/owners`);
        const data = await response.json();
        setOwners(data.value);
      } catch (error) {
        console.error('Error loading owners', error);
      } finally {
        setLoading(false);
      }
    };

    loadOwners();
  }, []);

  return (
    <div>
      <h1>Propietarios</h1>
      <ul>
        {owners.map((o) => (
          <li key={o.id}>{o.name}</li>
        ))}
      </ul>
    </div>
  )
}


export default function ClientLayout({ children }: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-600">
      { children }
    </main>
  );
}
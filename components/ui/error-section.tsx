interface ErrorSectionProps {
  title: string;
  error: Error;
}

export function ErrorSection({ title, error }: ErrorSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">{title}</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-red-600 mb-4">Failed to load content</p>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    </section>
  );
}
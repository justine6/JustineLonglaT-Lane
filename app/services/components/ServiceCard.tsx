type Props = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: Props) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
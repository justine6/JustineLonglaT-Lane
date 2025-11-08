import fs from "fs";
import path from "path";;
type Warning = {
  message: string;
  timestamp: number;
};

export default function WarningsPage() {
  const logFile = path.join(process.cwd(), ".project-warnings.json");
  let warnings: Record<string, Warning> = {};

  if (fs.existsSync(logFile)) {
    try {
      const raw = fs.readFileSync(logFile, "utf-8");
      warnings = JSON.parse(raw);
    } catch {
      warnings = {};
    }
  }

  const entries = Object.entries(warnings);

  return (
    <main className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-[#0047a1] mb-6">
        Project Metadata Warnings
      </h1>

      {entries.length === 0 ? (
        <p className="text-green-600 font-medium">
          ✅ All projects are fully documented. No warnings in the last 7 days.
        </p>
      ) : (
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Project</th>
              <th className="px-4 py-2 text-left">Field</th>
              <th className="px-4 py-2 text-left">Message</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([key, value]) => {
              const [slug, field] = key.split("-");
              const date = new Date(value.timestamp).toLocaleString();
              return (
                <tr key={key} className="border-t">
                  <td className="px-4 py-2 font-medium">{slug}</td>
                  <td className="px-4 py-2">{field}</td>
                  <td className="px-4 py-2">{value.message}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </main>
  );
}


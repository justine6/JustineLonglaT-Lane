import { notFound } from "next/navigation";

type Params = { slug: string };

export default async function VideoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  // ...rest of your page
  return <div>{slug}</div>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  return {
    title: slug ? `Video — ${slug}` : "Video",
  };
}
// End of file: app/videos/%5Bslug%5D/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTimelineFiles, getTimelineMetadata } from "@/lib/timeline";

interface PageProps { params: Promise<{ slug: string }>; }

interface Metadata {
  year?: number;
  title?: string;
  featuredImage?: string;
  theme?: string;
}

// Generate static params for all timeline pages
export async function generateStaticParams() {
  const slugs = await getTimelineFiles();
  return slugs.map((slug) => ({ slug }));
}

// Only allow existing static params
export const dynamicParams = false;

export default async function TimelinePage({ params }: PageProps) {
  const { slug } =  await params;
  const result = await getTimelineMetadata(slug);
  const Post = result?.component;
  const metadata: Metadata | null = result?.metadata || null;

  if (!Post || !metadata) return notFound();

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-16">
      {/* Back button */}
      <div className="mb-6 mt-14">
        <Link
          href="/timeline"
          className="inline-block text-white hover:text-green-400 font-medium outline-1 focus:outline-white border-2 bg-red-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
        >
          &larr; Back to Timeline
        </Link>
      </div>

      {/* Title */}
      {metadata.year && metadata.theme && (
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {metadata.year} – {metadata.theme}
        </h1>
      )}

      {/* Featured Image */}
      {metadata.featuredImage && (
        <div className="mb-6 w-full max-w-4xl h-60 md:h-80 lg:h-96 relative mx-auto rounded-lg overflow-hidden">
          <Image
            src={metadata.featuredImage}
            alt={metadata.title || `${metadata.year} Timeline`}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* MDX Content */}
      <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
        <Post />
      </div>
    </div>
  );
}

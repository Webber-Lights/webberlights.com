// app/(pages)/timeline/[slug]/page.tsx
import { allTimelineYears } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TimelineMDX from "./TimelineYearContent";

const mdxComponents = { Link };

interface PageProps {
  params: { slug: string };
}

export default async function TimelinePage(props: PageProps) {
  const { slug } = await props.params;

  // Fetch the document by slug

  const doc = allTimelineYears.find((doc) => doc.slug === slug);

  if (!doc) return notFound();

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-16">
           {/* Back button */}
      <div className="mb-6 mt-14">
        <Link
          href="/timeline"
          className="inline-block text-white hover:text-green-400 font-medium outline-1 focus:outline-White border-2 bg-red-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
        >
          &larr; Back to Timeline
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {doc.year} – {doc.theme}
      </h1>

      {/* Featured Image */}
      {doc.featuredImage && (
        <div className="mb-6 w-full max-w-4xl h-60 md:h-80 lg:h-96 relative mx-auto rounded-lg overflow-hidden">
          <Image
            src={doc.featuredImage}
            alt={doc.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* MDX Content */}
      <div className="prose max-w-3xl mx-auto">
        <TimelineMDX code={doc.body.code} />
      </div>
    </div>
  );
}

// components/TimelineMDX.tsx
"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import { YouTubeEmbed as RawYouTubeEmbed } from '@next/third-parties/google'


interface TimelineMDXProps {
  code: string;
}

const mdxComponents = {
  Link,
  YouTubeEmbed: ({ videoid, height = 300, className, style, ...props }: any) => {
    return (
      <div className={`relative w-[400px] mt-4 ${className ?? ""}`} style={{ paddingBottom: height ? undefined : "56.25%" }}>
        <RawYouTubeEmbed
          videoid={videoid}
        />
      </div>
    );
  },
  h1: (props: any) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold my-2" {...props} />,
  p: (props: any) => <p className="my-2 text-white" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-6 my-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-6 my-2" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-2" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
};

export default function TimelineMDX({ code }: TimelineMDXProps) {
  if (!code) return null;
  const MDXContent = useMDXComponent(code);
  return <div className="prose prose-lg max-w-full"><MDXContent components={mdxComponents} /></div>;
}

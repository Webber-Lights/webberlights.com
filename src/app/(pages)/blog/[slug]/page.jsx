"use client";

import { allArticles } from "contentlayer/generated";
import { SingleArticle } from "./SingleArticle";
import Youtube from "@/components/blog/Youtube";
import { useMDXComponent } from "next-contentlayer/hooks";
import SubBanner from "@/components/ui/SubBanner";
const MDXcomponents = { Youtube };

export default function Page({ params }) {
  const { slug } = params;
  const article = allArticles.find((article) => article.slug === slug);
  const MDXContent = useMDXComponent(article.body.code);
  console.log(article.image);
  return (
    <>
      <SubBanner title={article.title} image={article.image} />
      <SingleArticle
        image={article.image}
        title={article.title}
        category={article.category}
        author={article.author}
      >
        <div className='mx-4'>
          <MDXContent components={MDXcomponents} />
        </div>
      </SingleArticle>
    </>
  );
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

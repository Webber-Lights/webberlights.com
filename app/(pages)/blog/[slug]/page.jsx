
"use client";

import { allArticles } from 'contentlayer/generated';
import { SingleArticle } from 'components/blog/SingleArticle';
import Youtube from 'components/blog/Youtube';
import { useMDXComponent } from 'next-contentlayer/hooks';
const MDXcomponents = { Youtube };

export default function Page({params}) {
    const {slug} = params;
  const article = allArticles.find((article) => article.slug === slug);
  const MDXContent = useMDXComponent(article.body.code);
  return (
    <>
      <SingleArticle
        image={article.image}
        title={article.title}
        category={article.category}
        author={article.author}
      >
      <MDXContent components={MDXcomponents} />
      </SingleArticle>
    </>
  );
};

export async function generateStaticParams() {  
    return allArticles.map((article) => ({
        slug: article.slug
      }))
};
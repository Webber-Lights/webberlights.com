import React from 'react'
import { allArticles } from 'contentlayer/generated';
import { select } from 'utils/select';
import ArticleCard from 'components/blog/ArticleCard';
import SubBanner from 'components/ui/SubBanner';

export default async function Page() {
    const getArticles = allArticles.map((article) =>
      select(article, [
        'slug',
        'title',
        'description',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'image',
      ])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

    const [articles] = await Promise.all([getArticles]);

  return (
    <div>
        <SubBanner title="Blog" subtitle="Blog Posts about Webber Lights" />
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {articles.map(
           ({
             title,
             description,
             slug,
             image,
             category,
             publishedAt,
             readingTime,
           }) => (
             <ArticleCard
               key={slug}
               title={title}
               description={description}
               slug={slug}
               image={image}
               category={category}
               dateTime={publishedAt}
               readingTime={readingTime.text}
             />
           )
         )}

     </div>
     </div>
  )
}
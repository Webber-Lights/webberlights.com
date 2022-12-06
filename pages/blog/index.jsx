import Head from 'next/head'
// import ArticleCard from 'components/ArticleCard'
import { allArticles } from 'contentlayer/generated';
import { select } from 'utils/select';
import ComingSoon from 'components/ComingSoon';

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Webber Lights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon />
     {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
                date={publishedAt}
                readingTime={readingTime.text}
              />
            )
          )}

      </div> */}
    </div>
  )
}

export async function getStaticProps() {
  const articles = allArticles
    .map((article) =>
      select(article, [
        'slug',
        'title',
        'description',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'image',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
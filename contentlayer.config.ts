import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time';

const Author = defineNestedType(() => ({
    name: 'Author',
    fields: {
        name: { type: 'string', required: true },
        image: { type: 'string', required: true },
    },
}));
const Article = defineDocumentType(() => ({
    name: 'Article',
    filePathPattern: 'data/blog/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        description: { type: 'string', required: true },
        seoDescription: { type: 'string', required: true },
        category: { type: 'string', required: true },
        author: {
            type: 'nested',
            of: Author,
        },
        image: { type: 'string', required: true },
    },
    computedFields: {
        readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
        wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
        slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    }
}}));

const TimelineYear = defineDocumentType(() => ({
  name: 'TimelineYear',
  filePathPattern: 'data/timeline/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },      
    year: { type: 'number', required: true },         
    theme: { type: 'string', required: true },       
    featuredImage: { type: 'string', required: false },
    totalLights: { type: 'number', required: false },
    totalSongs: { type: 'number', required: false },   
    notes: { type: 'string', required: false },
  },
  computedFields: {
    slug: { 
      type: 'string', 
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));
export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Article, TimelineYear],
});

import { DefaultSeo } from 'next-seo'

const config = {
  title: 'Webber Lights',
  description: 'Synchronized Christmas Light Display in Cumberland, RI  ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webberlights.com',
    site_name: 'Webber Lights',
  },
}

function SEO() {
  return <DefaultSeo {...config} />
}

export default SEO
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://asante-contentful.vercel.app/', // Change this
    generateRobotsTxt: true, // Automatically generate robots.txt
    sitemapSize: 100,
    generateIndexSitemap: false, // Set to true if you want an index sitemap
};

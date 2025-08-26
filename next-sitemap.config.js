/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alexmassin.github.io/mo-therapy',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://alexmassin.github.io/mo-therapy/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority based on page importance
    const customPriority = {
      '/': 1.0,
      '/services': 0.9,
      '/about': 0.8,
      '/contact': 0.8,
      '/services/physiotherapy': 0.9,
      '/services/massage-therapy': 0.9,
      '/services/chiropractic': 0.9,
      '/services/osteopathy': 0.9,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

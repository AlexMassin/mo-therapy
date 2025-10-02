import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogImageWithFallback from '@/components/BlogImageWithFallback';
import { getAllPosts, getAllCategories } from '../../../lib/blog';
import { Calendar, Clock, User, Tag, ArrowRight, BookOpen } from 'lucide-react';
import GradientText from '@/components/GradientText';

export const metadata: Metadata = {
  title: 'Expert Health & Sports Blog - M.O. Therapy Markham | Injury Prevention Tips',
  description: 'Expert insights on sports injuries, physiotherapy, recovery tips, and injury prevention from our licensed professionals. Stay informed about the latest in sports medicine and wellness.',
  keywords: [
    'sports injury blog Markham',
    'physiotherapy tips',
    'injury prevention advice',
    'recovery advice',
    'sports medicine articles',
    'exercise rehabilitation',
    'athletic performance tips',
    'health and wellness Markham',
    'massage therapy benefits',
    'chiropractic care insights',
    'Apple Creek Blvd blog',
    'Markham healthcare blog'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Health & Sports Medicine Blog - M.O. Therapy Markham',
    description: 'Expert insights on sports injuries, recovery, and performance optimization from our licensed healthcare professionals in Markham.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/blog',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Health & Sports Medicine Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Sports Medicine Blog - M.O. Therapy',
    description: 'Expert insights on sports injuries, recovery, and performance optimization.',
    images: ['/og-blog.jpg'],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                Expert Insights
              </div>
              <h1 className="heading-xl text-white mb-6">
                Health & <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Sports Medicine Blog</GradientText>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Get expert insights on sports injuries, recovery techniques, injury prevention, and performance 
                optimization from our licensed healthcare professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            {posts.length === 0 ? (
              // Empty State
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Blog Coming Soon!
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We&apos;re working on creating valuable content about sports medicine, injury prevention, 
                    and recovery techniques. Check back soon for expert insights from our team.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">What to expect:</h3>
                    <ul className="text-left space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-primary-600" />
                        Sports injury prevention tips
                      </li>
                      <li className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-primary-600" />
                        Recovery and rehabilitation guides
                      </li>
                      <li className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-primary-600" />
                        Exercise and movement advice
                      </li>
                      <li className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-primary-600" />
                        Latest research insights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              // Blog Posts Grid
              <>
                {/* Categories Filter */}
                {categories.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    <Link
                      href="/blog"
                      className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      All Posts
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article key={post.slug} className="card hover:scale-105 transition-all duration-300 group flex flex-col h-full">
                      <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                        <BlogImageWithFallback
                          src={post.image}
                          alt={post.title}
                          fill
                          className="group-hover:scale-110 transition-transform duration-300"
                          category={post.category}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      {/* Main Content - Grows to fill space */}
                      <div className="flex flex-col flex-grow space-y-4">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('en-CA', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>

                        {/* Category */}
                        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium w-fit">
                          {post.category}
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt - Scrollable area */}
                        <div className="flex-grow overflow-hidden">
                          <p className="text-gray-600 leading-relaxed h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer - Always at bottom */}
                      <div className="mt-auto pt-4 space-y-3">
                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Author & Read More */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors group/link whitespace-nowrap flex-shrink-0"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-gray-900 mb-6">
                Have Questions About <span className="text-primary-600 font-bold">Your Health?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team is here to help. Don&apos;t let questions about your health go unanswered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                >
                  <User className="h-5 w-5" />
                  Ask Our Experts
                </Link>
                <Link
                  href="/conditions"
                  className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                >
                  <BookOpen className="h-5 w-5" />
                  View Conditions We Treat
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

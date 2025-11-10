import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import { getAllPosts, getAllCategories, getAllTags } from '../../../lib/blog';
import { BookOpen, User } from 'lucide-react';
import { getImagePath } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Health & Sports Medicine Blog - M.O. Therapy | Expert Insights',
  description: 'Expert insights on sports injuries, physiotherapy, recovery techniques, and performance optimization from licensed healthcare professionals at M.O. Therapy in Markham.',
  keywords: [
    'sports medicine blog',
    'physiotherapy tips',
    'injury prevention',
    'recovery techniques',
    'athletic performance',
    'sports injury advice',
    'rehabilitation guides',
    'Markham physiotherapy blog',
    'exercise therapy tips',
    'pain management advice'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Health & Sports Medicine Blog - M.O. Therapy',
    description: 'Expert insights on sports injuries, recovery, and performance optimization from our licensed healthcare team.',
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
    description: 'Expert insights on sports injuries, recovery, and performance from our healthcare team.',
    images: ['/og-blog.jpg'],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

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
                Health & <span className="text-primary-400 font-bold">Sports Medicine Blog</span>
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
                        <BookOpen className="h-4 w-4 text-primary-600" />
                        Sports injury prevention tips
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary-600" />
                        Recovery and rehabilitation guides
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary-600" />
                        Exercise and movement advice
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary-600" />
                        Latest research insights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <BlogList posts={posts} categories={categories} tags={tags} />
            )}
          </div>
        </section>

        {/* CTA Section with Team Images */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Team Images Collage */}
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={getImagePath("/team/DSC00489.JPG")}
                      alt="M.O. Therapy healthcare professionals"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                    <img 
                      src={getImagePath("/team/DSC00498.JPG")}
                      alt="M.O. Therapy team members"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="heading-lg text-gray-900 mb-6">
                  Have Questions About <span className="text-primary-600 font-bold">Your Health?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our expert team is here to help. Don&apos;t let questions about your health go unanswered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                  <Link
                    href="/contact"
                    className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                  >
                    <User className="h-5 w-5" />
                    Ask Our Experts
                  </Link>
                  <Link
                    href="/conditions"
                    className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
                  >
                    <BookOpen className="h-5 w-5" />
                    View Conditions We Treat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

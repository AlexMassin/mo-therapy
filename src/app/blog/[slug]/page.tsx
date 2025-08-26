import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import ShareButtons from '@/components/ShareButtons';
import BlogImageWithFallback from '@/components/BlogImageWithFallback';
import { getPostBySlug, getAllPosts } from '../../../../lib/blog';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - M.O. Therapy Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - M.O. Therapy Blog | Sports Medicine Insights`,
    description: post.excerpt,
    keywords: [...post.tags, 'sports medicine', 'physiotherapy', 'M.O. Therapy', 'Markham'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-4 text-blue-200 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
              </div>

              {/* Category */}
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="heading-xl text-white mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-800 text-blue-100 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <BlogImageWithFallback
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  category={post.category}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 md:pb-24 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <article className="prose prose-lg max-w-none blog-content">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>

                  {/* Share & CTA */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Have Questions About This Topic?
                        </h3>
                        <p className="text-gray-600">
                          Our experts are here to help with personalized advice.
                        </p>
                      </div>
                      <BookingButton
                        className="btn-primary whitespace-nowrap"
                        trackingLabel={`blog_post_${post.slug}`}
                      >
                        Book Consultation
                      </BookingButton>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-32 space-y-8">
                    {/* Share */}
                    <ShareButtons title={post.title} excerpt={post.excerpt} />

                    {/* Quick Contact */}
                    <div className="card bg-blue-50 border-blue-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Need Expert Care?
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Don't wait for your symptoms to worsen. Get professional treatment today.
                      </p>
                      <BookingButton
                        className="btn-primary w-full text-sm"
                        trackingLabel={`blog_sidebar_${post.slug}`}
                      >
                        Book Assessment
                      </BookingButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-gray-900 mb-12 text-center">
                  Related <span className="text-blue-600 font-bold">Articles</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.slug} className="card hover:scale-105 transition-all duration-300">
                      <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                        <BlogImageWithFallback
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          category={relatedPost.category}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                          {relatedPost.category}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { BlogPostMetadata } from '../../lib/blog';
import { Calendar, Clock, User, Tag, ArrowRight, X, ChevronDown, ChevronUp, FileText, Heart, Dumbbell, Brain, Activity, Zap } from 'lucide-react';

interface BlogListProps {
  posts: BlogPostMetadata[];
  categories: string[];
  tags: string[];
}

export default function BlogList({ posts, categories, tags }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showTagsAccordion, setShowTagsAccordion] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const POSTS_PER_PAGE = 15;

  // Filter posts based on selected category and tags
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
      const tagMatch = selectedTags.length === 0 || 
        selectedTags.every(tag => post.tags.includes(tag));
      return categoryMatch && tagMatch;
    });
  }, [posts, selectedCategory, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  // Get icon based on category
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Injury Prevention': <Zap className="h-6 w-6" />,
      'Pain Management': <Heart className="h-6 w-6" />,
      'Sports Performance': <Dumbbell className="h-6 w-6" />,
      'Recovery': <Activity className="h-6 w-6" />,
      'Mental Health': <Brain className="h-6 w-6" />,
      'General': <FileText className="h-6 w-6" />,
    };
    return icons[category] || <FileText className="h-6 w-6" />;
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTags]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <>
      {/* Filters Section */}
      <div className="mb-12">
        {/* Categories Filter */}
        {categories.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tags Filter - Accordion */}
        {tags.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowTagsAccordion(!showTagsAccordion)}
              className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide hover:text-primary-600 transition-colors"
            >
              <span>Filter by Tags ({selectedTags.length} selected)</span>
              {showTagsAccordion ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {showTagsAccordion && (
              <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Active Filters & Clear */}
        {(selectedCategory !== 'All' || selectedTags.length > 0) && (
          <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-700">Active filters:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="hover:bg-primary-200 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm"
              >
                #{tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="hover:bg-sky-200 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="ml-auto text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)}</span> of <span className="font-semibold text-gray-900">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <Tag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            No articles found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={clearFilters}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
            <article key={post.slug} className="card hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-l-4 border-primary-500">
              {/* Main Content - Grows to fill space */}
              <div className="flex flex-col flex-grow space-y-4">
                {/* Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {getCategoryIcon(post.category)}
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <div className="flex-grow">
                  <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-CA', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Footer - Always at bottom */}
              <div className="mt-auto pt-4 space-y-3">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <button
                        key={tag}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTagToggle(tag);
                        }}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-sky-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        #{tag}
                      </button>
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

          {/* Pagination */}
          {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {/* Previous Button */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(page as number)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === page
                          ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}


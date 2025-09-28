import Link from 'next/link';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      title: "How Latin Startups Can Dominate US Google and ChatGPT Rankings",
      excerpt: "A comprehensive guide to building digital authority for Latin entrepreneurs targeting the US market, including proven SEO strategies and cultural considerations.",
      date: "2024-01-15",
      category: "Growth Strategy",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "The Hidden Cost of 'Good Enough' Websites for Growing Businesses",
      excerpt: "Why settling for a basic website is costing you more than you think, and how a growth-engine website can transform your business.",
      date: "2024-01-10",
      category: "Growth Strategy",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "From WhatsApp Chaos to Operational Zen: Our Guide to Automation",
      excerpt: "How we transformed our own operations from manual chaos to streamlined automation, and the lessons we learned along the way.",
      date: "2024-01-05",
      category: "AI & Automation",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Why We Built Our Agency on Top of Our Own SaaS: The Innovaly Story",
      excerpt: "The philosophy behind our dual-model approach and how building our own products makes us better partners for our clients.",
      date: "2024-01-01",
      category: "Founder Stories",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Founder-to-Founder: 3 Mistakes to Avoid When Launching Your MVP",
      excerpt: "Common pitfalls we've seen founders make when building their first product, and how to avoid them based on our experience.",
      date: "2023-12-28",
      category: "Platform Development",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "The Future of Remote Work: Building Distributed Teams That Actually Work",
      excerpt: "Lessons learned from running a globally distributed team and the tools and processes that make it successful.",
      date: "2023-12-20",
      category: "Growth Strategy",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = ["All", "Growth Strategy", "AI & Automation", "Founder Stories", "Platform Development"];

  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 50% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">Insights & Stories</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            Thoughts, strategies, and lessons learned from building companies, scaling teams, and helping founders turn their ideas into reality.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-zinc-200/70 dark:border-zinc-800 rounded-md bg-white/60 dark:bg-zinc-900/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                    category === "All"
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-zinc-900 dark:border-white"
                      : "border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8">Featured Article</h2>
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-500 rounded-md">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{blogPosts[0].title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
                <Link href="#" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium">
                  Read full article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                <span className="text-zinc-500 dark:text-zinc-400">Article Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-500 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">{post.readTime}</span>
                </div>
                <h3 className="font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <Link href="#" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 text-sm font-medium">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Stay Updated</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Get our latest insights on growth strategy, AI automation, and founder stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-zinc-200/70 dark:border-zinc-800 rounded-md bg-white/60 dark:bg-zinc-900/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
            <button className="px-6 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-md font-medium hover:opacity-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
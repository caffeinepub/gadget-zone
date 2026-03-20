import { ArrowRight, Clock } from "lucide-react";
import { useEffect } from "react";
import { useBlogPostsPublic } from "../../hooks/usePublicQueries";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const STATIC_ARTICLES = [
  {
    slug: "best-phones-under-20000",
    title: "Best Phones Under ₹20,000 in Chennai (2026)",
    excerpt:
      "Looking for a great smartphone on a budget? We've curated the top picks available at Gadget Zone, Thiruvanmiyur, Chennai — from Xiaomi to Realme and Motorola.",
    readTime: "5 min read",
    path: "/blog/best-phones-under-20000",
    imageUrl: "",
  },
  {
    slug: "phone-screen-protection",
    title: "How to Protect Your Phone Screen",
    excerpt:
      "A cracked screen is every phone user's nightmare. Here are practical tips to keep your display safe — from tempered glass to smart cases.",
    readTime: "4 min read",
    path: "/blog/phone-screen-protection",
    imageUrl: "",
  },
  {
    slug: "top-5-accessories",
    title: "Top 5 Accessories Every Phone User Needs",
    excerpt:
      "Maximize your smartphone experience with these must-have accessories. From fast chargers to wireless earbuds — all available at Gadget Zone Chennai.",
    readTime: "3 min read",
    path: "/blog/top-5-accessories",
    imageUrl: "",
  },
  {
    slug: "mobile-care-tips",
    title: "Essential Mobile Care Tips to Make Your Phone Last Longer",
    excerpt:
      "Your smartphone is a significant investment. Follow these easy care habits to extend its lifespan and avoid costly repairs.",
    readTime: "6 min read",
    path: "/blog/mobile-care-tips",
    imageUrl: "",
  },
];

interface BlogPageProps {
  onNavigate?: (path: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const { data: backendPosts } = useBlogPostsPublic();

  const articles =
    backendPosts && backendPosts.length > 0
      ? [...backendPosts]
          .sort((a, b) => Number(b.publishedAt) - Number(a.publishedAt))
          .map((p) => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            readTime: "Read more",
            path: `/blog/${p.slug}`,
            imageUrl: p.imageUrl,
          }))
      : STATIC_ARTICLES;

  useEffect(() => {
    updateSEO({
      title: "Mobile Tips & Guides | Gadget Zone Chennai Blog",
      description:
        "Read mobile tips, buying guides, and care advice from Gadget Zone, Thiruvanmiyur, Chennai. Stay updated with the latest smartphone news.",
      canonical: "/blog",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
  }, []);

  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, "", path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen py-10 px-4" aria-label="Blog">
      <div className="max-w-4xl mx-auto">
        <nav
          className="text-sm text-muted-foreground mb-6"
          aria-label="Breadcrumb"
        >
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Blog</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Mobile Tips &amp; Guides</h1>
        <p className="text-muted-foreground mb-10">
          Expert advice from the team at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>

        <div className="grid gap-6" data-ocid="blog.list">
          {articles.map((article, i) => (
            <article
              key={article.slug}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              data-ocid={`blog.item.${i + 1}`}
            >
              <div className="flex gap-0 flex-col sm:flex-row">
                {article.imageUrl && (
                  <div className="sm:w-48 h-36 sm:h-auto shrink-0">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleNav(article.path)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      data-ocid={`blog.item.${i + 1}`}
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client"
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import Image from "next/image";
import Link from "next/link";
import { allNewsAndEvents } from "@/data/newsAndEvents";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const [articleSlug, setArticleSlug] = useState<string | null>(null);
  
  useEffect(() => {
    params.then((resolvedParams) => {
      setArticleSlug(resolvedParams.slug);
    });
  }, [params]);
  
  if (!articleSlug) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#61213C] mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  const article = allNewsAndEvents.find(item => item.slug === articleSlug);
  
  if (!article) {
    return notFound();
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = allNewsAndEvents
    .filter(item => item.category === article.category && item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <TextImageBlock
        text="News & Events"
        imageSrc="/news.png"
        imageAlt="News"
      />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-[#A73966] capitalize text-sm">
              <Image src="/academics.svg" alt="category" width={16} height={16} />
              {article.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#D1D6DA]" />
            <span className="text-[#6F7C89] text-sm">{article.date}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E1E1E] mb-4 leading-tight">
            {article.header}
          </h1>
          
          <p className="text-lg text-[#1C1F22] leading-relaxed mb-6">
            {article.subheader}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8">
          <Image
            src={article.image}
            alt={article.header}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-[#1C1F22] leading-relaxed space-y-6">
            {article.content ? (
              <div>
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <p>
                  New City University continues to make significant strides in {article.category.toLowerCase()} excellence. 
                  This latest development demonstrates our commitment to providing world-class education and opportunities 
                  for our students and faculty members.
                </p>
                
                <p>
                  {article.subheader} The university&apos;s dedication to innovation and academic excellence 
                  remains at the forefront of all our initiatives, ensuring that students receive the best 
                  possible education and preparation for their future careers.
                </p>
                
                <h2 className="text-xl font-semibold text-[#1E1E1E] mt-8 mb-4">Key Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-[#1C1F22]">
                  <li>Comprehensive program development aligned with industry standards</li>
                  <li>Enhanced learning opportunities for all participants</li>
                  <li>State-of-the-art facilities and resources</li>
                  <li>Expert faculty guidance and mentorship</li>
                  <li>Strong focus on practical application and real-world experience</li>
                </ul>
                
                <p>
                  The impact of this initiative extends beyond the immediate participants, contributing to the 
                  overall growth and development of the university community. We remain committed to fostering 
                  an environment that promotes learning, innovation, and excellence in all areas.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Related Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.header}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#A73966] capitalize text-xs">
                        {relatedArticle.category}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-[#D1D6DA]" />
                      <span className="text-[#6F7C89] text-xs">{relatedArticle.date}</span>
                    </div>
                    <h3 className="font-semibold text-[#1E1E1E] mb-2 line-clamp-2 text-sm">
                      {relatedArticle.header}
                    </h3>
                    <p className="text-[#1C1F22] text-xs mb-3 line-clamp-2">
                      {relatedArticle.subheader}
                    </p>
                    <Link
                      href={`/news/article/${relatedArticle.slug}`}
                      className="text-[#61213C] text-xs font-medium hover:text-[#7D2B4D] transition-colors flex items-center gap-1"
                    >
                      Read Article
                      <Image src="/arrowd.svg" alt="arrow" width={12} height={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to News */}
        <div className="mt-12 text-center">
          <Link
            href="/news/news"
            className="inline-flex items-center gap-2 text-[#61213C] hover:text-[#7D2B4D] transition-colors font-medium"
          >
            <Image src="/arrowd.svg" alt="back" width={16} height={16} className="rotate-180" />
            Back to All News
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

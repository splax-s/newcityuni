import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/newsAndEvents";
import Breadcrumb from "@/reuseComponents/Breadcrumb";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  
  // Find the event by slug
  const event = eventsData.find((item) => item.slug === slug);
  
  if (!event) {
    notFound();
  }

  // Get related events (excluding current event)
  const relatedEvents = eventsData
    .filter((item) => item.id !== event.id && item.category === event.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Content */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="mb-6">
              <Image
                src={event.image}
                alt={event.header}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Event Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Image
                  src="/academics.svg"
                  alt="Category"
                  width={16}
                  height={16}
                />
                <span className="text-[#A73966] font-medium capitalize">{event.category}</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>{event.date}</span>
            </div>

            {/* Event Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {event.header}
            </h1>

            {/* Event Summary */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Event Summary</h2>
              <p className="text-gray-700 leading-relaxed">{event.subheader}</p>
            </div>

            {/* Event Details */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Event Details</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  This event is part of NCU&apos;s commitment to providing students with comprehensive opportunities for growth and development. 
                  Join us for an engaging and informative session that will enhance your academic journey.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">What to Expect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Interactive sessions with faculty and guest speakers</li>
                  <li>Networking opportunities with fellow students and professionals</li>
                  <li>Refreshments and light meals</li>
                  <li>Certificate of participation</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Registration Information</h3>
                <p>
                  Registration is required for this event. Please contact the Student Affairs Office 
                  or visit our online portal to secure your spot. Limited spaces available.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        <strong>Important:</strong> Please bring a valid student ID for entry. 
                        The event will start promptly at the scheduled time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news?tab=events"
                className="inline-flex items-center gap-2 text-[#61213C] hover:text-[#7D2B4D] font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Events
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Event Quick Info */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="ml-2 capitalize text-[#A73966]">{event.category}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Date:</span>
                  <span className="ml-2">{event.date}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="ml-2">NCU Main Campus</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Audience:</span>
                  <span className="ml-2">Students, Faculty, Staff</span>
                </div>
              </div>
            </div>

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Events</h3>
                <div className="space-y-4">
                  {relatedEvents.map((relatedEvent) => (
                    <Link
                      key={relatedEvent.id}
                      href={`/news/events/${relatedEvent.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <Image
                          src={relatedEvent.image}
                          alt={relatedEvent.header}
                          width={80}
                          height={60}
                          className="w-20 h-15 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#61213C] line-clamp-2 transition-colors">
                            {relatedEvent.header}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedEvent.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all events
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = eventsData.find((item) => item.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${event.header} | NCU Events`,
    description: event.subheader,
    openGraph: {
      title: event.header,
      description: event.subheader,
      images: [
        {
          url: event.image,
          width: 800,
          height: 400,
          alt: event.header,
        },
      ],
    },
  };
}

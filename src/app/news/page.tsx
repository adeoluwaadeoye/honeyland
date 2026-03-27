import Image from "next/image";
import { newsData } from "@/lib/NewsData";
import SectionHeader from "@/components/shared/SectionHeader";

export const dynamic = "force-static";

export default function NewsPage() {
    const communityNews = newsData.filter(
        (item) => item.type === "announcement"
    );

    const externalNews = newsData.filter(
        (item) => item.type === "external"
    );

    // First community news is hero
    const [heroArticle, ...otherCommunityNews] = communityNews;

    return (
        <main className="max-w-7xl mx-auto px-4 py-24 mt-12 space-y-24">
            <div className=" max-w-6xl mb-12 text-left">

                <SectionHeader
                    label="Community News"
                    title={
                        <>
                            Built through unity, dedication, and{" "}
                            <span className="text-black font-semibold">
                                the persistent efforts of our residents and leadership,
                            </span>{" "}
                            shaping a stronger, safer, and more vibrant Ifo community.
                        </>
                    }
                />
            </div>
            {/* ================= HERO COMMUNITY NEWS ================= */}
            <section className="space-y-8">
                <h1 className="text-3xl md:text-4xl leading-tight mb-4">
                    {heroArticle.title}
                </h1>
                <div className="w-full h-125 md:h-150 relative rounded-md overflow-hidden shadow-lg mt-4">
                    <Image
                        src={heroArticle.image}
                        alt={heroArticle.imageAlt}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <p className="text-sm text-gray-500 mb-2">
                        {heroArticle.date} | By <span className="font-semibold">CDA Secretariat</span>
                    </p>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>{heroArticle.content}</p>
                    </div>
                </div>
            </section>

            {/* ================= OTHER COMMUNITY NEWS ================= */}
            <section className="space-y-16">
                {otherCommunityNews.map((item) => (
                    <article key={item.slug} className="space-y-6">
                        <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
                        <div className="w-full h-100 md:h-112.5 relative rounded-sm overflow-hidden shadow-md mt-4">
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                fill
                                sizes=""
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {/* ================= EXTERNAL NEWS ================= */}
            <section className="space-y-8">
                <div className="max-w-5xl mb-12 mx-auto text-center">
                    <SectionHeader
                        label="Community News"
                        title={
                            <>
                                Built through unity, dedication, and{" "}
                                <span className="text-black font-semibold">
                                    the persistent efforts of our residents and leadership,
                                </span>{" "}
                                shaping a stronger, safer, and more vibrant Ifo community.
                            </>
                        }
                    />
                </div>
                <h2 className="text-2xl font-semibold">News from Nigeria</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {externalNews.map((item) => (
                        <div
                            key={item.slug}
                            className="overflow-hidden hover:shadow-lg transition"
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    fill
                                    sizes=""
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 space-y-2">
                                <p className="text-sm text-gray-500">{item.date}</p>
                                <h3 className="text-lg font-medium">{item.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{item.excerpt}</p>
                                <a
                                    href={item.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 font-medium text-sm"
                                >
                                    Read full news →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
// import { galleryCategories } from "@/lib/galleryConfig"
// import Image from "next/image"
// import GalleryViewer from "@/components/GalleryViewer"

// export const revalidate = 86400

// export async function generateStaticParams() {
//     return galleryCategories.map((category) => ({
//         slug: category.slug
//     }))
// }

// export default async function GalleryPage({
//     params
// }: {
//     params: Promise<{ slug: string }>
// }) {
//     const { slug } = await params

//     const category = galleryCategories.find(
//         (item) => item.slug === slug
//     )

//     if (!category) {
//         return (
//             <div className=" flex items-center justify-center bg-[#F7F6F2]">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
//                     <p className="text-gray-600">The category you're looking for doesn't exist.</p>
//                 </div>
//             </div>
//         )
//     }

//     // Temporary: Generate 5 placeholder images per item
//     const getGalleryImages = () => Array(5).fill("/sofa.jpg")

//     return (
//         <div className="bg-[#F7F6F2] ">
//             {/* Hero */}
//             <section className="luxury-green py-16 text-center">
//                 <h1 className="text-4xl md:text-5xl font-serif mb-3">
//                     {category.title}
//                 </h1>

//                 <p className="text-sm">
//                     Home <span className="text-[#C9A24D] mx-2">/</span> Gallery <span className="text-[#C9A24D] mx-2">/</span> {category.title}
//                 </p>
//             </section>

//             {/* Grid */}
//             <section className="max-w-7xl mx-auto px-6 py-16">
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
//                     {category?.images.map((item, index) => (
//                         <div
//                             key={`${item.title}-${index}`}
//                             className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//                         >
//                             <div className="relative h-52 overflow-hidden">
//                                 <Image
//                                     src="/sofa.jpg"
//                                     alt={item.title}
//                                     fill
//                                     className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-95"
//                                 />

//                                 {/* Image count badge */}
//                                 <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
//                                     {getGalleryImages().length} photos
//                                 </div>
//                             </div>

//                             <div className="luxury-green p-5 text-center">
//                                 <h3 className="font-medium mb-4 line-clamp-2">
//                                     {item.title}
//                                 </h3>

//                                 <GalleryViewer
//                                     images={getGalleryImages()}
//                                     title={item.title}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Empty state */}
//                 {category?.images.length === 0 && (
//                     <div className="text-center py-16">
//                         <p className="text-gray-500 text-lg">No items found in this gallery.</p>
//                     </div>
//                 )}
//             </section>
//         </div>
//     )
// }

import { notFound } from "next/navigation";
import DesignGalleryClient from "./DesignGalleryClient";
import { designCategories, getDesignCategoryBySlug } from "@/lib/designGalleryData";

export async function generateStaticParams() {
    return designCategories.map((c) => ({ slug: c.slug }));
}

export default async function DesignGallerySlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const category = getDesignCategoryBySlug(slug);
    if (!category) notFound();
    return <DesignGalleryClient category={category} />;
}
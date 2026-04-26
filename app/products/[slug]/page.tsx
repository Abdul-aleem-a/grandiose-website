import { notFound } from "next/navigation";
import ProductDetailClient from "../ProductDetailClient";
import { signatureProducts, getProductBySlug } from "@/lib/signatureCollectionData";

export async function generateStaticParams() {
    return signatureProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);
    if (!product) notFound();
    return <ProductDetailClient product={product} />;
}
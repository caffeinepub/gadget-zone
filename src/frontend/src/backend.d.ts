import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    slug: string;
    publishedAt: bigint;
    imageUrl: string;
    excerpt: string;
}
export interface BannerSlide {
    id: bigint;
    title: string;
    imageUrl: string;
    position: bigint;
    subtitle: string;
}
export interface FaqItem {
    id: bigint;
    question: string;
    answer: string;
    position: bigint;
}
export interface Product {
    id: bigint;
    whatsappMessage: string;
    name: string;
    imageUrl: string;
    brand: string;
    emiAvailable: boolean;
    price: bigint;
    storageOptions: Array<string>;
}
export interface Testimonial {
    id: bigint;
    customerName: string;
    review: string;
    rating: bigint;
    product: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createBannerSlide(title: string, subtitle: string, imageUrl: string, position: bigint): Promise<bigint>;
    createBlogPost(title: string, slug: string, content: string, excerpt: string, imageUrl: string): Promise<bigint>;
    createFaqItem(question: string, answer: string, position: bigint): Promise<bigint>;
    createProduct(brand: string, name: string, price: bigint, storageOptions: Array<string>, emiAvailable: boolean, whatsappMessage: string, imageUrl: string): Promise<bigint>;
    createTestimonial(customerName: string, review: string, rating: bigint, product: string): Promise<bigint>;
    deleteBannerSlide(id: bigint): Promise<boolean>;
    deleteBlogPost(id: bigint): Promise<boolean>;
    deleteFaqItem(id: bigint): Promise<boolean>;
    deleteProduct(id: bigint): Promise<boolean>;
    deleteTestimonial(id: bigint): Promise<boolean>;
    getBannerSlides(): Promise<Array<BannerSlide>>;
    getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
    getBlogPosts(): Promise<Array<BlogPost>>;
    getCallerUserRole(): Promise<UserRole>;
    getFaqItems(): Promise<Array<FaqItem>>;
    getMarqueeText(): Promise<string>;
    getProducts(): Promise<Array<Product>>;
    getProductsByBrand(brand: string): Promise<Array<Product>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    isCallerAdmin(): Promise<boolean>;
    setMarqueeText(text: string): Promise<void>;
    updateBannerSlide(id: bigint, title: string, subtitle: string, imageUrl: string, position: bigint): Promise<boolean>;
    updateBlogPost(id: bigint, title: string, slug: string, content: string, excerpt: string, imageUrl: string): Promise<boolean>;
    updateFaqItem(id: bigint, question: string, answer: string, position: bigint): Promise<boolean>;
    updateProduct(id: bigint, brand: string, name: string, price: bigint, storageOptions: Array<string>, emiAvailable: boolean, whatsappMessage: string, imageUrl: string): Promise<boolean>;
    updateTestimonial(id: bigint, customerName: string, review: string, rating: bigint, product: string): Promise<boolean>;
}

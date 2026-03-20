import { useQuery } from "@tanstack/react-query";
import type { BannerSlide, BlogPost, FaqItem, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useBannerSlides() {
  const { actor, isFetching } = useActor();
  return useQuery<BannerSlide[]>({
    queryKey: ["bannerSlides"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBannerSlides();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useTestimonialsPublic() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useMarqueeText() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: ["marqueeText"],
    queryFn: async () => {
      if (!actor) return "";
      return actor.getMarqueeText();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useFaqItemsPublic() {
  const { actor, isFetching } = useActor();
  return useQuery<FaqItem[]>({
    queryKey: ["faqItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFaqItems();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useBlogPostsPublic() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBlogPosts();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

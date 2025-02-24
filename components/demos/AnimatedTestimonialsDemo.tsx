import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Abhishek Shrivastava",
      designation: "Software Engineer at HCL",
      src: "/test.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

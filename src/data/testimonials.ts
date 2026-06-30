export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  /** Must be true only with explicit written permission */
  permissionGranted: boolean;
}

/** Testimonials are disabled until real, permissioned content is added. */
export const testimonialsEnabled = false;

export const testimonials: Testimonial[] = [];

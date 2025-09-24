declare global {
  interface Window {
    particlesJS?: (tagId: string, config: Record<string, unknown>) => void;
    pJSDom?: Array<{
      pJS?: { fn?: { vendors?: { destroypJS?: () => void } } };
    }>;
  }
}
export {};
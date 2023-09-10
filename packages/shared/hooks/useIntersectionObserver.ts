import { type RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * custom hooks to handle Intersection Observer
 * @param ref - ref element to listen
 * @param args - intersection observer args
 */
function useIntersectionObserver(ref: RefObject<Element>, args: Args) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  } = args;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([_entry]: IntersectionObserverEntry[]) => {
    setEntry(_entry);
  };

  useEffect(() => {
    const node = ref.current;
    const hasIOSupport = Boolean(window.IntersectionObserver);
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, frozen, ref, threshold]);

  return entry;
}

export default useIntersectionObserver;

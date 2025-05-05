import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

export default function splitText() {
  if (typeof document !== "undefined") {
    const titles = gsap.utils.toArray(".split-text");
    const tlx = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title, { type: "chars" });
      tlx.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 15,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
        },
        "<"
      );
      tlx.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -15,
          rotateX: 90,
          stagger: 0.02,
          duration: 1,
        },
        "<1"
      );
    });
  }
}

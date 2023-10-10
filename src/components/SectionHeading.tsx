import { forwardRef, useEffect, useRef } from "react";
import "./SectionnHeading.scss";

const SectionHeading = forwardRef(
  (props: { children: React.ReactNode; className?: string }, ref: any) => {
    const { children, className } = props;

    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (ref) {
        ref.current = headlineRef.current;
      }
    }, [ref]);

    return (
      <h1 ref={headlineRef} className={`section-heading ${className}`}>
        {children}
      </h1>
    );
  }
);

export default SectionHeading;

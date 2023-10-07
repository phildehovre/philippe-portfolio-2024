import "./SectionnHeading.scss";

function SectionHeading(props: { children: React.ReactNode }) {
  const { children } = props;

  return <h1 className="section-heading">{children}</h1>;
}

export default SectionHeading;

interface headingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<headingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="text-muted-foreground text-sm tracking-wide">{description}</p>
    </div>
  );
};

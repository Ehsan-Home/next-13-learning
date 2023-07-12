const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>This is header in about pages and sub-pages</h1>
      {children}
    </>
  );
};

export default AboutLayout;

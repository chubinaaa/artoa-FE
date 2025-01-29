type PortfolioLayoutProps = {
  children: React.ReactNode;
};
export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="container mx-auto flex flex-col gap-x-5 py-16 lg:grid lg:grid-cols-[312px_1fr]">
      {children}
    </div>
  );
}

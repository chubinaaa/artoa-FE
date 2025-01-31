import { Sidebar } from "./_components/sidebar.client";

type ProfileLayoutProps = {
  children: React.ReactNode;
};
export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="container mx-auto flex flex-col gap-x-5 py-16 lg:grid lg:grid-cols-[312px_1fr]">
      <aside className="hidden h-fit rounded-2xl border border-muted-foreground bg-secondary px-6 py-4 md:block">
        <Sidebar />
      </aside>
      {children}
    </div>
  );
}

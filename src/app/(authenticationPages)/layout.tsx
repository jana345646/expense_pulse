import AuthNavbar from "@/components/AuthNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AuthNavbar />

      <main>{children}</main>
    </div>
  );
}

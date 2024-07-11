export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h4 className="text-center p-2 bg-red-400">This is private admin login</h4>
      {children}
    </div>
  );
}

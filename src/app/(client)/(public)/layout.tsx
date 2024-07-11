export default function ClientLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h4 className="text-center p-2 bg-red-400">This is public client layout</h4>
      {children}
    </div>
  );
}

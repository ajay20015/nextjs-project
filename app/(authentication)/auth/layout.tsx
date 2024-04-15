export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
        <h2>Children Loaded</h2>
      {children}
    </div>
  );
}

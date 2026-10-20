export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="alma-page-transition">{children}</div>;
}

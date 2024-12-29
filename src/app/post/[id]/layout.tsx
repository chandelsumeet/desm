import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post | Update Post",
  description: "View , edit and create new post",
};

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
export default Layout;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion-U | Git Playground",
  description: "Interactive Git learning environment",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full bg-background-dark overflow-hidden flex flex-col">
      {children}
    </div>
  );
}
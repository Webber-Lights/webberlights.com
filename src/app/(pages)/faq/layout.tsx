import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about the Webber Lights show.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

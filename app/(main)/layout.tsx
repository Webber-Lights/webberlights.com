import MainBanner from "components/ui/MainBanner";

export default function Layout({ children }) {
    return (
    <div>
      <MainBanner />
      {children}
  </div>
    )
}
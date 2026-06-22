export default function SiteHeader() {
  return (
    <header className="header">
      <img src={`${import.meta.env.BASE_URL}common_assets/kyrsunder_logo_text_bw.svg`} className="logo"/>
    </header>
  );
}
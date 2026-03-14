const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container-narrow">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-semibold text-foreground">ERP Cloud</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Consultoria de Implementação ERP Open Source
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

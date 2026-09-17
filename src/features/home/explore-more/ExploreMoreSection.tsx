import { useT } from "@/lib/i18n";
import { ExploreMoreLink } from "./ExploreMoreLink";
import { exploreMoreLinks } from "./explore-more.data";

export function ExploreMoreSection() {
  const t = useT();
  return (
    <section className="mb-10 bg-page py-10 md:mb-16 md:py-20">
      <div className="container-app">
        <h2 className="font-grotesk mb-8 text-center text-brand-h-sm font-bold uppercase md:text-brand-h-lg">
          {t("home.exploreMore.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {exploreMoreLinks.map((item) => (
            <ExploreMoreLink
              key={item.id}
              href={item.href}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

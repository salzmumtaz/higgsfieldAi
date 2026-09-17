import { PromoHeroCard } from "./PromoHeroCard";
import { QuickStartCard } from "./QuickStartCard";
import { quickStartItems } from "./quick-start.data";

export function ExploreQuickStart() {
  return (
    <section className="mb-6 flex flex-col">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:gap-5">
        <PromoHeroCard />
        <div className="grid min-w-0 flex-1 auto-rows-fr grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-3">
          {quickStartItems.map((item) => (
            <QuickStartCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

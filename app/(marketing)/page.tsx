import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Logo } from "./_components/logo";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F] pt-40">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pt-6">
        <Heading />
        <Heroes />
      </div>
    </div>
  );
}

export default MarketingPage;
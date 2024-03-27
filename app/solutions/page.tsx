import { getAllSolutionsMeta } from "@/lib/mdx/solutions";
import { BentoGridDemo } from "@/components/styled/bento-grid-demo";
import GradientHeading from "@/components/styled/gradient-heading";
import Bounded from "@/components/styled/bounded";

const SolutionsPage = async () => {
  const solutions = await getAllSolutionsMeta();

  return (
    <Bounded width="marginxy">
      <div className="text-center mb-10">
        <GradientHeading>Solutions</GradientHeading>
      </div> 
      <BentoGridDemo items={solutions} />
    </Bounded>
  );
};

export default SolutionsPage;

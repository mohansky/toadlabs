import Bounded from "@/components/styled/bounded";
import ContactDetails from "@/components/styled/contact-details";
import { Form } from "@/components/styled/form";
import GradientHeading from "@/components/styled/gradient-heading";

export default function Contact() {
  return (
    <Bounded width="marginxy">
      <div className="text-center mb-10">
        <GradientHeading>Contact</GradientHeading>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <ContactDetails />
        <Form />
      </div>
    </Bounded>
  );
}

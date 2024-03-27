import ContactDetails from "../static-details/contact-details";
import SocialLinks from "../static-details/social-links";

export default function Contacts() {
  return (
    <div>
      <div className="col-span-2">
        <div className="col-md-6 mx-auto mb-10">
          <ContactDetails />
        </div>
      </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  );
}

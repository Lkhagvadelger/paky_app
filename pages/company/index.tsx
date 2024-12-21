import { withRequireLogin } from "@lib/auth/ui";
import { CompanyLayout, CompanyHome } from "@lib/company/ui";

const CompanyHomePage = () => (
  <CompanyLayout>
    <CompanyHome />
  </CompanyLayout>
);

export default withRequireLogin(CompanyHomePage);

import { useAuth, withRequireLogin } from "@lib/auth/ui";
import { UserRole } from "@prisma/client";
import { AdminLayout } from "@lib/admin/ui/layout/AdminLayout";
import { UserList } from "@lib/user/ui";
import NotFoundPage from "pages/404";
import { CompanyLayout } from "@lib/company/ui/layout/CompanyLayout";

const AdminUsers = () => {
  const { user } = useAuth();
  return user?.role !== UserRole.ADMIN && user?.role !== UserRole.COMPANY ? (
    <NotFoundPage />
  ) : (
    <CompanyLayout>
      <UserList />
    </CompanyLayout>
  );
};

export default withRequireLogin(AdminUsers);

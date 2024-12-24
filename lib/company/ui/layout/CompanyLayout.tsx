import { ReactNode } from "react";
import { useAuth } from "@lib/auth/ui";
import { UserRole } from "@prisma/client";
import { AppLayout, Flex } from "@ui/index";
import NotFoundPage from "pages/404";
import { CompanySidebar } from "./CompanySidebar";

export const CompanyLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  return user?.role !== UserRole.ADMIN && user?.role !== UserRole.COMPANY ? (
    <NotFoundPage />
  ) : (
    <AppLayout>
      <Flex h="full" flexDirection="column">
        <Flex
          flex="1"
          fontSize="sm"
          p={{ base: "2", md: "4" }}
          gap={{ base: "2", md: "4" }}
        >
          <CompanySidebar />
          <Flex
            p={{ base: "2", md: "4" }}
            width="full"
            direction="column"
            overflowY="auto"
            bg="#ffffff"
            boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.1)"
            borderRadius={{ sm: "xl" }}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </AppLayout>
  );
};

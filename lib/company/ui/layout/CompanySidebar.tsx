import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { MenuItemType } from "@lib/admin/ui/layout/AdminSidebar";
import NextLink from "next/link";
import { ReactNode } from "react";

import {
  MdConfirmationNumber,
  MdLogoDev,
  MdLogout,
  MdSupervisedUserCircle,
} from "react-icons/md";

const menuItems: (MenuItemType & { items?: MenuItemType[] })[] = [
  {
    label: "Users",
    items: [
      {
        label: "Нүүр",
        icon: <MdConfirmationNumber />,
        href: "/company",
      },
      {
        label: "Бүх хэрэглэгч",
        icon: <MdSupervisedUserCircle />,
        href: "/company/users",
      },

      {
        label: "Тээвэр",
        icon: <MdLogoDev />,
        href: "/company/message",
      },
      {
        label: "Үйлчилгээний нөхцөл",
        icon: <MdLogoDev />,
        href: "/company/message",
      },
      {
        label: "Гарах",
        icon: <MdLogout />,
        href: "/auth/logout",
      },
    ],
  },
];

export const CompanySidebar = () => {
  return (
    <Flex h="full" minW={{ base: 14, md: 48 }} w={{ base: 14, md: 48 }} direction="column">
      <Stack spacing="4" flex="1" overflow="auto" py="3" pr="2" w="full">
        {menuItems.map((item, i) =>
          item.items ? (
            <NavGroup key={`menuitem-${i}`} label={item.label}>
              {item.items.map((subitem, si) =>
                subitem.items ? (
                  <Box key={`menuitem-${i}-${si}`} w="full">
                    <HStack color="teal.900" w="full">
                      <AdminNavLinkItem
                        key={`menuitem-${i}-${si}`}
                        href={subitem.href}
                        icon={subitem.icon}
                        label={subitem.label}
                      />
                    </HStack>
                    <Stack pl="4" spacing="1">
                      {subitem.items.map((subsubitem, ssi) => (
                        <AdminNavLinkItem
                          key={`menuitem-${i}-${si}-${ssi}`}
                          href={subsubitem.href}
                          icon={subsubitem.icon}
                          label={subsubitem.label}
                        />
                      ))}
                    </Stack>
                  </Box>
                ) : (
                  <AdminNavLinkItem
                    key={`menuitem-${i}-${si}`}
                    href={subitem.href}
                    icon={subitem.icon}
                    label={subitem.label}
                  />
                )
              )}
            </NavGroup>
          ) : (
            <AdminNavLinkItem
              key={`menuitem-${i}`}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          )
        )}
      </Stack>
    </Flex>
  );
};

const NavGroup = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <Box w="full">
    <Stack spacing="1" w="full">
      {children}
    </Stack>
  </Box>
);

const AdminNavLinkItem = ({
  label,
  icon,
  href,
}: {
  label: string;
  icon: ReactNode;
  href?: string;
}) =>
  href ? (
    <NextLink href={href} style={{ width: "100%" }}>
      <HStack
        px="2"
        py="1"
        color="teal.900"
        rounded="md"
        transition="all 0.2s"
        w="full"
        justify={{ base: "center", md: "flex-start" }}
        _hover={{ bg: "teal.100", color: "teal.800" }}
      >
        <Text fontSize="lg">{icon}</Text>
        <Text display={{ base: "none", md: "block" }}>{label}</Text>
      </HStack>
    </NextLink>
  ) : (
    <HStack 
      px="2" 
      py="1" 
      color="teal.900" 
      w="full"
      justify={{ base: "center", md: "flex-start" }}
    >
      <Text fontSize="lg">{icon}</Text>
      <Text display={{ base: "none", md: "block" }}>{label}</Text>
    </HStack>
  );

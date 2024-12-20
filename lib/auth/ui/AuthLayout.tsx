import { AppFooter } from "@ui/components/AppFooter";
import { AppHeader } from "@ui/components/AppHeader";
import {
  Box,
  Card,
  Heading,
  Icon,
  SEO,
  Text,
  useColorModeValue,
} from "@ui/index";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { ReactNode } from "react";
import { IoArrowBack } from "react-icons/io5";

export const AuthLayout = ({
  title,
  caption = "",
  actions,
  contentWidth,
  children,
}: {
  title: string;
  caption: string;
  actions?: ReactNode;
  contentWidth: string;
  children: ReactNode;
}) => {
  const { t: ta } = useTranslation("auth");

  return (
    <>
      <SEO title={title} />
      <Box
        as="main"
        display="flex"
        px="6"
        bgImage={"/images/login-bg.jpg"}
        bgPosition="center"
        bgSize="cover"
        minH="100vh"
        alignItems="center"
      >
        <Box w="full" mx="auto">
          <Card
          transition="height 1s ease-in-out"

            w="full"
            bgGradient="linear(to-b, #e2eefe, #fff)"
            dropShadow={"lg"}
            boxShadow={"lg"}
            maxW={contentWidth}
            px={{ base: 6, md: 12 }}
            py={{ base: 6, md: 12 }}
            mx="auto"
            pos="relative"
            border="1px"
            borderColor="gray.100"
            borderRadius="16px"
          >
            {children}
            {actions ? (
              <Box w="full" pt="8" textAlign="right">
                {actions}
              </Box>
            ) : (
              <></>
            )}
          </Card>
        </Box>
      </Box>
    </>
  );
};

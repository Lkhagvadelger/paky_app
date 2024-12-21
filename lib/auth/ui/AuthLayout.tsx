import { Box, Card, Text, SEO, Image, VStack } from "@ui/index";
import useTranslation from "next-translate/useTranslation";
import { ReactNode } from "react";

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
        bgImage={"/images/login-bg.jpg"}
        bgPosition="center"
        bgSize="cover"
        minH="100vh"
        alignItems="center"
      >
        <VStack w="full" mx="auto">
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
          <Image
            src="/images/paky.png"
            alt="login-bg"
            borderRadius={"32"}
            h="16"
          />
        </VStack>
      </Box>
    </>
  );
};

import { useAuth } from "@lib/auth/ui";
import {
  Box,
  Button,
  Card,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@ui/index";
import { MdAttachMoney, MdCheck } from "react-icons/md";

export const CompanyContract = () => {
  const { user } = useAuth();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box w="full">
      <VStack spacing={2} align="stretch">
        <Card p={4} bg="#fff" borderRadius="lg">
          <Heading size="lg" mb={2}>
            <Flex align="center">
              <Icon as={MdAttachMoney} mr={2} />
              Төлбөрийн мэдээлэл
            </Flex>
          </Heading>
          <Flex direction="column" gap={3}>
            <Box>
              <Text fontWeight="bold" color="gray.600">
                Гэрээний хугацаа:
              </Text>
              <Text fontSize="lg">
                1 жил (Гэрээг жил бүрийн 1-р сард шинэчлэн хийнэ.)
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.600">
                Үйлчилгээний хугацаа:
              </Text>
              <Text fontSize="lg">
                2025 оны 1 сарын 1 - 2025 оны 12 сарын 31
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.600">
                Бүтэн жилийн төлбөр:
              </Text>
              <Text fontSize="lg">
                <b>1 560 000 төгрөг</b> (Жил бүрийн 1 сард шинэчлэгдэнэ)
              </Text>
            </Box>
          </Flex>
        </Card>
      </VStack>

      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={4} bg="gray.800" color="white">
            <VStack spacing={4}>
              <Heading size="md">Үйлчилгээний нөхцөл</Heading>
              <Text>
                Энэхүү үйлчилгээг ашиглахдаа та дараах нөхцөлүүдийг хүлээн
                зөвшөөрч байна...
              </Text>
              <Button
                variant="solid"
                onClick={onClose}
                leftIcon={<Icon as={MdCheck} />}
              >
                Зөвшөөрөх
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

import {
  Box,
  Button,
  Card,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Icon,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack
} from "@ui/index";
import { MdCheck, MdPayment } from "react-icons/md";

export const PaymentPlan = () => {
  const {
    isOpen: isOpenPayment,
    onToggle: onTogglePayment,
    onClose: onClosePayment,
  } = useDisclosure();

  return (
    <Box w="full" p={2}>
      <VStack spacing={2} align="stretch">
        <Card p={4} bg="#fff" borderRadius="lg">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th p={1}>Сар</Th>
                <Th p={1}>Төлөх дүн</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(12)].map((_, index) => (
                <Tr key={index}>
                  <Td p={1}>2025, {index + 1}-р сар</Td>
                  <Td p={1}>
                    130,000₮
                    <Text>
                      <Tag
                        variant="solid"
                        colorScheme={index === -1 ? "green" : "red"}
                      >
                        {index === -1 ? "Төлсөн" : "Төлөөгүй"}
                      </Tag>
                    </Text>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      onClick={() => onTogglePayment()}
                      isDisabled={index !== 0}
                    >
                      <Icon as={MdPayment} mr={2} />
                      Төлөх
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Card>
      </VStack>

      <Drawer
        placement="right"
        onClose={onClosePayment}
        isOpen={isOpenPayment}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="transparent" p="10" borderRadius="lg">
          <DrawerBody borderRadius="lg" p={4} bg="gray.100" color="white">
            <VStack spacing={4}>
              <Heading size="md">Төлбөр</Heading>
              <Text>
                Энэхүү үйлчилгээг ашиглахдаа та дараах нөхцөлүүдийг хүлээн
                зөвшөөрч байна...
              </Text>
              <Button
                variant="solid"
                onClick={onClosePayment}
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

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
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@ui/index";
import {
  MdAddHomeWork,
  MdAttachMoney,
  MdBusiness,
  MdCheck,
  MdDashboardCustomize,
  MdFireTruck,
  MdFlight,
} from "react-icons/md";
import { CompanyContract } from "./CompanyContract";
import { PaymentPlan } from "./PaymentPlan";

export const CompanyHome = () => {
  const { user } = useAuth();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const {
    isOpen: isOpenPayment,
    onToggle: onTogglePayment,
    onClose: onClosePayment,
  } = useDisclosure();

  return (
    <Box w="full" p={2}>
      <VStack spacing={2} align="stretch">
        <Card p={4} bg="#fff" borderRadius="lg">
          <Heading size="lg" mb={2}>
            <Flex align="center">
              <Icon as={MdBusiness} mr={2} />
              Байгууллагын мэдээлэл
            </Flex>
          </Heading>
          <Flex direction="column" gap={3}>
            <Box>
              <Text fontWeight="bold" color="gray.600">
                Байгууллагын нэр:
              </Text>
              <Text fontSize="lg">{"Тодорхойгүй"}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.600">
                Регистрийн дугаар:
              </Text>
              <Text fontSize="lg">{"Тодорхойгүй"}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.600">
                Бүртгэлтэй утасны дугаар:
              </Text>
              <Text fontSize="lg">{"Тодорхойгүй"}</Text>
            </Box>
          </Flex>
        </Card>

        <Stack w="full" direction={{ base: "column", md: "row" }}>
          <Flex
            w="full"
            direction="column"
            p={4}
            bg="#fff"
            borderRadius="lg"
            border="1px"
            borderColor="gray.100"
            justify="space-between"
          >
            <Box>
              <Heading size="md" mb={2}>
                Энгийн багц
              </Heading>
              <Flex align="center" gap={1}>
                <Icon as={MdAddHomeWork} />3 салбарын эрх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFlight} />
                МУ-д орох шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdDashboardCustomize} />
                Гаалийн системд мэдээлэл илгээх
              </Flex>
            </Box>
            <Box>
              <Text textAlign={"center"} fontSize="xl">
                130,000₮ / сард
              </Text>
              <Button w="full" mt={2} variant="pakyBlue">
                Сонгох
              </Button>
            </Box>
          </Flex>
          <Flex
            w="full"
            direction="column"
            p={4}
            bg="#fff"
            borderRadius="lg"
            border="1px"
            borderColor="gray.100"
            justify="space-between"
          >
            <Box>
              <Heading size="md" mb={2}>
                Дунд багц
              </Heading>
              <Flex align="center" gap={1}>
                <Icon as={MdAddHomeWork} />5 салбарын эрх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFlight} />
                МУ-д орох шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFlight} transform="scaleY(-1)" />
                МУ-с гарах шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFireTruck} />
                Газрын шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdDashboardCustomize} />
                Гаалийн системд мэдээлэл илгээх
              </Flex>
            </Box>
            <Box>
              <Text textAlign={"center"} fontSize="xl">
                180,000₮ / сард
              </Text>
              <Button w="full" mt={2} variant="pakyBlue">
                Сонгох
              </Button>
            </Box>
          </Flex>
          <Flex
            w="full"
            direction="column"
            p={4}
            bg="#fff"
            borderRadius="lg"
            border="1px"
            borderColor="gray.100"
            justify="space-between"
          >
            <Box>
              <Heading size="md" mb={2}>
                API багц
              </Heading>
              <Flex align="center" gap={1}>
                <Icon as={MdAddHomeWork} />
                10 салбарын эрх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFlight} />
                МУ-д орох шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFlight} transform="scaleY(-1)" />
                МУ-с гарах шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdFireTruck} />
                Газрын шуудан бүртгэх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdCheck} />
                Өөрийн системд API холболт хийх
              </Flex>
              <Flex align="center" gap={1}>
                <Icon as={MdDashboardCustomize} />
                Гаалийн системд мэдээлэл илгээх
              </Flex>
            </Box>
            <Box mt={2}>
              <Text textAlign={"center"} fontSize="xl">
                230,000₮ / сард
              </Text>
              <Button w="full" mt={2} variant="pakyBlue">
                Сонгох
              </Button>
            </Box>
          </Flex>
        </Stack>
        <CompanyContract />
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

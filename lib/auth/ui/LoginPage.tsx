import { UserRole } from "@prisma/client";
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  PinInput,
  PinInputField,
  Text,
  toaster,
} from "@ui/index";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { MdPhone } from "react-icons/md";
import { AuthLayout } from ".";
import { usePhoneConfirmation, usePhoneVerification } from "../data/authHooks";
import { CardCaption } from "./components";

type AdminLoginInput = {
  phoneNumber: string;
  pin: string;
  showPin: boolean;
  code: string;
};
export const LoginPage = () => {
  const router = useRouter();

  const requestCodeMutation = usePhoneVerification();
  const mutation = usePhoneConfirmation();

  const {
    control,
    register,
    handleSubmit,
    formState,
    reset,
    getValues,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<AdminLoginInput>({
    defaultValues: {
      pin: "123456",
    },
  });
  const action = handleSubmit(async (data) => {});
  const onPinChange = (value: string) => {
    clearErrors("pin");
    setValue("pin", value);
  };
  watch("showPin");
  const doLogin = () => {
    const body = {
      username: getValues("phoneNumber").toLowerCase(),
      method: "phone",
      code: getValues("code"),
    };

    if (getValues("showPin") !== true) {
      requestCodeMutation.mutate(body, {
        onError: (error: any) => {
          setError("phoneNumber", { message: error.translationKey });
        },
        onSuccess: (data: any) => {
          if (data.success == true) {
            setValue("showPin", true);
            toaster.success(
              "Таны утсанд очсон баталгаажуулах кодыг оруулна уу"
            );
          }
        },
      });
      return;
    }

    if (!getValues("pin") || getValues("pin").length != 6)
      return setError("pin", {
        message: "Зөв код оруулна уу",
      });

    mutation.mutate(
      { ...body, pin: getValues("pin") },
      {
        onError: (error: any) => {
          toaster.success("Баталгаажуулах код буруу байна.");
          setError("pin", { message: error.translationKey });
        },
        onSuccess: (data: any) => {
          toaster.success("Баталгаажуулалт амжилттай боллоо.");
          if (data.role == UserRole.ADMIN)
            router.push({
              pathname: `/admin`,
              query: "",
            });
          if (data.role == UserRole.ADMIN)
            router.push({
              pathname: `/admin`,
              query: "",
            });
        },
      }
    );
  };
  return (
    <AuthLayout title={"Нэвтрэх"} caption={""} contentWidth="420px">
      <chakra.form onSubmit={action}>
        <Flex flex="1" gap="4" flexDir="column" borderLeftRadius={"10px"}>
          <Heading textAlign="center" color="">
            Утасны дугаараар нэвтрэх
          </Heading>
          <Text
            textAlign="center"
            color="gray.600"
            lineHeight={"1"}
            fontSize="sm"
          >
            Paky системийг ашиглах байгууллагуудад зориулсан эрхийн бүртгэл
          </Text>
          <FormControl id="email" isInvalid={!!errors.phoneNumber}>
            <InputGroup>
              <InputLeftElement pl={"12"}>
                <Icon as={MdPhone} />
                <Text pl="2">+976</Text>
              </InputLeftElement>
              <Input
                maxLength={8}
                pl={"20"}
                w="full"
                fontSize="md"
                border="1px"
                borderRadius="3px"
                color={"gray.900"}
                borderColor={"gray.900"}
                _focus={{
                  color: "gray.900",
                  borderColor: "gray.900",
                  bg: "white",
                }}
                _disabled={{
                  color: "gray.900",
                  borderColor: "gray.900",
                  bg: "white",
                }}
                disabled={getValues("showPin") === true}
                type="text"
                placeholder={""}
                {...register("phoneNumber", {
                  required: "Утасны дугаар оруулна уу",
                })}
              />
            </InputGroup>
          </FormControl>
          {getValues("showPin") && (
            <FormControl id="pin" pt={4} isInvalid={!!errors.pin}>
              <CardCaption text={`Таны утсанд ирсэн пин кодыг оруулна уу`} />
              <HStack justify="space-between">
                <PinInput
                  size={"md"}
                  isInvalid={!!errors.pin}
                  onChange={onPinChange}
                  value={getValues("pin")}
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <FormErrorMessage>
                {errors.pin && errors.pin.message}
              </FormErrorMessage>
              <Box pt={4}>
                <Text
                  onClick={() => {
                    setValue("showPin", false);
                  }}
                  textAlign={"center"}
                  color="gray.600"
                  fontSize={"14px"}
                >
                  Өөр утасны дугаараар нэвтрэх
                </Text>
              </Box>
            </FormControl>
          )}

          <Button
            w="full"
            variant="dark"
            isLoading={requestCodeMutation.isLoading || mutation.isLoading}
            onClick={doLogin}
          >
            Үргэлжлүүлэх
          </Button>

          <Text
            textAlign="center"
            bg="gray.100"
            borderRadius={"4px"}
            p="2"
            color="gray.600"
            lineHeight={"1.2"}
            fontSize="sm"
          >
            Одоогоор зөвхөн урьдчилан бүртгэсэн байгууллагууд ашиглах боломжтой.
            Шинээр бүртгүүлэхийг хүсвэл <b>86809078</b> утсаар холбогдоно уу.
          </Text>
        </Flex>
      </chakra.form>
    </AuthLayout>
  );
};

import { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  borderRadius: "3px",
};

const sizes: Record<string, SystemStyleObject> = {
  md: {
    px: "24px",
  },
};

const variants = {
  gray: {
    bg: "gray.100",
    borderColor: "gray.200",
    borderWidth: "1px",
    _light: {
      color: "black",
    },
    _hover: {
      bg: "gray.300",
      color: "gray.800",
    },
  },
  solid: {
    color: "white",
    bg: "green.500",
    _disabled: {
      cursor: "pointer",
    },
    _hover: {
      bg: "green.300",
      _disabled: {
        bg: "green.500",
      },
    },
  },
  delete: {
    bg: "red.500",
    _light: {
      color: "white",
    },
    _hover: {
      bg: "red.300",
    },
  },
  blue: {
    color: "white",
    bg: "blue.600",
    _hover: {
      bg: "blue.700",
    },
    size: "md",
    borderColor: "blue.600",
  },
  bluelined: {
    color: "blue.600",
    bg: "offWhite",
    border: "1px",
    _hover: {
      bg: "blue.700",
    },
    size: "md",
    borderColor: "blue.600",
  },
  outline: {
    color: "green.500",
    bg: "transparent",
    _hover: {
      bg: "green.900",
    },
    size: "md",
    borderColor: "green.500",
  },
  outlineFileAttach: {
    color: "gray.500",
    bg: "transparent",
    _hover: {
      bg: "blue.700",
      color: "white",
    },
    w: "full",
    fontWeight: 300,
    size: "md",
    border: "1px",
    borderColor: "gray.100",
    dropShadow: "black.100",
    paddingStart: 3,
  },
  outlineFilePreview: {
    color: "gray.500",
    bg: "transparent",
    _hover: {
      bg: "blue.700",
      color: "white",
    },
    fontWeight: 300,
    size: "md",
    border: "1px",
    borderColor: "gray.100",
    dropShadow: "black.100",
    paddingStart: 3,
  },
  dark: {
    color: "white",
    bg: "gray.900",
    _hover: {
      bg: "gray.700",
    },
    size: "md",
    borderColor: "gray.900",
    fontWeight: "500",
  },
  pakyBlue: {
    color: "white",
    bg: "pakyBlue",
    _hover: {
      bg: "pakyBlue",
    },
  },
};

const defaultProps = {
  size: "md",
  variant: "dark",
};

const Button = {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

export default Button;

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { config } from "@/theme";

const system = createSystem(defaultConfig, config);

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}

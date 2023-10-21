import { chakra } from "@chakra-ui/react";

	export const Wrapper = chakra("div", {
		baseStyle: {
			bg: "rgba(0, 0, 0, 0.4)",
			backgroundBlendMode: "multiply",
			minHeight: "100vh",
			backgroundImage: "public/img/bg6.jpg",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
		},
	})



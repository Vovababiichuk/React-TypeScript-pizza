import { chakra } from "@chakra-ui/react";

	export const Wrapper = chakra("div", {
		baseStyle: {
			bg: "rgba(0, 0, 0, 0.9)",
			backgroundBlendMode: "multiply",
			minHeight: "100vh",
			backgroundImage: "../../../public/img/bg5.jpg",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
		},
	})
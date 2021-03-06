import { Grid, Center, Link } from "@chakra-ui/react";
import { useAppSelector } from "../store";
import { useLocation } from "react-router-dom";
import UserDropdown from "./user-dropdown";
import SwitchTheme from "./switch-theme";
import SearchBar from "./search-bar";

const Header = () => {
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	const location = useLocation();

	return (
		<Grid
			as={"header"}
			templateColumns={"10vw 1fr 10vw"}
			gap={"1rem"}
			p={"2rem"}
		>
			<Center>
				<Link
					fontSize="xl"
					fontWeight="black"
					href="/"
					_hover={{ opacity: 0.8 }}
				>
					UMP
				</Link>
			</Center>
			<Center minW={"100%"}>
				{location.pathname === "/create-playlist" && <SearchBar />}
			</Center>
			<Center>
				{isAuthenticated ? <UserDropdown /> : <SwitchTheme withIcon />}
			</Center>
		</Grid>
	);
};

export default Header;

import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relenveanc</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import { Box, Flex, HStack, Img, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, Button } from "@chakra-ui/react";
import {ArrowForwardIcon,ChevronDownIcon,ChevronUpIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Box  border="1px solid" fontSize="18px" color="grey">
      <Flex>
        <HStack p="0px">
          <Box p="4">
           <Link to="/">
           <Img
              width="170px"
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            ></Img>
            </Link>
          </Box>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  fontSize="17px"
                  bg="white"
                  fontWeight="normal"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={isOpen?<ChevronUpIcon />:<ChevronDownIcon />}
                >
                  {isOpen ? "Products " : "Products"}
                </MenuButton>

                <MenuList width="100vw" marginTop="14px">
                  <MenuItem>Products</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                  Products  Copy
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

        
          

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  fontSize="17px"
                  bg="white"
                  fontWeight="normal"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={isOpen?<ChevronUpIcon />:<ChevronDownIcon />}
                >
                  {isOpen ? "Use Cases " : "Use Cases"}
                </MenuButton>

                <MenuList marginTop="15px">
                  <MenuItem>Use Cases</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                   Use Cases
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  fontSize="17px"
                  bg="white"
                  fontWeight="normal"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={isOpen?<ChevronUpIcon />:<ChevronDownIcon />}
                >
                  {isOpen ? "Features " : "Features"}
                </MenuButton>

                <MenuList marginTop="15px">
                  <MenuItem>Features</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                  Features
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          
          
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  fontSize="17px"
                  bg="white"
                  fontWeight="normal"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={isOpen?<ChevronUpIcon />:<ChevronDownIcon />}
                >
                  {isOpen ? "Resources " : "Resources"}
                </MenuButton>

                <MenuList marginTop="15px">
                  <MenuItem>Resources</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                  Resources Copy
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>


        </HStack>
        <Spacer />

        <HStack>
        <Box p="4" >
         Pricing
        </Box>
        <Box p="4">
          Contact Sale
        </Box>
        <Box p="4" >
         <Link to="/login"> Login </Link>
        </Box>
        <Box p="4" >
        <Link to="/signup">  <Button bg="blue.400" color="white">Get Started<ArrowForwardIcon/></Button></Link>
        </Box>
        </HStack>
      </Flex>
    </Box>
    
  );
}

export default Navbar;

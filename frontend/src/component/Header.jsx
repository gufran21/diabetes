import { Box, Button, Heading, HStack, Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import {HiOutlineChevronDown} from "react-icons/hi"
import React from 'react'

function Header() {

  return (
    <Box backgroundColor={"teal"} py="5">
    <HStack justifyContent={"space-between"}>
    {window.innerWidth>600?<Heading children={"MEDICS"}/>:""}
    <HStack spacing={"10"} px="70">
    <Link to="/"><Button variant={"ghost"} color="black" fontSize={"20"}>Home</Button></Link>
    <Menu mx={"30"}>
    <MenuButton as={Button} rightIcon={<HiOutlineChevronDown/>}>
    Predict
  </MenuButton>
  <MenuList>
  
   <Link to="diabetes"><MenuItem>Diabetes</MenuItem></Link>
  
  </MenuList>
</Menu>
</HStack>
    </HStack>
    </Box>
  )
}

export default Header
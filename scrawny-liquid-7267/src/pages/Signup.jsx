import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, Heading, Img, Input, Text, useDisclosure, useStatStyles } from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";
const initialUserData={
      name:"",
      email: "",
      password: ""
}
function SignUp({color,radius,backgroundC,Padding,FontSize,FontWeight,MarginTop,Border}){
    const [userData,setUserData] = useState(initialUserData);
    const navigate=useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const handleChange=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
    }

    console.log(userData)

    const handleSubmit=(e)=>{
     e.preventDefault()
     
      fetch(`http://localhost:8000/signupData`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
     }).then((res)=>{
        console.log(res.status)
        if(res.status===201){
            navigate("/login")
        }
        
     })

     setUserData(initialUserData)

    }

    return (
        <>
       
        <Button ref={btnRef} borderRadius={radius} onClick={onOpen} bg={backgroundC} color={color} p={Padding} fontSize={FontSize} fontWeight={FontWeight} marginTop={MarginTop} border={Border} >Get Started<ArrowForwardIcon/></Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
  
            <DrawerBody>
              <Heading display="flex" justifyContent="center" color="blackAlpha.800" fontSize="24px" marginTop="50px" >Sign up for free</Heading>
              <Text display="flex" justifyContent="center" color="blackAlpha.700" fontSize="14px" marginTop="10px" >Full access. No credit card needed.</Text>
              <FormControl>
              <Input name="name" value={userData.name} onChange={handleChange} border="1px solid" p="25px" borderRadius="2rem" marginTop="20px" placeholder='Full Name' />
              <Input name="email" value={userData.email} onChange={handleChange} border="1px solid" p="25px" borderRadius="2rem" marginTop="20px" placeholder='Enter Your Work Email' />
              <Input name="password" value={userData.password} onChange={handleChange} border="1px solid" p="25px" borderRadius="2rem" marginTop="20px" placeholder='Enter Your Password' />
              <Button onClick={handleSubmit} bg={"#6c6cff"} color="white"  p="25px" borderRadius="2rem" marginTop="20px" width="full">SIGNUP</Button>
              </FormControl>
               
               <Box display="flex" justifyContent="space-between" marginTop="40px" >
                <Box height="0" width="45%" border={"1px solid grey"}></Box>
                <Text marginTop="-10px">Or</Text>
                <Box height="0"  width="45%" border={"1px solid grey"}></Box>


               </Box>


               <Button border={"1px solid #6c6cff"} bg={"white"} color="#6c6cff"  p="25px" borderRadius="2rem" marginTop="20px" width="full" >Sign up with__<Img width="15px" src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png"></Img> </Button>

           
            </DrawerBody>
  
          
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SignUp 
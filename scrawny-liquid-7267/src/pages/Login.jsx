import { Box,Text, Button, FormControl, Heading, Img, Input, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContent } from "../context/AuthContent";

const initialUserData={
    email: "",
    password: ""
}

function Login(){
    const {loginUser,logoutUser,isAuth} = useContext(AuthContent)


    const [usersData,setUsersData] = useState([])
    const [userData,setUserData] = useState(initialUserData);

    useEffect(()=>{
     fetch(`http://localhost:8000/signupData`).then((res)=>(res.json()))
    .then((res)=>{
       setUsersData(res)
    })
    },[])

    console.log(usersData)
    const handleChange=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
    }

    console.log(userData)

    const handleSubmit=(e)=>{
     e.preventDefault()
     
    usersData.map((el)=>{
        if(el.email===userData.email && el.password===userData.password){
            loginUser()
            alert("Login successfull")


        }
    })

     setUserData(initialUserData)

    }


    return (
        <Box>


<Heading display="flex" justifyContent="center" color="blackAlpha.800" fontWeight="thin" fontSize="50px"  marginTop="50px" >Log in to your account</Heading>
              <Text display="flex" justifyContent="center" color="black" fontSize="16px" marginBottom="-10px" marginTop="20px" >Enter your work email address</Text>
              
              <Container>

              <FormControl>
              <Input name="email" value={userData.email} onChange={handleChange} border="1px solid" p="25px" borderRadius="1rem" marginTop="20px" placeholder='Enter Your Work Email' />
              <Input name="password" value={userData.password} onChange={handleChange} border="1px solid" p="25px" borderRadius="1rem" marginTop="20px" placeholder='Enter Your Password' />
              <Button onClick={handleSubmit} bg={"#6c6cff"} color="white"  p="25px" borderRadius="1rem" marginTop="20px" width="full">LOGIN</Button>
              </FormControl>
           
               
               <Box display="flex" justifyContent="space-between" marginTop="40px" >
                <Box height="0" width="45%" border={"1px solid grey"}></Box>
                <Text marginTop="-10px">Or</Text>
                <Box height="0"  width="45%" border={"1px solid grey"}></Box>

             
               </Box>


               <Button border={"1px solid #6c6cff"} bg={"white"} color="#6c6cff"  p="25px" borderRadius="1rem" marginTop="20px" width="full" >Sign up with__<Img width="15px" src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png"></Img> </Button>
               </Container>

        </Box>
    )
}

export default Login
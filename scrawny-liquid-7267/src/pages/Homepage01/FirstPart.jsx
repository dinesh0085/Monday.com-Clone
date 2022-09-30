import {
  Box,
  Text,
  color,
  Heading,
  Spacer,
  HStack,
  Img,
  VStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SignUp from "../Signup";

const OsBox = [
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/design_icon.png",
    text: "Creative & design",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/dev_icon.png",
    text: "Software development",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/marketing_icon.png",
    text: "Marketing",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/pmo_icon.png",
    text: "Project management",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/crm_icon.png",
    text: "Sales & CRM",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/task_icon.png",
    text: "Task Management",
  },
  ,
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/hr_icon.png",
    text: "HR",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/operations_icon.png",
    text: "Operations",
  },
  {
    img: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/workflows_icon.png",
    text: "More workflow",
  },
];

const custemerLogo = [
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png`,
  `https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png`,
];

function FirstPart() {
  return (
    <>
    <Box border="1px solid" bg="#101049" color="white">
      <Heading marginTop="50px" fontWeight="medium" fontSize="80px">
        A platform built for a <br />
        new way of working
      </Heading>
      <Spacer></Spacer>
      <Text fontSize="20px" fontWeight="bold">
        What would you like to manage with monday.com Work OS?
      </Text>
      <HStack justifyContent="center" marginTop="50px" marginBottom="20px">
        {OsBox.map((el) => {
          return (
            <Checkbox colorScheme="cyan"  p="5px"
            width="130px"
            height="140px"
            border="1px"
            rounded="md"
            borderColor="grey">
            <Box
         
            >
                
              <VStack>
               
                <Img width="50px" src={el.img}></Img>
                <Text>{el.text}</Text>
                
              </VStack>
          
            </Box>
            </Checkbox>
          );
        })}
      </HStack>

    
        <SignUp
          Padding="25px"
          radius="3rem"
          MarginTop="30px"
          backgroundC="#16b690"
          color="white"
          FontWeight="midium"
          FontSize="20px"
        />
       
      <Text marginTop={"20px"} fontSize="13px">
        No credit card needed ✦ Unlimited time on Free plan
      </Text>
      <Img
        width="100%"
        marginTop="30px"
        src="https://i.ibb.co/DR8WgCx/Homepage-image01.png"
      ></Img>

     
    </Box>
    <Heading marginTop="40px">Trusted by 152,000+ customers worldwide</Heading>
     <HStack gap="20px" justifyContent="center" margin="auto" wrap="wrap"  width="50%" marginTop="100px">
     {custemerLogo.map((el)=>{
         return <Img width="100px" src={el}></Img>
     })}
   </HStack>
   </>
  );
}

export default FirstPart;

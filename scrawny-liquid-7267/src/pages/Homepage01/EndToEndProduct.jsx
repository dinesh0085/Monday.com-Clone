import { Box, Button, Heading, HStack, Img , Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {CheckIcon,ArrowForwardIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import SignUp from "../Signup";
const workFlowObj = [
    {
      title: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Work_management1.png",
      logo: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/dev_text.png",
      content1:"For professionals and teams managing tasks & workflows",
      color:"#6c6cff",
      content2:"Manage tasks and workflows to fuel team collaboration and productivity at scale.",
      useCase:["Task management","Project management","Automated workflows","Build your own"]
    },

    {
        title: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Marketer1.png",
        logo: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/marketer_text.png",
        content1:"For marketing and creative professionals and teams",
        color:"#f04095",
        content2:"Manage and collaborate on marketing and creative projects to launch campaigns.",
        useCase:["Content calendar","Campaign tracking","Digital asset management","Marketing projects"]
      },

      {
        title: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Sales_CRM1.png",
        logo: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/crm_text.png",
        content1:"For sales professionals and customer-facing teams",
        color:"#00d2d2",
        content2:"Track and manage all aspects of your sales cycle, customer data, and more in one place.",
        useCase:["Contact management","Sales pipeline","Post-sales management","Lead management"]
      },

      {
        title: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Project1.png",
        logo: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/projects_text.png  ",
        content1:"For PMO teams and project manager professionals",
        color:"#ff9900",
        content2:"Plan, collaborate, and execute on every project and portfolio to reach your goals, faster",
        useCase:["Advanced projects","Critical path","Portfolio management","Program management"]
      },

      {
        title: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Dev1.png",
        logo: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/dev_text.png",
        content1:"For product and development professionals and teams",
        color:"#00c875",
        content2:"Build agile workflows to drive impact across your product, design, and R&D teams.",
        useCase:["Roadmap planning","Scrum & Kanban","Bug tracking","Sprint dashboards"]
      },
]

function EndToEndProduct(){
    const [current,setCurrent] = useState(workFlowObj[0])

    const handleChangeCurrent=(value)=>{
        workFlowObj.map((el)=>{
            if(el.title===value){
                setCurrent(el)
            }
           })
          }


    return (
        <>
        <Box style={{backgroundImage:"url(https://i.ibb.co/PGVC17v/homepage05.png)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom",backgroundSize:"100%"}} marginTop="-50px" bg="#f0f3ff">  
        <Box>
        <Img margin="auto" marginTop="50px"  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/monday_products_small.svg"></Img>

        <Heading width="50%" margin="auto" marginTop="20px" fontSize="50px">
        End-to-end products to run
the core of your business
      </Heading>
      <Text fontSize="20px">
      Tailored products designed for every aspect of your teams' needs.
      </Text>

      </Box>



    <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" borderRadius={"1rem"} bg="white"  width={"70%"} margin="auto"  marginTop="50px" >
      


      <HStack>

        <Box width={"40%"}  bg="white" borderRadius="1rem">
         <VStack>
            {workFlowObj.map((el)=>{
                return <Button  _hover onClick={()=>handleChangeCurrent(el.title)} bg={el.title===current.title?"white":"blue.50"} border borderLeft={current.title==el.title?`6px solid ${el.color}`:""} width={"100%"} height="90px" display="flex" justifyContent={"flex-start"} alignItems={"center"}  p={"20px"}>
                     <Img height={"30px"}  width={"250px"} src={el.title}></Img>
                     </Button>
            })}
         </VStack>
        </Box>

        <Box p="20px"   display="flex"  flexDirection="column" alignItems="flex-start">

       
       
       
        <Img width="300px" src={current.logo}></Img>
        <Text fontSize="13px" color="grey">{current.content1}</Text>
        <Text  fontSize="18px" width="80%" marginTop="50px" >{current.content2}</Text>
         <Box marginTop="20px" width={"90%"} border={`1px solid ${current.color}`}></Box>
         
         <Text marginTop="40px" fontSize="15px" color="grey">Top use cases:</Text>
         
          <Box marginTop="10px" display="grid" gridTemplateColumns="repeat(2,1fr)" gap="15px">
          {current.useCase.map((el)=>{
            return <Box display="flex" justifyContent={"flex-start"}><CheckIcon color={current.color}/>  {el}</Box>
          })}
          </Box>

          {/* <SignUp
              Padding="25px"
              radius="3rem"
              MarginTop="20px"
              backgroundC="#16b690"
              color="white"
              FontWeight="midium"
              FontSize="20px"
            /> */}
       
         
            <SignUp
              Padding="20px"
              rounded="3rem"
              MarginTop="50px"
              backgroundC="white"
              color="black"
              FontWeight="midium"
              FontSize="20px"
              Border="1px solid"
            />
             

        </Box>

      </HStack>
     



    </Box>




</Box>
<Box marginTop="-1px" bg="#0f1048">
<ReactPlayer width="100%" loop playing url="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/products_video.mp4"></ReactPlayer>
</Box>
<Img width="100%" src="https://i.ibb.co/qpfTm9s/homepage09.png"></Img>

<Box display={"flex"} justifyContent="center" alignItems={"center"}>
  <Img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/stars.png"></Img>
</Box>

<Box>

        <Heading width="100%" margin="auto" marginTop="20px" fontSize="40px">
        Deliver your best work with monday.com
      </Heading>
     


      
       
      <Text marginTop={"20px"} fontSize="13px">
        No credit card needed ✦ Unlimited time on Free plan
      </Text>
      <SignUp
          Padding="25px"
          radius="3rem"
          MarginTop="30px"
          backgroundC="#16b690"
          color="white"
          FontWeight="midium"
          FontSize="20px"
        />
      </Box>

      

</>
)
}

export default EndToEndProduct
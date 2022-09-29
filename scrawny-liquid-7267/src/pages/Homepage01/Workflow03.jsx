import { Box, Button, Heading, HStack, Img, Spacer, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";

const workFlowObj = [
  {
    title: "Boards",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg",
    content:
      "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
  },

  {
    title: "View",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg",
    content:
      "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
  },

  {
    title: "Dashboards",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg",
    content:
      "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
  },

  {
    title: "Integration",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg",
    content:
      "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
  },

  {
    title: "Automation",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg",
    content:
      "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.",
  },

  {
    title: "Apps",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg",
    content:
      "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.",
  },

  {
    title: "Docs",
    logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg",
    content:
      "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
  },
];

function Workflow() {
  const [dataWorkflow, setDataWorkFlow] = useState(workFlowObj[0]);


  
  const handleChangeWorkflow=(value)=>{
   workFlowObj.map((el)=>{
    if(el.title===value){
        setDataWorkFlow(el)
    }
   })
  }

  return (
    <Box bg="#ffffff">
      <Heading marginTop="40px" fontSize="50px">
        Everything you need for any workflow
      </Heading>
      <Text fontSize="20px">
        Easily build your ideal workflow with monday.com building blocks.
      </Text>

      <HStack
        width="65%"
        margin="auto"
        marginTop="40px"
        boxShadow="base"
        gap="20px"
        marginBottom="50px"
      >
        {workFlowObj.map((el) => {
          return (
            <Button
             onClick={()=>{handleChangeWorkflow(el.title)}}
              borderBottom={
                dataWorkflow.title === el.title ? "4px solid #5034ff" : ""
              }
              _hover={{ bg: "lightgrey" }}
              width="100%"
              height="100%"
              color="grey"
              p="15px"
              display="flex"
              flexDirection={"column"}
              bg="white"
            >
              <Img width="20px" src={el.logo}></Img>
              <Text>{el.title}</Text>
            </Button>
          );
        })}
      </HStack>

      <HStack>
        <Box
          width="50%"
          display="flex"
          justifyContent="center"
          alignContent="center"
          p="30px"

        >
            <Box width="90%" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} >
          <ReactPlayer
          
           width="100%"
            playing
            loop
            muted
            url="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4"
          ></ReactPlayer>
          </Box>

        </Box>
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          p="100px"
        >
          <HStack>
            <Img width="25px" src={dataWorkflow.logo}></Img>
            <Text color="#6d6dff" fontSize="30px">{dataWorkflow.title}</Text>
          </HStack>
          
          <Text color="grey" marginTop="20px" fontSize="20px">{dataWorkflow.content}</Text>
        </Box>
      </HStack>
      <Img marginTop="30px" width={"100%"} src="https://i.ibb.co/fSmcydN/Homepage06.png"></Img>
    </Box>
  );
}

export default Workflow;

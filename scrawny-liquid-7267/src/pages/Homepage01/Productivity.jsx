import {
  Text,
  Box,
  Heading,
  HStack,
  VStack,
  Button,
  Img,
  AspectRatio,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import SignUp from "../Signup";

function Productivity() {
  return (
    <Box width="100vw" marginTop="90px">
      <HStack>
        <Box>
          <Heading>The Work OS that lets you shape workflows, your way</Heading>
        </Box>

        <VStack>
          <Text width="80%" fontSize="20px">
            Boost your team’s alignment, efficiency, and productivity by
            customizing any workflow to fit your needs.
          </Text>

          {/*  <SignUp
          Padding="25px"
          radius="3rem"
          MarginTop="30px"
          backgroundC="#16b690"
          color="white"
          FontWeight="midium"
          FontSize="20px"
        /> */}
          
            <SignUp
              Padding="25px"
              radius="3rem"
              MarginTop="20px"
              backgroundC="#16b690"
              color="white"
              FontWeight="midium"
              FontSize="20px"
            />
            
         
        </VStack>
      </HStack>

      <Img
        width="100%"
        src="https://i.ibb.co/DQ6JNYk/Homepage-image02.jpg"
      ></Img>

      <HStack height="700px" color="white" bg="#0f1048" overflow="auto">


        <Box width="50%">
          <Box margin="auto" marginTop="1200px" width="70%">
            <Heading>Streamline your work for maximum productivity</Heading>

            <Text fontSize="18px" marginTop="30px">
              Centralize all you r work, processes, tools, and files into one
              Work OS. Connect teams, bridge silos, and maintain one source of
              truth across your organization.
            </Text>
          </Box>

          <Box margin="auto" marginTop="100px" width="70%">
            <HStack>
              <Img
                width="50px"
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg"
              ></Img>
              <Text>
                “ We use monday.com for a plethora of use cases, the
                opportunities this platform provides are limitless.” Jane Tham |
                VP of Collaboration Technologies Universal Music Group
              </Text>
            </HStack>
          </Box>

          <Box margin="auto" marginTop="200px" width="65%">
            <Heading>Bring teams together to drive business impact</Heading>

            <Text fontSize="18px" marginTop="30px">
              Collaborate effectively organization-wide to get a clear picture
              of all your work. Stay in the loop with easy-to-use automations
              and real-time notifications.
            </Text>
          </Box>

          <Box margin="auto" marginTop="100px" width="70%">
            <HStack>
              <Img
                width="80px"
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg"
              ></Img>
              <Text>
                “ Since adopting monday.com, our global marketing department has
                seen a 40% improvement in cross-team collaboration.” Sarah Pharr
                |<br></br>
                AVP Marketing Genpact
              </Text>
            </HStack>
          </Box>

           
          <Box margin="auto" marginTop="200px" width="65%">
            <Heading>Stay on track to
reach your goals, faster</Heading>

            <Text fontSize="18px" marginTop="30px">
            Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.
            </Text>

            <SignUp
              Padding="25px"
              radius="3rem"
              MarginTop="20px"
              backgroundC="#16b690"
              color="white"
              FontWeight="midium"
              FontSize="20px"
            />

          </Box>

          <Box margin="auto" marginTop="100px" width="70%">
            <HStack>
              <Img
                width="80px"
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/baptiste.jpeg"
              ></Img>
              <Text>
              “monday.com allows banks to be synchronized between the top-level management figures and local KPIs.”
              <br></br>
              <span fontWeight="bold"> Baptiste Ancey Head of Innovation Indosuez Wealth Management </span>
              </Text>
            </HStack>
          </Box>


        </Box>{" "}
        //not
        <Box>
          <Box  position="absolute" top="2700px" right="50px">
            <ReactPlayer
             
              playing
              loop
              muted
              url="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/goals_dashboard.mp4"
            />
          </Box>
        </Box>
        //not
      </HStack>
      <Img width="100%" src="https://i.ibb.co/sQH7FvN/homepage05.png"></Img>
    </Box>
  );
}

export default Productivity;

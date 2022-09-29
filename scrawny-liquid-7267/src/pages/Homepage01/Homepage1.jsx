import { Box } from "@chakra-ui/react";
import EndToEndProduct from "./EndToEndProduct";
import FirstPart from "./FirstPart";
import Productivity from "./Productivity";
import Workflow from "./Workflow03";

function Homepage1(){
    return (
        <Box width="100%">
           <FirstPart></FirstPart> 
           <Productivity></Productivity>
           <Workflow></Workflow>
           <EndToEndProduct></EndToEndProduct>
        </Box>
    )
}

export default Homepage1
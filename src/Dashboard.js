import { Stack, Box, Flex } from "@chakra-ui/react"
//bike is a child of dashboard
import Bike from "./Bike"
import CurrentTotals from "./CurrentTotals"
import Bike1 from "./assets/bike1.jpeg"
import Bike2 from "./assets/bike2.jpeg"
import Bike3 from "./assets/bike3.jpeg"

const Dashboard = () => {
    return (
        //centered according
        <Stack
            as={Box}
            textAlign={'center'}
            //spacing small use 8 medium 14
            spacing={{ base: 8, md:14 }}
            //top and bottom padding
            py={{ base: 20, md:36}}>
        <CurrentTotals />
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Bike bike={Bike1}/>
            <Bike bike={Bike2}/>
            <Bike bike={Bike3}/>
        </Flex>
        </Stack>
    )
}

export default Dashboard
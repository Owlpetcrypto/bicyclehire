import { Box, Stack, Text, Button, Image } from '@chakra-ui/react'

//pass in as prop
const Bike = ({ bike }) => {
  return (
    //mx left to right marging bottom
    <Box boxSize={'lg'} mx={2}>
      <Image src={bike} mb={10} />
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      {/* align and justifycontent center */}
      <Stack spacing={0} direction={'row'} align={'center'} justifyContent={'center'} mt={5}>
        <Button
          colorScheme={'green'}
          bg={'teal.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'teal.500',
          }}
        >
          Check Out
        </Button>
        <Button
          colorScheme={'green'}
          bg={'teal.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'teal.500',
          }}
        >
          Check In
        </Button>
      </Stack>
    </Box>
  )
}

export default Bike

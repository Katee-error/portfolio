import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const AnimatedSpinner = motion(Box);

const Preloader = () => {
  return (
    <Center h="100vh">
      <AnimatedSpinner
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Spinner size="xl" />
      </AnimatedSpinner>
    </Center>
  );
};
export default Preloader

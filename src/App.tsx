import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Box, Flex } from "@chakra-ui/react";
import {
  Home,
  // Blog,
  // PostDetail,
  WorkDetail,
  About,
  ContactForm,
  Work,
} from "@/pages";
import { Header } from "@/components";

const App = () => {
  return (
    <Router basename="/portfolio/">
      <Flex direction="column" bg="white" _dark={{ bg: "dark.800" }}>
        <Header />
        <Box as="main" flex={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/post/:id" element={<PostDetail />} /> */}
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default App;

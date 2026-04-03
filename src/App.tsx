import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Box, Flex } from "@chakra-ui/react";
import { Home, Blog, PostDetail, About } from "@/pages";
import { Header } from "@/components";

const App = () => {
  return (
    <Router>
      <Flex
        direction="column"
        minHeight="100vh"
        bg="white"
        _dark={{ bg: "dark.800" }}
      >
        <Header />
        <Box as="main" flex={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default App;

import { Button, HStack } from "@chakra-ui/react";
import client from "@/config/contentful";
import { useEffect, useState } from "react";
// import { type Post } from "@/types";

const App = () => {
  const [posts, setPosts] = useState([]);
  // const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    // const getPosts = async (): Promise<Post[]> => {
    const entries = await client.getEntries({
      content_type: "post",
    });

    return entries.items;
  };

  useEffect(() => {
    getPosts().then((postlist) => {
      console.log(postlist);
      setPosts(postlist);
    });
  }, []);

  return (
    <>
      {posts.map((post) => (
        <>
          <p key={post.sys.id}>{post.fields.title}</p>
          <p key={post.sys.id}>
            {post.fields.description.content[0].content[0].value}
          </p>
        </>
      ))}

      <p>Hello world!</p>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
};

export default App;

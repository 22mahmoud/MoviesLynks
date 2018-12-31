import React from "react";
import { Box, Heading, Text } from "rebass";

export default function MovieDetailsInfo({ title, tagline, overview }) {
  return (
    <Box>
      <Heading fontSize={[3, 4, 6]}> {title} </Heading>
      <Heading fontSize={[2, 3]} fontWeight={0} style={{ opacity: ".5" }}>
        {tagline}
      </Heading>
      <Text fontSize={2}> {overview}</Text>
    </Box>
  );
}

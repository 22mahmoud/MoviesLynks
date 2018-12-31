import React from "react";
import { Flex, Text } from "rebass";

import { Badge } from "../../ui/Badge";

export default function MovieGenres({ genres }) {
  return (
    <Flex>
      {genres.map(genre => (
        <Badge key={genre.id} borderRadius={8} m={1} bg="cornflower">
          <Text py={[1 * 0.5]} px={[0, 0, 3]} fontSize={1} fontWeight={0}>
            {genre.name}
          </Text>
        </Badge>
      ))}
    </Flex>
  );
}

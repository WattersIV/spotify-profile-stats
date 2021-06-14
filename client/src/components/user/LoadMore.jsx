import React from "react";
import { Button } from "@material-ui/core";
import { loadMoreTopListening } from "../../api/spotify";

export default function LoadMore(props) {
  const { fetchMoreUrl, update, current } = props;

  return (
    <Button
      className="load-more"
      onClick={async () => {
        const newData = await loadMoreTopListening(fetchMoreUrl);
        update({
          next: newData.next,
          items: [
            ...current.items,
            newData.items[0],
            newData.items[1],
            newData.items[2],
            newData.items[3],
            newData.items[4],
          ],
        });
      }}
    >
      Load More
    </Button>
  );
}

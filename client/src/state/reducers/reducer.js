export const reducer = (state, action) => {
  switch (action.type) {
    case "addNode": {
      let nodeArray = [...state.nodes];
      const length = nodeArray.length;
      nodeArray.push({
        id: `${length + 1}`,
        x: Math.floor(Math.random() * 300),
        y: Math.floor(Math.random() * 300),
        size: 400,
        color: "#0079ff",
      });
      return { ...state, nodes: [...nodeArray] };
    }
    case "addEdge": {
      let links = [...state.links];
      links.push({
        ...action.payload,
      });
      return { ...state, links: [...links] };
    }
    default: {
      return state;
    }
    case "deleteGraph": {
      return {
        ...state,
        links: [],
        nodes: [
          {
            id: "1",
            color: "#0079ff",
            x: Math.floor(Math.random() * 500),
            y: Math.floor(Math.random() * 500),
          },
        ],
      };
    }
  }
};

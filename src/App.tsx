import { Grid, GridItem, Show, useBreakpointValue  } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // For small screens
        lg: `"nav nav" "aside main"`, // Adjusted for larger screens
      }}
    >
      
      <GridItem area="nav">
       <NavBar/>
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

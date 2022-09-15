import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">

      <Box>
        <Navbar/>
        <Stack direction="row" spacing ={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>

      </Box>


    </div>
  );
}

export default App;

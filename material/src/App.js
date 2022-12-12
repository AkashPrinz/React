import * as React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import LoginIcon from '@mui/icons-material/Login';
export function App() {
  return (
    <div>
      <div className="App">
      <Button style= {{backgroundColor: "#EC0D0D"}} variant="contained">Button 1</Button>
      <Button startIcon={<LoginIcon />} Button style= {{backgroundColor: "#F3FA09"}} variant="contained"> 
        Login
      </Button>
      <Button startIcon={<LoginIcon />} Button style= {{backgroundColor: "#18FA09"}} variant="contained">
        Logout
      </Button>
      </div>

    </div>
  );
}
export default App;
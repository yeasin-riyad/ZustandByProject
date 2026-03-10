import { Box, Container, Typography } from "@mui/material"
import AddHabitForm from "./component/add-habit-form"
import HabitList from "./component/habit-list"
import useHabitStore from "./store/store";
import { useEffect } from "react";


function App() {
  const {fetchHabits} = useHabitStore();
  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">Habit Tracker

        </Typography>
        {/* Form */}
        <AddHabitForm />
        {/* Habit List */}
        <HabitList />
      </Box>

    </Container>
  )
}

export default App

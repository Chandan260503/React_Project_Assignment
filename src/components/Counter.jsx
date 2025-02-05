import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const handleReset = () => setCount(0);

  const backgroundLevel = `rgba(33, 150, 243, ${Math.min(count / 10, 1)})`; // Max opacity at 10

  return (
    <motion.div
      initial={{ backgroundColor: "rgba(33, 150, 243, 0)" }}
      animate={{ backgroundColor: backgroundLevel }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          Count: {count}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleIncrement}
          sx={{ m: 1 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDecrement}
          sx={{ m: 1 }}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleReset}
          sx={{ m: 1 }}
        >
          Reset
        </Button>
      </Box>
    </motion.div>
  );
};

export default Counter;

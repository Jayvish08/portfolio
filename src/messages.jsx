import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

export default function Messages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Detect page refresh and redirect to Portfolio ("/")
  useEffect(() => {
    const isRefreshed = sessionStorage.getItem("refreshed");

    if (isRefreshed === "true") {
      sessionStorage.removeItem("refreshed"); // Clear flag
      navigate("/"); // Redirect to Portfolio
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("refreshed", "true"); // Set flag before refresh
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        sessionStorage.setItem("refreshed", "true");
      });
    };
  }, [navigate]);

  // Fetch messages and reverse the order
  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.reverse()); // Reverse the order before setting state
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch messages. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ p: 3 }}>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {messages.map((msg, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6">{msg.name}</Typography>
              <Typography variant="body2" color="textSecondary">{msg.email}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>{msg.message}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
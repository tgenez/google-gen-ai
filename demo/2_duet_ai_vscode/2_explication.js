
const express = require('express');
const app = express();
const port = 3000;

// Define an empty array to store banks
let banks = [];

// Middleware to parse incoming JSON data
app.use(express.json());

// Create a bank (POST request)
app.post('/banks', (req, res) => {
  const newBank = req.body;
  banks.push(newBank);
  res.status(201).json({ message: 'Bank created successfully', bank: newBank });
});

// Read all banks (GET request)
app.get('/banks', (req, res) => {
  res.json(banks);
});

// Read a specific bank (GET request with ID)
app.get('/banks/:id', (req, res) => {
  const { id } = req.params;
  const foundBank = banks.find(bank => bank.id === id);
  if (foundBank) {
    res.json(foundBank);
  } else {
    res.status(404).json({ message: 'Bank not found' });
  }
});

// Update a specific bank (PUT request with ID)
app.put('/banks/:id', (req, res) => {
  const { id } = req.params;
  const updatedBank = req.body;
  const bankIndex = banks.findIndex(bank => bank.id === id);
  if (bankIndex !== -1) {
    banks[bankIndex] = updatedBank;
    res.json({ message: 'Bank updated successfully', bank: updatedBank });
  } else {
    res.status(404).json({ message: 'Bank not found' });
  }
});

// Delete a specific bank (DELETE request with ID)
app.delete('/banks/:id', (req, res) => {
  const { id } = req.params;
  const bankIndex = banks.findIndex(bank => bank.id === id);
  if (bankIndex !== -1) {
    banks.splice(bankIndex, 1);
    res.json({ message: 'Bank deleted successfully' });
  } else {
    res.status(404).json({ message: 'Bank not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
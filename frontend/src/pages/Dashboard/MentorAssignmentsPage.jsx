import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Modal,
  Rating,
  IconButton,
  Tooltip,
  Paper
} from '@mui/material';
import { Search as SearchIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';

const MentorAssignmentsPage = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [mentorFilter, setMentorFilter] = useState('');

  const mentors = [
    { id: 1, name: 'John Doe', expertise: 'Business Strategy', experience: '10 years', available: true },
    { id: 2, name: 'Jane Smith', expertise: 'Tech Innovation', experience: '8 years', available: false },
    // Add more mentor data
  ];

  const startups = [
    { id: 1, name: 'Tech Innovators', stage: 'Validation', industry: 'AI', needs: 'Business Strategy' },
    { id: 2, name: 'Green Energy', stage: 'Scaling', industry: 'Renewable Energy', needs: 'Tech Innovation' },
    // Add more startup data
  ];

  const handleMentorAssignment = (mentor, startup) => {
    // Logic for assigning mentor to startup
    alert(`${mentor.name} assigned to ${startup.name}`);
  };

  const openFeedbackModal = () => setFeedbackOpen(true);
  const closeFeedbackModal = () => setFeedbackOpen(false);

  return (
    <Box sx={{ padding: '24px' }}>
      {/* Page Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <Typography variant="h4" color="primary">Mentor Assignments</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            placeholder="Search mentors..."
            sx={{ marginRight: 2 }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: 1 }} />
            }}
          />
          <FormControl variant="outlined">
            <InputLabel>Filter by Expertise</InputLabel>
            <Select
              value={mentorFilter}
              onChange={(e) => setMentorFilter(e.target.value)}
              label="Filter by Expertise"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Business Strategy">Business Strategy</MenuItem>
              <MenuItem value="Tech Innovation">Tech Innovation</MenuItem>
              {/* Add more filters */}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Mentor Table */}
      <Typography variant="h5" color="secondary" gutterBottom>Available Mentors</Typography>
      <TableContainer component={Paper} sx={{ marginBottom: '24px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Expertise</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mentors.filter(mentor => mentorFilter ? mentor.expertise === mentorFilter : true).map((mentor) => (
              <TableRow key={mentor.id}>
                <TableCell>{mentor.name}</TableCell>
                <TableCell>{mentor.expertise}</TableCell>
                <TableCell>{mentor.experience}</TableCell>
                <TableCell sx={{ color: mentor.available ? 'green' : 'red' }}>
                  {mentor.available ? 'Available' : 'Assigned'}
                </TableCell>
                <TableCell>
                  {mentor.available && (
                    <Tooltip title="Assign to Startup">
                      <IconButton
                        color="primary"
                        onClick={() => setSelectedMentor(mentor)}
                      >
                        <PersonAddIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Startup Table */}
      <Typography variant="h5" color="secondary" gutterBottom>Startups Seeking Mentors</Typography>
      <TableContainer component={Paper} sx={{ marginBottom: '24px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Needs</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {startups.map((startup) => (
              <TableRow key={startup.id}>
                <TableCell>{startup.name}</TableCell>
                <TableCell>{startup.stage}</TableCell>
                <TableCell>{startup.industry}</TableCell>
                <TableCell>{startup.needs}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleMentorAssignment(selectedMentor, startup)}
                    disabled={!selectedMentor}
                  >
                    Assign Mentor
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Feedback Modal */}
      <Modal open={feedbackOpen} onClose={closeFeedbackModal}>
        <Box sx={{ padding: '24px', backgroundColor: 'white', boxShadow: 24, maxWidth: '500px', margin: 'auto' }}>
          <Typography variant="h6" gutterBottom>Provide Feedback</Typography>
          <TextField
            label="Feedback"
            multiline
            rows={4}
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            sx={{ marginBottom: '16px' }}
          />
          <Rating name="mentor-feedback" value={4} onChange={() => {}} />
          <Button variant="contained" color="primary" onClick={closeFeedbackModal} sx={{ marginTop: '16px' }}>
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Feedback Button */}
      <Button variant="outlined" color="primary" onClick={() => setFeedbackOpen(true)}>
        Provide Feedback
      </Button>
    </Box>
  );
};

export default MentorAssignmentsPage;

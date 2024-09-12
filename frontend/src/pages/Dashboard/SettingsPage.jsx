import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Button,
  Paper,
  Divider,
  Modal,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Save as SaveIcon, Feedback as FeedbackIcon, Lock as LockIcon } from '@mui/icons-material';

const SettingsPage = () => {
  const [notificationSetting, setNotificationSetting] = useState('Email');
  const [platformName, setPlatformName] = useState('Gujarat Startups & Innovation Platform');
  const [theme, setTheme] = useState('Light');
  const [userName, setUserName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);

  const handleSaveChanges = () => {
    // Logic to save changes
    alert('Settings have been saved');
  };

  const openFeedbackModal = () => setFeedbackOpen(true);
  const closeFeedbackModal = () => setFeedbackOpen(false);

  const openPasswordModal = () => setPasswordOpen(true);
  const closePasswordModal = () => setPasswordOpen(false);

  return (
    <Box sx={{ padding: '24px', maxWidth: '1200px', margin: 'auto' }}>
      <Typography variant="h4" color="primary" gutterBottom>Settings</Typography>

      {/* Profile Management */}
      <Paper sx={{ padding: '24px', marginBottom: '24px' }}>
        <Typography variant="h6" color="secondary" gutterBottom>Profile Management</Typography>
        <TextField
          label="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <Button
          variant="outlined"
          color="primary"
          startIcon={<LockIcon />}
          onClick={openPasswordModal}
        >
          Change Password
        </Button>
      </Paper>

      {/* Platform Settings */}
      <Paper sx={{ padding: '24px', marginBottom: '24px' }}>
        <Typography variant="h6" color="secondary" gutterBottom>Platform Settings</Typography>
        <TextField
          label="Platform Name"
          value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel>Theme</InputLabel>
          <Select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            label="Theme"
          >
            <MenuItem value="Light">Light</MenuItem>
            <MenuItem value="Dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* Notification Settings */}
      <Paper sx={{ padding: '24px', marginBottom: '24px' }}>
        <Typography variant="h6" color="secondary" gutterBottom>Notification Settings</Typography>
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel>Preferred Notification Method</InputLabel>
          <Select
            value={notificationSetting}
            onChange={(e) => setNotificationSetting(e.target.value)}
            label="Preferred Notification Method"
          >
            <MenuItem value="Email">Email</MenuItem>
            <MenuItem value="SMS">SMS</MenuItem>
            <MenuItem value="Push Notification">Push Notification</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" color="textSecondary" sx={{ marginRight: '16px' }}>Enable Notifications</Typography>
          <Switch checked={true} onChange={() => { /* Handle switch change */ }} />
        </Box>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </Box>

      {/* Change Password Modal */}
      <Modal open={passwordOpen} onClose={closePasswordModal}>
        <Box sx={{ padding: '24px', backgroundColor: 'white', boxShadow: 24, maxWidth: '500px', margin: 'auto' }}>
          <Typography variant="h6" gutterBottom>Change Password</Typography>
          <TextField
            label="Current Password"
            type="password"
            fullWidth
            sx={{ marginBottom: '16px' }}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            sx={{ marginBottom: '16px' }}
          />
          <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
            sx={{ marginBottom: '16px' }}
          />
          <Button variant="contained" color="primary" onClick={closePasswordModal} sx={{ marginTop: '16px' }}>
            Change Password
          </Button>
        </Box>
      </Modal>

      {/* Feedback Modal */}
      <Modal open={feedbackOpen} onClose={closeFeedbackModal}>
        <Box sx={{ padding: '24px', backgroundColor: 'white', boxShadow: 24, maxWidth: '500px', margin: 'auto' }}>
          <Typography variant="h6" gutterBottom>Provide Feedback</Typography>
          <TextField
            label="Feedback"
            multiline
            rows={4}
            fullWidth
            sx={{ marginBottom: '16px' }}
          />
          <Button variant="contained" color="primary" onClick={closeFeedbackModal} sx={{ marginTop: '16px' }}>
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Feedback Button */}
      <Tooltip title="Provide Feedback">
        <IconButton
          color="primary"
          onClick={openFeedbackModal}
          sx={{ position: 'fixed', bottom: '16px', right: '16px' }}
        >
          <FeedbackIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SettingsPage;

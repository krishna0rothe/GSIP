import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Toolbar,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Download as DownloadIcon } from "@mui/icons-material";

// Placeholder data for resources
const resourcesData = [
  { name: "Resource A", startup: "Startup X", amount: "₹500,000", date: "2023-05-12", status: "Approved" },
  { name: "Resource B", startup: "Startup Y", amount: "₹250,000", date: "2023-04-22", status: "Pending" },
  { name: "Resource C", startup: "Startup Z", amount: "₹1,000,000", date: "2023-03-30", status: "Rejected" },
];

// Color theme (from DashboardHomePage)
const themeColors = {
  primary: "#1E88E5",
  secondary: "#F5F5F5",
  textPrimary: "#212121",
  textSecondary: "#757575",
  background: "#F9F9F9",
  success: "#4CAF50",
  pending: "#FF9800",
  rejected: "#F44336",
};

// Resource Management Page Component
const ResourceManagementPage = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedResource, setSelectedResource] = React.useState(null);

  const handleOpenDialog = (resource) => {
    setSelectedResource(resource);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedResource(null);
  };

  return (
    <Box sx={{ backgroundColor: themeColors.background, padding: 3 }}>
      {/* Header Section */}
      <Typography variant="h4" color={themeColors.textPrimary} gutterBottom>
        Resource Management
      </Typography>
      <Typography variant="subtitle1" color={themeColors.textSecondary} gutterBottom>
        Manage and allocate resources to startups.
      </Typography>

      {/* Summary Cards Section */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: themeColors.primary, color: "white" }}>
            <CardContent>
              <Typography variant="h6">Total Resources</Typography>
              <Typography variant="h4">₹5,000,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: themeColors.success, color: "white" }}>
            <CardContent>
              <Typography variant="h6">Allocated Resources</Typography>
              <Typography variant="h4">₹3,500,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: themeColors.secondary }}>
            <CardContent>
              <Typography variant="h6" color={themeColors.textPrimary}>
                Available Resources
              </Typography>
              <Typography variant="h4" color={themeColors.textPrimary}>
                ₹1,500,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Resource Allocation Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Resource Name</TableCell>
              <TableCell>Startup</TableCell>
              <TableCell>Amount Allocated</TableCell>
              <TableCell>Date Allocated</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resourcesData.map((resource, index) => (
              <TableRow key={index}>
                <TableCell>{resource.name}</TableCell>
                <TableCell>{resource.startup}</TableCell>
                <TableCell>{resource.amount}</TableCell>
                <TableCell>{resource.date}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color:
                        resource.status === "Approved"
                          ? themeColors.success
                          : resource.status === "Pending"
                          ? themeColors.pending
                          : themeColors.rejected,
                    }}
                  >
                    {resource.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit Resource">
                    <IconButton onClick={() => handleOpenDialog(resource)}>
                      <EditIcon sx={{ color: themeColors.textPrimary }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Resource">
                    <IconButton>
                      <DeleteIcon sx={{ color: themeColors.rejected }} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: themeColors.primary, color: "white", marginRight: 2 }}
          startIcon={<AddIcon />}
        >
          Allocate New Resource
        </Button>
        <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ color: themeColors.primary }}>
          Generate Report
        </Button>
      </Box>

      {/* Dialog for Editing Resource */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Resource</DialogTitle>
        <DialogContent>
          <TextField
            label="Resource Name"
            fullWidth
            margin="normal"
            value={selectedResource?.name || ""}
            disabled
          />
          <TextField label="Startup" fullWidth margin="normal" value={selectedResource?.startup || ""} disabled />
          <TextField label="Amount Allocated" fullWidth margin="normal" value={selectedResource?.amount || ""} />
          <TextField label="Status" fullWidth margin="normal" value={selectedResource?.status || ""} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: themeColors.rejected }}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: themeColors.success, color: "white" }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResourceManagementPage;

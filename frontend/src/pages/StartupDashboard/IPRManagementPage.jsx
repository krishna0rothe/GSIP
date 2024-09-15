import React, { useState } from 'react'
import { X, Edit, Trash2, Plus, FileText, AlertCircle, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Dummy data for IPR filings from Gujarat startups
const iprFilings = [
  { id: 'IPR001', title: 'Smart Irrigation System', type: 'Patent', status: 'Approved', filingDate: '2023-03-15', description: 'An AI-powered irrigation system designed for Gujarat\'s arid climate.' },
  { id: 'IPR002', title: 'GujaratTech', type: 'Trademark', status: 'In Review', filingDate: '2023-05-22', description: 'A trademark for Gujarat\'s emerging tech hub initiative.' },
  { id: 'IPR003', title: 'Solar-Powered Desalination', type: 'Patent', status: 'Filed', filingDate: '2023-04-10', description: 'Efficient desalination technology for Gujarat\'s coastal regions.' },
  { id: 'IPR004', title: 'Automated Cotton Picking Robot', type: 'Patent', status: 'Approved', filingDate: '2023-02-28', description: 'Robotic system for efficient cotton harvesting in Gujarat\'s fields.' },
  { id: 'IPR005', title: 'Gujarat Green Energy', type: 'Trademark', status: 'Rejected', filingDate: '2023-06-05', description: 'Branding for Gujarat\'s renewable energy initiatives.' },
  // Add more dummy data as needed
]

const filingTrends = [
  { month: 'Jan', filings: 2 },
  { month: 'Feb', filings: 3 },
  { month: 'Mar', filings: 5 },
  { month: 'Apr', filings: 4 },
  { month: 'May', filings: 6 },
  { month: 'Jun', filings: 4 },
]

const filingTypes = [
  { name: 'Patents', value: 15 },
  { name: 'Trademarks', value: 8 },
]

const approvalStatus = [
  { status: 'Filed', count: 10 },
  { status: 'In Review', count: 5 },
  { status: 'Approved', count: 6 },
  { status: 'Rejected', count: 2 },
]

export default function IPRManagementPage() {
  const [selectedIPR, setSelectedIPR] = useState(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState({ field: 'filingDate', order: 'desc' })
  const itemsPerPage = 5

  const filteredIPR = iprFilings.filter(ipr => 
    ipr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ipr.id.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (a[sortBy.field] < b[sortBy.field]) return sortBy.order === 'asc' ? -1 : 1
    if (a[sortBy.field] > b[sortBy.field]) return sortBy.order === 'asc' ? 1 : -1
    return 0
  })

  const pageCount = Math.ceil(filteredIPR.length / itemsPerPage)
  const paginatedIPR = filteredIPR.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (field) => {
    setSortBy(prev => ({
      field,
      order: prev.field === field && prev.order === 'asc' ? 'desc' : 'asc'
    }))
  }

  const openDetailView = (ipr) => {
    setSelectedIPR(ipr)
  }

  const closeDetailView = () => {
    setSelectedIPR(null)
  }

  const handleAddNew = (e) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsAddingNew(false)
    // Add success notification logic here
  }

  const handleEdit = (e) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setSelectedIPR(null)
    // Add success notification logic here
  }

  const handleDelete = () => {
    // In a real application, you would handle the deletion here
    setSelectedIPR(null)
    // Add success notification logic here
  }

  return (
    <div className="ipr-management">
      <main className="main-content">
        <section className="overview">
          <h1>IPR Management Dashboard</h1>
          <div className="metrics">
            <div className="metric">
              <span className="metric-value">{iprFilings.length}</span>
              <span className="metric-label">Total Filings</span>
            </div>
            <div className="metric">
              <span className="metric-value">{iprFilings.filter(ipr => ipr.status === 'Approved').length}</span>
              <span className="metric-label">Approved</span>
            </div>
            <div className="metric">
              <span className="metric-value">{iprFilings.filter(ipr => ipr.status === 'In Review').length}</span>
              <span className="metric-label">In Review</span>
            </div>
            <div className="metric">
              <span className="metric-value">{iprFilings.filter(ipr => ipr.status === 'Filed').length}</span>
              <span className="metric-label">Filed</span>
            </div>
          </div>
        </section>

        <section className="ipr-table">
          <div className="table-header">
            <div className="search-bar">
              <Search className="icon" />
              <input 
                type="text" 
                placeholder="Search IPR filings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="button button-primary" onClick={() => setIsAddingNew(true)}>
              <Plus className="icon" /> Add New Filing
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>Filing ID</th>
                <th onClick={() => handleSort('title')}>Title</th>
                <th onClick={() => handleSort('type')}>Type</th>
                <th onClick={() => handleSort('status')}>Status</th>
                <th onClick={() => handleSort('filingDate')}>Date Filed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedIPR.map((filing) => (
                <tr key={filing.id}>
                  <td>{filing.id}</td>
                  <td>{filing.title}</td>
                  <td>{filing.type}</td>
                  <td>
                    <span className={`status status-${filing.status.toLowerCase()}`}>
                      {filing.status}
                    </span>
                  </td>
                  <td>{filing.filingDate}</td>
                  <td>
                    <button className="button button-secondary" onClick={() => openDetailView(filing)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="icon" />
            </button>
            <span>{currentPage} of {pageCount}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
              disabled={currentPage === pageCount}
            >
              <ChevronRight className="icon" />
            </button>
          </div>
        </section>

        <section className="charts">
          <div className="chart">
            <h3>Filing Trends</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={filingTrends}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="filings" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <h3>Filing Types</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={filingTypes} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <h3>Approval Status</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={approvalStatus}>
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>

      {selectedIPR && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeDetailView}>
              <X className="icon" />
            </button>
            <h2>IPR Filing Details</h2>
            <div className="ipr-details">
              <p><strong>Filing ID:</strong> {selectedIPR.id}</p>
              <p><strong>Title:</strong> {selectedIPR.title}</p>
              <p><strong>Type:</strong> {selectedIPR.type}</p>
              <p><strong>Status:</strong> 
                <span className={`status status-${selectedIPR.status.toLowerCase()}`}>
                  {selectedIPR.status}
                </span>
              </p>
              <p><strong>Description:</strong> {selectedIPR.description}</p>
              <p><strong>Filing Date:</strong> {selectedIPR.filingDate}</p>
              <p><strong>Next Steps:</strong> Follow up with legal team for further processing.</p>
              <p><strong>Attached Documents:</strong> application_form.pdf, correspondence.pdf</p>
            </div>
            <div className="modal-actions">
              <button className="button button-secondary" onClick={() => {/* Implement edit logic */}}>
                <Edit className="icon" /> Edit Filing
              </button>
              <button className="button button-danger" onClick={handleDelete}>
                <Trash2 className="icon" /> Delete Filing
              </button>
              <button className="button button-secondary">
                <FileText className="icon" /> Attach Document
              </button>
              <button className="button button-secondary">
                Contact Legal Advisor
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddingNew && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setIsAddingNew(false)}>
              <X className="icon" />
            </button>
            <h2>Add New IPR Filing</h2>
            <form onSubmit={handleAddNew}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" required />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select id="type" required>
                  <option value="">Select Type</option>
                  <option value="Patent">Patent</option>
                  <option value="Trademark">Trademark</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="filingDate">Date Filed</label>
                <input type="date" id="filingDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="documents">Upload Documents</label>
                <input type="file" id="documents" multiple />
              </div>
              <div className="modal-actions">
                <button type="submit" className="button button-primary">Submit Filing</button>
                <button type="button" className="button button-secondary" onClick={() => setIsAddingNew(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .ipr-management {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          padding: 24px;
          color: #333;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 24px;
          color: #1a202c;
        }

        .metrics {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .metric {
          background-color: white;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex: 1;
          margin-right: 16px;
        }

        .metric:last-child {
          margin-right: 0;
        }

        .metric-value {
          font-size: 24px;
          font-weight: bold;
          color: #3B82F6;
          display: block;
        }

        .metric-label {
          font-size: 14px;
          color: #6B7280;
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background-color: white;
          border-radius: 4px;
          padding: 8px 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .search-bar input {
          border: none;
          outline: none;
          margin-left: 8px;
          font-size: 14px;
        }

        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        th, td {
          padding: 12px 16px;
          text-align: left;
        }

        th {
          background-color: #F3F4F6;
          font-weight: bold;
          color: #4B5563;
          cursor: pointer;
        }

        th:hover {
          background-color: #E5E7EB;
        }

        tr:nth-child(even) {
          background-color: #F9FAFB;
        }

        .status {
          font-size: 12px;
          font-weight: bold;
          padding: 4px 8px;
          border-radius: 12px;
        }

        .status-approved {
          background-color: #D1FAE5;
          color: #065F46;
        }

        .status-in-review {
          background-color: #FEF3C7;
          color: #92400E;
        }

        .status-filed {
          background-color: #DBEAFE;
          color: #1E40AF;
        }

        .status-rejected {
          background-color: #FEE2E2;
          color: #991B1B;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
        }

        .pagination button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .pagination span {
          margin: 0 16px;
        }

        .charts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .chart {
          background-color: white;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .chart h3 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
          color: #4B5563;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background-color: white;
          border-radius: 8px;
          padding: 24px;
          width: 500px;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 24px;
          color: #6B7280;
        }

        .modal h2 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 16px;
          color: #1a202c;
        }

        .ipr-details p {
          margin-bottom: 8px;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 24px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .button-primary {
          background-color: #3B82F6;
          color: white;
          border: none;
        }

        .button-primary:hover {
          background-color: #2563EB;
        }

        .button-secondary {
          background-color: #E5E7EB;
          color: #374151;
          border: none;
          margin-left: 8px;
        }

        .button-secondary:hover {
          background-color: #D1D5DB;
        }

        .button-danger {
          background-color: #EF4444;
          color: white;
          border: none;
          margin-left: 8px;
        }

        .button-danger:hover {
          background-color: #DC2626;
        }

        .icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        label {
          display: block;
          margin-bottom: 4px;
          font-weight: bold;
          color: #4B5563;
        }

        input[type="text"],
        input[type="date"],
        select,
        textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #D1D5DB;
          border-radius: 4px;
          font-size: 14px;
        }

        textarea {
          height: 100px;
          resize: vertical;
        }
      `}</style>
    </div>
  )
}
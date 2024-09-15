import React, { useState } from 'react'
import { Calendar, Mail, Phone, Clock, ChevronRight, Star, Search, Filter, X } from 'lucide-react'

const mentors = [
  {
    id: 1,
    name: 'Dr. Priya Patel',
    image: '/placeholder.svg?height=100&width=100',
    expertise: ['AI', 'Machine Learning', 'Data Science'],
    status: 'Available',
    startDate: '2023-01-15',
    bio: 'Dr. Priya Patel is a renowned AI researcher with over 15 years of experience in the field. She has helped numerous startups implement cutting-edge AI solutions.',
    email: 'priya.patel@example.com',
    phone: '+91 98765 43210',
  },
  {
    id: 2,
    name: 'Rajesh Sharma',
    image: '/placeholder.svg?height=100&width=100',
    expertise: ['Venture Capital', 'Startup Funding', 'Financial Planning'],
    status: 'Busy',
    startDate: '2023-02-01',
    bio: 'Rajesh Sharma is a veteran in the VC world, with a portfolio of successful investments in Gujarat-based startups. He specializes in early-stage funding and financial strategy.',
    email: 'rajesh.sharma@example.com',
    phone: '+91 98765 12345',
  },
  {
    id: 3,
    name: 'Anita Desai',
    image: '/placeholder.svg?height=100&width=100',
    expertise: ['Product Development', 'UX Design', 'Go-to-Market Strategy'],
    status: 'On Leave',
    startDate: '2023-03-10',
    bio: 'Anita Desai brings years of product management experience from Silicon Valley. She has a keen eye for user-centric design and has launched several successful products.',
    email: 'anita.desai@example.com',
    phone: '+91 98765 67890',
  },
]

const mentorshipHistory = [
  { id: 1, date: '2023-06-15', mentorName: 'Dr. Priya Patel', topic: 'AI Implementation Strategies', outcome: 'Identified key areas for AI integration' },
  { id: 2, date: '2023-06-02', mentorName: 'Rajesh Sharma', topic: 'Funding Pitch Preparation', outcome: 'Refined pitch deck and financial projections' },
  { id: 3, date: '2023-05-20', mentorName: 'Anita Desai', topic: 'Product Roadmap Review', outcome: 'Prioritized feature development for next quarter' },
]

export default function MentorshipPage() {
  const [selectedMentor, setSelectedMentor] = useState(null)
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)

  const openMentorDetails = (mentor) => {
    setSelectedMentor(mentor)
  }

  const closeMentorDetails = () => {
    setSelectedMentor(null)
  }

  const openRequestModal = () => {
    setIsRequestModalOpen(true)
  }

  const closeRequestModal = () => {
    setIsRequestModalOpen(false)
  }

  return (
    <div className="mentorship-page">
      <header className="header">
        <div>
          <h1 className="page-title">Mentorship</h1>
          <p className="breadcrumbs">Home &gt; Dashboard &gt; Mentorship</p>
        </div>
      </header>

      <main className="main-content">
        <section className="mentor-summary">
          <h2>Your Mentors</h2>
          <div className="mentor-cards">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="mentor-card" onClick={() => openMentorDetails(mentor)}>
                <img src={mentor.image} alt={mentor.name} className="mentor-avatar" />
                <h3>{mentor.name}</h3>
                <p className="expertise">{mentor.expertise.join(', ')}</p>
                <p className={`status status-${mentor.status.toLowerCase().replace(' ', '-')}`}>{mentor.status}</p>
                <p className="start-date">Since: {mentor.startDate}</p>
                <button className="button button-primary" disabled={mentor.status !== 'Available'}>
                  Request Session
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mentorship-requests">
          <h2>Mentorship Requests</h2>
          <div className="request-cards">
            <div className="request-card pending">
              <h3>Pending Request</h3>
              <p>Mentor: Dr. Priya Patel</p>
              <p>Topic: AI Strategy Discussion</p>
              <p className="status">Status: Pending</p>
            </div>
            <div className="request-card new-request" onClick={openRequestModal}>
              <h3>Request New Mentorship</h3>
              <p>Click to submit a new mentorship request</p>
              <button className="button button-secondary">New Request</button>
            </div>
          </div>
        </section>

        <section className="mentorship-history">
          <h2>Mentorship History</h2>
          <div className="table-controls">
            <div className="search-bar">
              <Search className="icon" />
              <input type="text" placeholder="Search sessions..." />
            </div>
            <button className="button button-secondary">
              <Filter className="icon" /> Filter
            </button>
          </div>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Mentor</th>
                <th>Topic</th>
                <th>Outcome</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mentorshipHistory.map((session) => (
                <tr key={session.id}>
                  <td>{session.date}</td>
                  <td>{session.mentorName}</td>
                  <td>{session.topic}</td>
                  <td>{session.outcome}</td>
                  <td>
                    <button className="button button-text">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {selectedMentor && (
        <div className="modal-overlay">
          <div className="modal mentor-details-modal">
            <button className="close-button" onClick={closeMentorDetails}>
              <X className="icon" />
            </button>
            <img src={selectedMentor.image} alt={selectedMentor.name} className="mentor-avatar large" />
            <h2>{selectedMentor.name}</h2>
            <p className="expertise">{selectedMentor.expertise.join(', ')}</p>
            <p className="bio">{selectedMentor.bio}</p>
            <div className="contact-info">
              <p><Mail className="icon" /> {selectedMentor.email}</p>
              <p><Phone className="icon" /> {selectedMentor.phone}</p>
            </div>
            <div className="session-info">
              <h3>Upcoming Sessions</h3>
              <p>No upcoming sessions scheduled</p>
              <h3>Recent Interactions</h3>
              <ul className="interaction-list">
                <li>
                  <Clock className="icon" />
                  <span>AI Strategy Discussion (2023-06-15)</span>
                </li>
                <li>
                  <Clock className="icon" />
                  <span>Product Roadmap Review (2023-05-20)</span>
                </li>
              </ul>
            </div>
            <button className="button button-primary">Request a Session</button>
          </div>
        </div>
      )}

      {isRequestModalOpen && (
        <div className="modal-overlay">
          <div className="modal request-modal">
            <button className="close-button" onClick={closeRequestModal}>
              <X className="icon" />
            </button>
            <h2>Request New Mentorship</h2>
            <form>
              <div className="form-group">
                <label htmlFor="mentor">Select Mentor</label>
                <select id="mentor" required>
                  <option value="">Choose a mentor</option>
                  {mentors.map((mentor) => (
                    <option key={mentor.id} value={mentor.id}>{mentor.name} - {mentor.expertise.join(', ')}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="topic">Topic or Guidance Area</label>
                <input type="text" id="topic" required placeholder="e.g., AI Implementation, Funding Strategy" />
              </div>
              <div className="form-group">
                <label htmlFor="preferred-time">Preferred Meeting Time</label>
                <input type="datetime-local" id="preferred-time" required />
              </div>
              <div className="form-group">
                <label htmlFor="additional-info">Additional Information</label>
                <textarea id="additional-info" rows={4} placeholder="Provide any context or specific questions for the mentor"></textarea>
              </div>
              <button type="submit" className="button button-primary">Submit Request</button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .mentorship-page {
          font-family: 'Roboto', sans-serif;
          color: #333;
          background-color: #f5f5f5;
          min-height: 100vh;
        }

        .header {
          background-color: #fff;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .page-title {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }

        .breadcrumbs {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        h2 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .mentor-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .mentor-card {
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.2s;
          cursor: pointer;
        }

        .mentor-card:hover {
          transform: translateY(-5px);
        }

        .mentor-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .mentor-avatar.large {
          width: 120px;
          height: 120px;
        }

        .expertise {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }

        .status {
          font-size: 12px;
          font-weight: bold;
          padding: 3px 8px;
          border-radius: 12px;
          display: inline-block;
        }

        .status-available {
          background-color: #e6f7ed;
          color: #0e6245;
        }

        .status-busy {
          background-color: #fff0e6;
          color: #b54708;
        }

        .status-on-leave {
          background-color: #f3e8ff;
          color: #6b21a8;
        }

        .start-date {
          font-size: 12px;
          color: #666;
          margin-top: 5px;
        }

        .button {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .button-primary {
          background-color: #3b82f6;
          color: #fff;
          border: none;
        }

        .button-primary:hover {
          background-color: #2563eb;
        }

        .button-secondary {
          background-color: #e5e7eb;
          color: #374151;
          border: none;
        }

        .button-secondary:hover {
          background-color: #d1d5db;
        }

        .button-text {
          background: none;
          border: none;
          color: #3b82f6;
          padding: 0;
        }

        .button-text:hover {
          text-decoration: underline;
        }

        .request-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .request-card {
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .request-card.pending {
          border-left: 4px solid #f59e0b;
        }

        .request-card.new-request {
          border: 2px dashed #d1d5db;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .table-controls {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 4px;
          padding: 5px 10px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .search-bar input {
          border: none;
          outline: none;
          padding: 5px;
          font-size: 14px;
        }

        .history-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .history-table th,
        .history-table td {
          padding: 12px 15px;
          text-align: left;
        }

        .history-table th {
          background-color: #f3f4f6;
          font-weight: bold;
          color: #374151;
        }

        .history-table tr:nth-child(even) {
          background-color: #f9fafb;
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
          background-color: #fff;
          border-radius: 8px;
          padding: 30px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
        }

        .contact-info {
          margin-top: 20px;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .session-info {
          margin-top: 20px;
        }

        .interaction-list {
          list-style-type: none;
          padding: 0;
        }

        .interaction-list li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .icon {
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 14px;
        }

        .form-group textarea {
          resize: vertical;
        }
      `}</style>
    </div>
  )
}
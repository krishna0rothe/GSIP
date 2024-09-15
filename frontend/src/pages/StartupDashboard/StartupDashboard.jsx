import React from 'react'
import { Edit, Plus, ChevronRight, Check, Clock, BarChart2, PieChart, TrendingUp, FileText } from "lucide-react"
import { BarChart, Bar, PieChart as RePieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const performanceData = [
  { name: 'Jan', revenue: 4000, users: 2400, market: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398, market: 2210 },
  { name: 'Mar', revenue: 2000, users: 9800, market: 2290 },
  { name: 'Apr', revenue: 2780, users: 3908, market: 2000 },
  { name: 'May', revenue: 1890, users: 4800, market: 2181 },
  { name: 'Jun', revenue: 2390, users: 3800, market: 2500 },
]

const fundingData = [
  { name: 'Government', value: 400 },
  { name: 'Private', value: 300 },
  { name: 'Angel Investors', value: 300 },
]

const mentorInteractionsData = [
  { name: 'Jan', interactions: 4 },
  { name: 'Feb', interactions: 3 },
  { name: 'Mar', interactions: 5 },
  { name: 'Apr', interactions: 7 },
  { name: 'May', interactions: 2 },
  { name: 'Jun', interactions: 6 },
]

const iprFilingsData = [
  { name: 'Jan', filings: 1 },
  { name: 'Feb', filings: 0 },
  { name: 'Mar', filings: 2 },
  { name: 'Apr', filings: 1 },
  { name: 'May', filings: 3 },
  { name: 'Jun', filings: 2 },
]

export default function StartupDashboard() {
  return (
    <div className="dashboard">
      <div className="notification-banner">
        <p>New mentor response received. IPR filing status updated. Funding request approved.</p>
      </div>

      <main className="main-content">
        <div className="grid">
          <div className="card">
            <h3 className="card-title">Progress Tracker</h3>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '60%' }}></div>
            </div>
            <div className="progress-stages">
              {["Ideation", "Prototype", "Funding", "Mentorship", "IPR"].map((stage, index) => (
                <div key={stage} className={`progress-stage ${index <= 2 ? "active" : ""}`}>
                  <div className="progress-stage-dot"></div>
                  <span className="progress-stage-label">{stage}</span>
                </div>
              ))}
            </div>
            <button className="button button-primary">Update Progress</button>
          </div>

          <div className="card">
            <h3 className="card-title">Funding Requests</h3>
            <ul className="list">
              {[
                { name: "Seed Round", status: "Approved", color: "green" },
                { name: "Series A", status: "In Review", color: "yellow" },
                { name: "Grant Application", status: "Submitted", color: "blue" },
              ].map((request) => (
                <li key={request.name} className="list-item">
                  <span>{request.name}</span>
                  <span className={`status status-${request.color}`}>{request.status}</span>
                </li>
              ))}
            </ul>
            <button className="button button-primary">Submit New Request</button>
          </div>

          <div className="card">
            <h3 className="card-title">Mentorship</h3>
            <div className="mentor-info">
              <h4 className="mentor-name">Dr. Emily Chen</h4>
              <p className="mentor-expertise">AI & Machine Learning Expert</p>
              <p className="mentor-meeting">Next Meeting: July 15, 2023</p>
            </div>
            <button className="button button-primary">Request Additional Mentorship</button>
          </div>

          <div className="card">
            <h3 className="card-title">IPR Filings</h3>
            <ul className="list">
              {[
                { name: "AI-Driven Analytics", status: "Approved", date: "2023-05-10" },
                { name: "SmartPredict Algorithm", status: "In Review", date: "2023-06-22" },
                { name: "DataSync Protocol", status: "Filed", date: "2023-07-01" },
              ].map((filing) => (
                <li key={filing.name} className="list-item">
                  <span>{filing.name}</span>
                  <span className="filing-status">{filing.status}</span>
                </li>
              ))}
            </ul>
            <button className="button button-primary">Submit New IPR Filing</button>
          </div>

          <div className="card">
            <h3 className="card-title">Recent Activity</h3>
            <ul className="list activity-list">
              {[
                { action: "Mentor assigned", time: "2 hours ago", icon: <Check className="icon icon-green" /> },
                { action: "Funding request submitted", time: "1 day ago", icon: <Clock className="icon icon-yellow" /> },
                { action: "IPR filing approved", time: "3 days ago", icon: <Check className="icon icon-green" /> },
              ].map((activity, index) => (
                <li key={index} className="list-item">
                  <span className="activity-info">
                    {activity.icon}
                    <span>{activity.action}</span>
                  </span>
                  <span className="activity-time">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-2-col">
          <div className="card">
            <h3 className="card-title">
              <BarChart2 className="icon icon-primary" />
              Startup Performance Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#3B82F6" />
                <Bar dataKey="users" fill="#10B981" />
                <Bar dataKey="market" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3 className="card-title">
              <PieChart className="icon icon-primary" />
              Funding Status
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={fundingData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#3B82F6"
                  dataKey="value"
                  label
                />
                <Tooltip />
                <Legend />
              </RePieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3 className="card-title">
              <TrendingUp className="icon icon-primary" />
              Mentor Interactions
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mentorInteractionsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="interactions" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3 className="card-title">
              <FileText className="icon icon-primary" />
              IPR Filings Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={iprFilingsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="filings" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      <style jsx>{`
        .dashboard {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f5f5f5;
          min-height: 100vh;
        }

        .notification-banner {
          background-color: #3B82F6;
          color: white;
          padding: 12px 24px;
          font-size: 14px;
        }

        .main-content {
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 24px;
        }

        .card {
          background-color: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .card-title {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
          margin: 0 0 16px;
          display: flex;
          align-items: center;
        }

        .button {
          width: 100%;
          padding: 10px 16px;
          border-radius: 20px;
          border: none;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .button-primary {
          background-color: #3B82F6;
          color: white;
        }

        .button-primary:hover {
          background-color: #2563EB;
        }

        .progress-bar {
          height: 4px;
          background-color: #E5E7EB;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: #3B82F6;
        }

        .progress-stages {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .progress-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .progress-stage-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #E5E7EB;
          margin-bottom: 4px;
        }

        .progress-stage.active .progress-stage-dot {
          background-color: #3B82F6;
        }

        .progress-stage-label {
          font-size: 12px;
          color: #666666;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
        }

        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #E5E7EB;
        }

        .list-item:last-child {
          border-bottom: none;
        }

        .status {
          font-size: 12px;
          font-weight: bold;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .status-green {
          background-color: #D1FAE5;
          color: #065F46;
        }

        .status-yellow {
          background-color: #FEF3C7;
          color: #92400E;
        }

        .status-blue {
          background-color: #DBEAFE;
          color: #1E40AF;
        }

        .mentor-info {
          margin-bottom: 16px;
        }

        .mentor-name {
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          margin: 0 0 4px;
        }

        .mentor-expertise, .mentor-meeting {
          font-size: 14px;
          color: #666666;
          margin: 0;
        }

        .filing-status {
          font-size: 12px;
          color: #666666;
        }

        .activity-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .activity-info {
          display: flex;
          align-items: center;
        }

        .activity-time {
          font-size: 12px;
          color: #666666;
        }

        .icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        .icon-primary {
          color: #3B82F6;
        }

        .icon-green {
          color: #10B981;
        }

        .icon-yellow {
          color: #F59E0B;
        }
      `}</style>
    </div>
  )
}
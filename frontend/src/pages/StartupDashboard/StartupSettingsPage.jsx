import React, { useState } from 'react'
import { Bell, Lock, Palette, Eye, EyeOff, Mail, Download, Trash2, Globe, Moon, Sun, ChevronRight } from 'lucide-react'

export default function StartupSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [darkMode, setDarkMode] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [profileData, setProfileData] = useState({
    name: 'TechInnovate Gujarat',
    description: 'AI-driven solutions for small businesses in Gujarat',
    industry: 'Technology',
    stage: 'Early Traction',
    foundingDate: '2022-05-15',
    logo: '/placeholder.svg?height=100&width=100',
  })
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Amit Patel', role: 'CEO', email: 'amit@techinnovate.com' },
    { name: 'Priya Shah', role: 'CTO', email: 'priya@techinnovate.com' },
  ])

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handleAddTeamMember = (e) => {
    e.preventDefault()
    const newMember = {
      name: e.target.name.value,
      role: e.target.role.value,
      email: e.target.email.value,
    }
    setTeamMembers([...teamMembers, newMember])
    e.target.reset()
  }

  const handleRemoveTeamMember = (index) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index))
  }

  const handleSaveChanges = () => {
    // In a real app, this would send the data to a server
    console.log('Saving changes:', profileData, teamMembers)
  }

  return (
    <div className={`settings-page ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>Settings</h1>
        <p className="breadcrumbs">Home &gt; Settings</p>
      </header>

      <nav className="tab-menu">
        <button
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Startup Profile
        </button>
        <button
          className={`tab-button ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          Account & Security
        </button>
        <button
          className={`tab-button ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          Platform Preferences
        </button>
        <button
          className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notification Settings
        </button>
        <button
          className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
          onClick={() => setActiveTab('privacy')}
        >
          Data & Privacy
        </button>
        <button
          className={`tab-button ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          Email Preferences
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'profile' && (
          <section className="profile-section">
            <h2>Startup Profile</h2>
            <div className="form-group">
              <label htmlFor="logo">Logo</label>
              <div className="logo-preview">
                <img src={profileData.logo} alt="Startup Logo" />
                <button className="button button-secondary">Change Logo</button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Startup Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={profileData.description}
                onChange={handleProfileChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <select
                id="industry"
                name="industry"
                value={profileData.industry}
                onChange={handleProfileChange}
              >
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="stage">Stage</label>
              <select
                id="stage"
                name="stage"
                value={profileData.stage}
                onChange={handleProfileChange}
              >
                <option value="Ideation">Ideation</option>
                <option value="Validation">Validation</option>
                <option value="Early Traction">Early Traction</option>
                <option value="Scaling">Scaling</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="foundingDate">Founding Date</label>
              <input
                type="date"
                id="foundingDate"
                name="foundingDate"
                value={profileData.foundingDate}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Team Members</label>
              <ul className="team-list">
                {teamMembers.map((member, index) => (
                  <li key={index} className="team-member">
                    <div>
                      <strong>{member.name}</strong> - {member.role}
                      <br />
                      <small>{member.email}</small>
                    </div>
                    <button
                      className="button button-danger"
                      onClick={() => handleRemoveTeamMember(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleAddTeamMember} className="add-member-form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="role" placeholder="Role" required />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit" className="button button-primary">
                  Add Member
                </button>
              </form>
            </div>
            <div className="form-actions">
              <button className="button button-primary" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="button button-secondary">Cancel</button>
            </div>
          </section>
        )}

        {activeTab === 'account' && (
          <section className="account-section">
            <h2>Account & Security</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value="founder@techinnovate.com" />
            </div>
            <div className="form-group">
              <label htmlFor="current-password">Current Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="current-password"
                  placeholder="Enter current password"
                />
                <button
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="icon" /> : <Eye className="icon" />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <input type="password" id="new-password" placeholder="Enter new password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm New Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm new password" />
            </div>
            <div className="form-group">
              <label htmlFor="two-factor">Two-Factor Authentication</label>
              <div className="toggle-switch">
                <input type="checkbox" id="two-factor" />
                <label htmlFor="two-factor"></label>
              </div>
            </div>
            <button className="button button-primary">Update Security Settings</button>
          </section>
        )}

        {activeTab === 'preferences' && (
          <section className="preferences-section">
            <h2>Platform Preferences</h2>
            <div className="form-group">
              <label htmlFor="theme">Theme</label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="theme"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <label htmlFor="theme"></label>
              </div>
              <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <select id="language">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="gu">Gujarati</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timezone">Time Zone</label>
              <select id="timezone">
                <option value="IST">India Standard Time (IST)</option>
                <option value="UTC">Coordinated Universal Time (UTC)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accessibility">Accessibility</label>
              <div className="checkbox-group">
                <input type="checkbox" id="high-contrast" />
                <label htmlFor="high-contrast">High Contrast Mode</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="large-text" />
                <label htmlFor="large-text">Large Text</label>
              </div>
            </div>
            <button className="button button-primary">Save Preferences</button>
          </section>
        )}

        {activeTab === 'notifications' && (
          <section className="notifications-section">
            <h2>Notification Settings</h2>
            <div className="form-group">
              <label htmlFor="funding-notifications">Funding Notifications</label>
              <div className="toggle-switch">
                <input type="checkbox" id="funding-notifications" defaultChecked />
                <label htmlFor="funding-notifications"></label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mentorship-updates">Mentorship Updates</label>
              <div className="toggle-switch">
                <input type="checkbox" id="mentorship-updates" defaultChecked />
                <label htmlFor="mentorship-updates"></label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="ipr-filings">IPR Filings</label>
              <div className="toggle-switch">
                <input type="checkbox" id="ipr-filings" defaultChecked />
                <label htmlFor="ipr-filings"></label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="platform-announcements">Platform Announcements</label>
              <div className="toggle-switch">
                <input type="checkbox" id="platform-announcements" defaultChecked />
                <label htmlFor="platform-announcements"></label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="milestone-alerts">Milestone Alerts</label>
              <div className="toggle-switch">
                <input type="checkbox" id="milestone-alerts" defaultChecked />
                <label htmlFor="milestone-alerts"></label>
              </div>
            </div>
            <button className="button button-primary">Update Notification Settings</button>
          </section>
        )}

        {activeTab === 'privacy' && (
          <section className="privacy-section">
            <h2>Data & Privacy Settings</h2>
            <div className="form-group">
              <label htmlFor="data-export">Data Export</label>
              <button className="button button-secondary">
                <Download className="icon" /> Export All Data
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="account-deletion">Account Deletion</label>
              <button className="button button-danger">
                <Trash2 className="icon" /> Request Account Deletion
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="privacy-control">Privacy Control</label>
              <div className="toggle-switch">
                <input type="checkbox" id="privacy-control" defaultChecked />
                <label htmlFor="privacy-control"></label>
              </div>
              <span>Make startup profile publicly visible</span>
            </div>
            <button className="button button-primary">Save Privacy Settings</button>
          </section>
        )}

        {activeTab === 'email' && (
          <section className="email-section">
            <h2>Email Preferences</h2>
            <div className="form-group">
              <label htmlFor="newsletter">Newsletter Subscription</label>
              <div className="toggle-switch">
                <input type="checkbox" id="newsletter" defaultChecked />
                <label htmlFor="newsletter"></label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="activity-summaries">Activity Summaries</label>
              <select id="activity-summaries">
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="never">Never</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="event-invitations">Event Invitations</label>
              <div className="toggle-switch">
                <input type="checkbox" id="event-invitations" defaultChecked />
                <label htmlFor="event-invitations"></label>
              </div>
            </div>
            <button className="button button-primary">Update Email Preferences</button>
          </section>
        )}
      </main>

      <style jsx>{`
        .settings-page {
          font-family: 'Roboto', sans-serif;
          color: #212121;
          background-color: #F5F5F5;
          min-height: 100vh;
          padding: 20px;
        }

        .settings-page.dark {
          background-color: #121212;
          color: #E0E0E0;
        }

        .header {
          margin-bottom: 20px;
        }

        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .breadcrumbs {
          font-size: 14px;
          color: #757575;
        }

        .tab-menu {
          display: flex;
          background-color: #FFFFFF;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .dark .tab-menu {
          background-color: #1E1E1E;
        }

        .tab-button {
          flex: 1;
          padding: 15px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          color: #757575;
          transition: background-color 0.3s, color 0.3s;
        }

        .tab-button:hover {
          background-color: #F5F5F5;
        }

        .dark .tab-button:hover {
          background-color: #2C2C2C;
        }

        .tab-button.active {
          background-color: #E3F2FD;
          color: #1A73E8;
        }

        .dark .tab-button.active {
          background-color: #1A73E8;
          color: #FFFFFF;
        }

        .main-content {
          background-color: #FFFFFF;
          border-radius: 0 0 8px 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dark .main-content {
          background-color: #1E1E1E;
        }

        h2 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        select,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #D1D1D1;
          border-radius: 4px;
          font-size: 14px;
        }

        .dark input[type="text"],
        .dark input[type="email"],
        .dark input[type="password"],
        .dark select,
        .dark textarea {
          background-color: #2C2C2C;
          border-color: #3C3C3C;
          color: #E0E0E0;
        }

        textarea {
          height: 100px;
          resize: vertical;
        }

        .button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .button-primary {
          background-color: #1A73E8;
          color: #FFFFFF;
        }

        .button-primary:hover {
          background-color: #1557B0;
        }

        .button-secondary {
          background-color: #F5F5F5;
          color: #212121;
        }

        .button-secondary:hover {
          background-color: #E0E0E0;
        }

        .button-danger {
          background-color: #F44336;
          color: #FFFFFF;
        }

        .button-danger:hover {
          background-color: #D32F2F;
        }

        .logo-preview {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .logo-preview img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
        }

        .team-list {
          list-style-type: none;
          padding: 0;
        }

        .team-member {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border: 1px solid #D1D1D1;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .dark .team-member {
          border-color: #3C3C3C;
        }

        .add-member `}
        </style>
    </div>
    )
}
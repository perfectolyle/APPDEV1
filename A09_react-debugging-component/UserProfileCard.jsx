import { useState } from 'react';

const userData = {
  name: "Perfecto S. Gardoce III",
  avatarUrl: "https://github.com/perfectolyle.png", // GitHub avatar
  bio: "BSIS-3 Student.",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

// <UserProfileCard user={userData} />
function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleToggleFavorite() {
    setIsFavorited((prev) => !prev);
  }

  return (
    <>
      <div className="profile-card">
        <img src={user.avatarUrl} alt={user.name} />
        <h2>{user.name}</h2>
        <label htmlFor="bio">Bio</label>
        <p id="bio">{user.bio}</p>
        <h3>Skills</h3>
        <ul>
          {user.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div style={{ color: 'blue', fontWeight: 'bold' }}>
          Messages sent: {messageCount}
        </div>
        {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
        {user.isOnline && (
          <button onClick={handleToggleFavorite}>
            {isFavorited ? '★ Favorited' : '☆ Favorite'}
          </button>
        )}
        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p className="footer">Card last updated: {user.lastUpdated}</p>
    </>
  );
}

export default UserProfileCard;

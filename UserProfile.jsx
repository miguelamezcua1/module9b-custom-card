function UserProfile() {
  const name = 'Ryan Smith';
  const bio = 'Front-end developer who loves clean UI and modern web design.';
  const profileImage =
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face';

  return (
    <div
      style={{
        maxWidth: '420px',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(135deg, #ffffff, #f9fafb)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        transition: 'transform 0.2s',
      }}
    >
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #ddd',
          marginBottom: '18px',
        }}
      />
      <h1 style={{ fontSize: '26px', fontWeight: '600', margin: '8px 0' }}>
        {name}
      </h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '12px' }}>
        {bio}
      </p>
      <button
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          color: '#fff',
          backgroundColor: '#0078d4',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Connect
      </button>
    </div>
  );
}

export default UserProfile;

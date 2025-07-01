const Profile = ({ user }) => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px" }}>
      <h1>Perfil</h1>
      {user ? (
        <p>Nombre de usuario: {user.username}</p>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
};

export default Profile;

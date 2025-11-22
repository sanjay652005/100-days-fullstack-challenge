import React from "react";

export default function UserCard({ user }) {
  if (!user) return null;

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const location = `${user.location.city}, ${user.location.state || user.location.country}`;

  return (
    <article className="card">
      <img className="avatar" src={user.picture.large} alt={fullName} />
      <div className="card-body">
        <h3 className="name">{fullName}</h3>
        <p className="email">{user.email}</p>
        <p className="location">{location}</p>
        <div className="meta">
          <span>Age: {user.dob?.age ?? "—"}</span>
          <span>Gender: {user.gender}</span>
        </div>
      </div>
    </article>
  );
}

import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!auth.currentUser) return;

      const q = query(
        collection(db, 'bookings'),
        where('userId', '==', auth.currentUser.uid)
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map(b => (
            <li key={b.id}>
              {b.destinationName} — booked on {b.bookedAt.toDate().toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookings;

import React, { useState, useEffect } from 'react';

//const [users, setUsers] = useState();

// User anlegen

export const addNewUser = async (mail, passw) => {
  try {
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: mail, password: passw }),
    });

    const data = await response.json();

    console.log(data);

    if (data.error) {
      window.alert(data.error);
    } else {
      window.alert(`Willkommen an Board : ${mail}  !`);
    }

    return;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten von API1:', error);
  }
};

// User login - Abfrage ob User existier -

export const userlogin = async (mail, passw) => {
  try {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: mail, password: passw }),
    });

    const data = await response.json();

    let token = data.token;

    localStorage.clear();

    localStorage.setItem('token', token);
    /*     console.log(response);
    console.log(data.token);
    console.log(typeof data); */

    if (data.error) {
      window.alert(data.error);
    } else {
      window.alert(`Schön das du wieder hier bist : ${mail}  !`);
    }

    return;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten von API1:', error);
  }
};

// Event abrufen

export const catchEvent = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/events/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    console.log(data);

    /*     if (data.error) {
      window.alert(data.error);
    } else {
      window.alert(`Funktioniert  !`);
    } */

    return data;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten von API1:', error);
  }
};

// Event hinzufügen

export const setNewEvent = async (formData) => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('http://localhost:3001/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.error) {
      window.alert(data.error);
    } else {
      window.alert(`Das Event : ${formData.title}  wurde hinzugefügt !`);
    }

    return;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten von API1:', error);
  }
};

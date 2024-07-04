import React, { useState, useEffect } from 'react';

// User anlegen

export const addNewUser = async (mail, passw) => {
  /*  console.log(typeof mail);
  console.log(typeof passw); */
  try {
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: mail, password: passw }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten von API1:', error);
  }
};

// User login - Abfrage ob User existier -

export const userlogin = async () => {};

// Event abrufen

export const catchAllEvents = async () => {};

// Event hinzufügen

export const setNewEvent = async () => {};

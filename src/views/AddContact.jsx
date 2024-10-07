import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>AddContact</div>
  );
};
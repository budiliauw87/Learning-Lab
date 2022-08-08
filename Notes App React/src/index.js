/**
 * Practice Componen React 
 * Learning From Dicoding Academy Platform
 * ------------------------------
 * @Author : Budiliauw87
 * @email  : budiliauw87@gmail.com
 * 
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import MyNoteApp  from './component/MyNoteApp';

const root = createRoot(document.getElementById('root'));
root.render(<MyNoteApp />);
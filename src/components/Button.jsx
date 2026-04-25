import React from 'react';

export default function Button({ title, cn, click }) {
  return (
    <button className={cn} onClick={click}>{title}</button>
  )
}
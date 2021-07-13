import React from 'react';

interface BaseFieldProps {
  label?: string | JSX.Element | React.Component;
  content: string | JSX.Element | JSX.Element[] | React.Component | React.Component[];
}

export const Field: React.FC<BaseFieldProps> = function ({ label, content }) {
  return (
    <div>
      <div>{label}</div>
      <div>{content}</div>
    </div>
  );
}
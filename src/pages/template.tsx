import React from 'react';
import DashBoard from '../components/dashboard';
interface IProps {
  children: React.ReactNode;
}
const Teamplate = (props: IProps) => {
  return (
    <>
      <DashBoard />
      <div className="infoUser"> {props.children}</div>
    </>
  );
};

export default Teamplate;